/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { UserSettings } from '../types';
import { StorageService } from './storageService';

export interface GeminiResponse {
  text: string;
  model: string;
  usage?: any;
}

export const GeminiService = {
  async testConnection(customApiKey?: string, model?: string): Promise<{ connected: boolean; reply?: string; error?: string }> {
    try {
      const settings = StorageService.getSettings();
      const apiKey = customApiKey || settings.customApiKey;
      const response = await fetch('/api/gemini/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customApiKey: apiKey,
          model: model || settings.geminiModel || 'gemini-3.8-flash',
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Kết nối thất bại');
      }
      return data;
    } catch (e: any) {
      return {
        connected: false,
        error: e?.message || 'Không thể kết nối với server/Gemini API',
      };
    }
  },

  async generate(
    prompt: string,
    options?: {
      systemInstruction?: string;
      temperature?: number;
      responseMimeType?: string;
      model?: string;
    }
  ): Promise<string> {
    const settings = StorageService.getSettings();
    const response = await fetch('/api/gemini/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        systemInstruction: options?.systemInstruction,
        temperature: options?.temperature ?? 0.7,
        responseMimeType: options?.responseMimeType,
        model: options?.model || settings.geminiModel || 'gemini-3.8-flash',
        customApiKey: settings.customApiKey,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Lỗi khi tạo nội dung từ AI');
    }
    return data.text || '';
  },

  async generateJson<T>(
    prompt: string,
    options?: {
      systemInstruction?: string;
      temperature?: number;
      model?: string;
    }
  ): Promise<T> {
    const text = await this.generate(prompt, {
      ...options,
      responseMimeType: 'application/json',
    });

    try {
      // Clean potential markdown wrap if any
      const cleaned = text
        .replace(/^```json/m, '')
        .replace(/^```/m, '')
        .replace(/```$/m, '')
        .trim();
      return JSON.parse(cleaned) as T;
    } catch (e: any) {
      console.error('Failed to parse JSON response:', text);
      throw new Error('Lỗi phân tích cú pháp JSON từ phản hồi AI: ' + e.message);
    }
  },
};
