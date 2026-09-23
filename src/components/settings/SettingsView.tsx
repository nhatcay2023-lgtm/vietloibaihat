/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import {
  Settings,
  Key,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  Palette,
  Type,
  Sliders,
  Sparkles,
  Save,
  RotateCcw,
  Loader2,
  ShieldCheck,
} from 'lucide-react';
import { THEMES, FONTS, applyAppTheme } from '../../data/themes';
import { UserSettings } from '../../types';
import { GeminiService } from '../../services/geminiService';

interface SettingsViewProps {
  settings: UserSettings;
  onUpdateSettings: (newSettings: Partial<UserSettings>) => void;
  onResetDefaults: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  settings,
  onUpdateSettings,
  onResetDefaults,
}) => {
  const [apiKeyInput, setApiKeyInput] = useState(settings.customApiKey || '');
  const [showApiKey, setShowApiKey] = useState(false);
  const [testStatus, setTestStatus] = useState<{
    testing: boolean;
    success?: boolean;
    message?: string;
  }>({ testing: false });

  const handleTestApiKey = async () => {
    setTestStatus({ testing: true });
    try {
      const res = await GeminiService.testConnection(apiKeyInput, settings.geminiModel);
      if (res.connected) {
        setTestStatus({
          testing: false,
          success: true,
          message: 'Kết nối Gemini API thành công! Mô hình sẵn sàng phục vụ.',
        });
        onUpdateSettings({ customApiKey: apiKeyInput });
      } else {
        setTestStatus({
          testing: false,
          success: false,
          message: res.error || 'Không thể kết nối. Vui lòng kiểm tra lại API Key.',
        });
      }
    } catch (e: any) {
      setTestStatus({
        testing: false,
        success: false,
        message: e?.message || 'Lỗi kết nối Gemini API.',
      });
    }
  };

  const handleSaveApiKey = () => {
    onUpdateSettings({ customApiKey: apiKeyInput });
  };

  return (
    <div id="settings-view" className="space-y-6 animate-in fade-in duration-200 max-w-5xl mx-auto">
      {/* Header */}
      <div
        className="p-6 md:p-8 rounded-2xl border transition-all shadow-sm space-y-2"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              CÀI ĐẶT HỆ THỐNG & TÙY BIẾN GIAO DIỆN
            </h2>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Quản lý Gemini API Key, 10 Giao diện (Themes), 10 Font chữ và 5 Tham số điều chỉnh AI
            </p>
          </div>
        </div>
      </div>

      {/* 1. GEMINI API SETTINGS */}
      <div
        id="settings-api-card"
        className="p-6 rounded-2xl border transition-all shadow-sm space-y-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center space-x-2">
            <Key className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              CẤU HÌNH GEMINI API & MÔ HÌNH
            </h3>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Mặc định: Server Environment API Key
          </span>
        </div>

        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
              Custom Gemini API Key (Tùy chọn - nếu bạn muốn dùng Key cá nhân riêng):
            </label>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  placeholder="Để trống nếu muốn dùng API Key mặc định của hệ thống..."
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  className="w-full px-3 py-2 pr-10 rounded-xl text-xs border outline-none font-mono"
                  style={{
                    backgroundColor: 'var(--color-secondary-surface)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                >
                  {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <button
                type="button"
                onClick={handleSaveApiKey}
                className="px-3.5 py-2 rounded-xl text-xs font-bold border hover:opacity-90 cursor-pointer"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
              >
                Lưu
              </button>

              <button
                type="button"
                onClick={handleTestApiKey}
                disabled={testStatus.testing}
                className="px-4 py-2 rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center space-x-1.5 disabled:opacity-50"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#ffffff',
                }}
              >
                {testStatus.testing ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5" />
                )}
                <span>{testStatus.testing ? 'Đang test...' : 'Kiểm Tra Kết Nối'}</span>
              </button>
            </div>
          </div>

          {/* Test Status Message */}
          {testStatus.message && (
            <div
              className={`p-3 rounded-xl border text-xs flex items-center space-x-2 ${
                testStatus.success
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                  : 'bg-red-500/10 text-red-300 border-red-500/30'
              }`}
            >
              {testStatus.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <XCircle className="w-4 h-4 text-red-400 shrink-0" />
              )}
              <span>{testStatus.message}</span>
            </div>
          )}

          {/* Model Selector */}
          <div className="space-y-1 pt-2">
            <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
              Mô Hình AI Sáng Tác (Model):
            </label>
            <select
              value={settings.geminiModel}
              onChange={(e) => onUpdateSettings({ geminiModel: e.target.value })}
              className="text-xs font-medium rounded-xl px-3 py-2 border outline-none cursor-pointer w-full sm:w-80"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <option value="gemini-3.8-flash">Gemini 3.8 Flash (Mặc định - Cân bằng & Sáng tạo cao)</option>
              <option value="gemini-3.1-flash-lite">Gemini 3.1 Flash Lite (Siêu nhanh, phản hồi tức thì & ổn định cao)</option>
              <option value="gemini-flash-latest">Gemini Flash Latest (Bản cập nhật mới nhất)</option>
              <option value="gemini-3.1-pro-preview">Gemini 3.1 Pro Preview (Phân tích chuyên sâu & phức hợp)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. THEMES (10 THEMES) */}
      <div
        id="settings-theme-card"
        className="p-6 rounded-2xl border transition-all shadow-sm space-y-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center space-x-2">
            <Palette className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              GIAO DIỆN & MÀU SẮC (10 THEMES)
            </h3>
          </div>
          <span className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
            Chọn để thay đổi toàn bộ màu sắc, thanh bên, tiêu đề và phân đoạn ca khúc
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {THEMES.map((th) => {
            const activeThemeId = settings.themeId || settings.theme || 'midnight-studio';
            const isSelected = activeThemeId === th.id;

            return (
              <button
                key={th.id}
                id={`theme-btn-${th.id}`}
                type="button"
                onClick={() => {
                  applyAppTheme(th.id, settings.fontFamily || settings.uiFont);
                  onUpdateSettings({ themeId: th.id, theme: th.id });
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer space-y-2 relative overflow-hidden group ${
                  isSelected
                    ? 'ring-2 ring-amber-500 shadow-lg scale-105'
                    : 'hover:scale-102 hover:shadow-md opacity-90 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: th.previewBg,
                  borderColor: isSelected ? th.previewAccent : 'var(--color-border)',
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <div
                      className="w-4 h-4 rounded-full border shadow-sm"
                      style={{ backgroundColor: th.previewAccent, borderColor: 'rgba(255,255,255,0.4)' }}
                    />
                    <span
                      className="text-[9px] uppercase font-extrabold px-1.5 py-0.2 rounded"
                      style={{
                        backgroundColor: th.category === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
                        color: th.previewText,
                      }}
                    >
                      {th.category === 'dark' ? 'Dark' : 'Light'}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="flex items-center space-x-1 text-amber-400">
                      <CheckCircle2 className="w-3.5 h-3.5 fill-amber-400 text-black" />
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-xs font-bold truncate" style={{ color: th.previewText }}>
                    {th.nameVi}
                  </div>
                  <div className="text-[10px] opacity-75 truncate" style={{ color: th.previewText }}>
                    {th.name}
                  </div>
                </div>

                {/* Color swatches preview bar */}
                <div className="flex items-center space-x-1 pt-1 opacity-70">
                  <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: th.colors.surface }} />
                  <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: th.colors.secondarySurface }} />
                  <div className="h-1.5 w-full rounded-full" style={{ backgroundColor: th.colors.accent }} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. FONTS (10 FONTS) */}
      <div
        id="settings-fonts-card"
        className="p-6 rounded-2xl border transition-all shadow-sm space-y-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center space-x-2">
            <Type className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              FONT CHỮ HIỂN THỊ (10 GOOGLE FONTS)
            </h3>
          </div>
          <span className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
            Áp dụng tức thì cho giao diện và bản in ca từ
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {FONTS.map((font) => {
            const activeFont = settings.fontFamily || settings.uiFont || 'Inter';
            const isSelected = activeFont === font.family || activeFont === font.id;

            return (
              <button
                key={font.id}
                id={`font-btn-${font.id}`}
                type="button"
                onClick={() => {
                  applyAppTheme(settings.themeId || settings.theme, font.family);
                  onUpdateSettings({ fontFamily: font.family, uiFont: font.family });
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer space-y-1 ${
                  isSelected ? 'ring-2 ring-amber-500 shadow-md scale-105' : 'hover:opacity-90'
                }`}
                style={{
                  backgroundColor: 'var(--color-secondary-surface)',
                  borderColor: isSelected ? 'var(--color-accent)' : 'var(--color-border)',
                  fontFamily: font.family,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold truncate" style={{ color: 'var(--color-text)' }}>
                    {font.name}
                  </span>
                  {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1" />}
                </div>
                <p className="text-[11px] truncate opacity-70" style={{ color: 'var(--color-muted-text)' }}>
                  Giai điệu ca từ thi vị
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. 5 AI PARAMETERS SLIDERS */}
      <div
        id="settings-ai-params-card"
        className="p-6 rounded-2xl border transition-all shadow-sm space-y-5"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center space-x-2">
            <Sliders className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              5 THAM SỐ TINH CHỈNH BỘ NÃO AI (AI PARAMETERS)
            </h3>
          </div>

          <button
            type="button"
            onClick={onResetDefaults}
            className="text-xs flex items-center space-x-1 opacity-70 hover:opacity-100 hover:text-amber-400 cursor-pointer"
            style={{ color: 'var(--color-muted-text)' }}
          >
            <RotateCcw className="w-3 h-3" />
            <span>Khôi phục mặc định</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Temperature */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold" style={{ color: 'var(--color-text)' }}>
              <span>1. Độ Sáng Tạo & Đột Phá (Temperature)</span>
              <span className="text-amber-400 font-mono">{settings.temperature}</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="1.0"
              step="0.05"
              value={settings.temperature}
              onChange={(e) => onUpdateSettings({ temperature: parseFloat(e.target.value) })}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px]" style={{ color: 'var(--color-muted-text)' }}>
              <span>Khuôn mẫu (0.2)</span>
              <span>Cân bằng (0.7)</span>
              <span>Đột phá bất ngờ (1.0)</span>
            </div>
          </div>

          {/* Poetic Density */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold" style={{ color: 'var(--color-text)' }}>
              <span>2. Mật Độ Thi Vị & Ẩn Dụ (Poetic Density)</span>
              <span className="text-amber-400 font-mono">{settings.poeticDensity}/5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={settings.poeticDensity}
              onChange={(e) => onUpdateSettings({ poeticDensity: parseInt(e.target.value) })}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px]" style={{ color: 'var(--color-muted-text)' }}>
              <span>Mộc mạc</span>
              <span>Vừa phải</span>
              <span>Đầy chất thơ</span>
            </div>
          </div>

          {/* Story Fidelity */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold" style={{ color: 'var(--color-text)' }}>
              <span>3. Độ Bám Sát Cốt Truyện (Story Fidelity)</span>
              <span className="text-amber-400 font-mono">{settings.storyFidelity}/5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={settings.storyFidelity}
              onChange={(e) => onUpdateSettings({ storyFidelity: parseInt(e.target.value) })}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px]" style={{ color: 'var(--color-muted-text)' }}>
              <span>Lấy cảm hứng</span>
              <span>Bám sát 100%</span>
            </div>
          </div>

          {/* Production Guide Depth */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold" style={{ color: 'var(--color-text)' }}>
              <span>4. Độ Chi Tiết Hướng Dẫn Phối Khí (Guide Depth)</span>
              <span className="text-amber-400 font-mono">{settings.guideDepth}/5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              value={settings.guideDepth}
              onChange={(e) => onUpdateSettings({ guideDepth: parseInt(e.target.value) })}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px]" style={{ color: 'var(--color-muted-text)' }}>
              <span>Ngắn gọn</span>
              <span>Chuyên sâu ~850 từ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
