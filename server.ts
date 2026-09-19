/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    appName: 'AI Songwriter Studio',
    hasApiKey: !!process.env.GEMINI_API_KEY,
  });
});

// Helper for delays
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Helper: Determine candidate fallback models ordered by availability & speed
function getFallbackModelList(primaryModel: string): string[] {
  const preferredOrder = [
    primaryModel,
    'gemini-3.1-flash-lite',
    'gemini-flash-latest',
    'gemini-3.8-flash',
    'gemini-3.1-pro-preview',
  ];
  const uniqueModels: string[] = [];
  for (const m of preferredOrder) {
    if (m && !uniqueModels.includes(m)) {
      uniqueModels.push(m);
    }
  }
  return uniqueModels;
}

// Helper: Check if error is high demand / unavailable
function isHighDemandError(error: any): boolean {
  if (!error) return false;
  const status = error?.status || error?.code || error?.error?.code || error?.error?.status;
  const msg = (error?.message || error?.error?.message || JSON.stringify(error)).toLowerCase();

  return (
    status === 503 ||
    status === 'UNAVAILABLE' ||
    msg.includes('high demand') ||
    msg.includes('unavailable') ||
    msg.includes('temporarily') ||
    msg.includes('overloaded')
  );
}

// Helper: Check if error is general retryable error
function isRetryableError(error: any): boolean {
  if (!error) return false;
  const status = error?.status || error?.code || error?.error?.code || error?.error?.status;
  const msg = (error?.message || error?.error?.message || JSON.stringify(error)).toLowerCase();

  return (
    isHighDemandError(error) ||
    status === 429 ||
    status === 500 ||
    status === 'RESOURCE_EXHAUSTED' ||
    msg.includes('rate limit') ||
    msg.includes('quota')
  );
}

// Helper: Robust generation with retry and instant model fallback
async function generateWithFallback(
  ai: GoogleGenAI,
  primaryModel: string,
  generateParams: { contents: any; config?: any }
): Promise<{ text: string; modelUsed: string; usage?: any }> {
  const modelsToTry = getFallbackModelList(primaryModel);
  let lastError: any = null;

  for (let i = 0; i < modelsToTry.length; i++) {
    const model = modelsToTry[i];
    try {
      const response = await ai.models.generateContent({
        model,
        contents: generateParams.contents,
        config: generateParams.config,
      });

      const text = response.text || '';
      return {
        text,
        modelUsed: model,
        usage: response.usageMetadata,
      };
    } catch (err: any) {
      lastError = err;

      // If high demand (503), switch immediately to the next model without waiting
      if (isHighDemandError(err)) {
        console.log(`[Gemini API] Model ${model} is experiencing high demand (503). Seamlessly switching to next fallback model...`);
        continue;
      }

      // For 429 or transient 500, do a single quick backoff
      if (isRetryableError(err)) {
        console.log(`[Gemini API] Transient rate/connection limit on ${model}, attempting fallback...`);
        await delay(500);
        continue;
      }

      // Non-retryable error (e.g. invalid auth), throw immediately
      throw err;
    }
  }

  throw lastError || new Error('Không thể kết nối đến các mô hình AI sau khi đã thử các model dự phòng.');
}

// Test Connection
app.post('/api/gemini/test', async (req, res) => {
  try {
    const customKey = req.body?.customApiKey;
    const apiKey = customKey || process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(400).json({
        connected: false,
        error: 'Chưa có Gemini API Key. Hãy gắn API key trong Settings hoặc AI Studio Secrets.',
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const model = req.body?.model || 'gemini-3.8-flash';
    const result = await generateWithFallback(ai, model, {
      contents: 'Ping test: respond only with "CONNECTED_OK"',
    });

    res.json({
      connected: true,
      model: result.modelUsed,
      reply: result.text.trim(),
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Gemini Test Error:', error);
    res.status(500).json({
      connected: false,
      error: error?.message || 'Không thể kết nối đến Gemini API do lưu lượng máy chủ cao hoặc API Key chưa hợp lệ. Vui lòng thử lại sau giây lát.',
    });
  }
});

// Structured / Text Generation Endpoint
app.post('/api/gemini/generate', async (req, res) => {
  try {
    const { prompt, systemInstruction, temperature, responseMimeType, model: requestedModel, customApiKey } = req.body;

    const apiKey = customApiKey || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(400).json({
        error: 'Missing API Key. Vui lòng kiểm tra cài đặt API Key trong Secrets/Settings.',
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    const model = requestedModel || 'gemini-3.8-flash';

    const config: any = {
      systemInstruction: systemInstruction || 'You are the core intelligence of AI Songwriter Studio.',
      temperature: typeof temperature === 'number' ? temperature : 0.7,
    };

    if (responseMimeType) {
      config.responseMimeType = responseMimeType;
    }

    const result = await generateWithFallback(ai, model, {
      contents: prompt,
      config,
    });

    res.json({
      text: result.text,
      model: result.modelUsed,
      usage: result.usage,
    });
  } catch (error: any) {
    console.error('Gemini Generate Error:', error);
    res.status(500).json({
      error: error?.message || 'Lỗi khi gọi Gemini API. Máy chủ AI đang trong thời điểm tải cao, vui lòng thử lại sau giây lát.',
    });
  }
});

async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AI Songwriter Studio Server running on http://0.0.0.0:${PORT}`);
  });
}

start();
