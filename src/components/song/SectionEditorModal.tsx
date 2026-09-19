/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import {
  Sparkles,
  Wand2,
  Lock,
  Unlock,
  Copy,
  Check,
  X,
  Edit3,
  Feather,
  Heart,
  Smile,
  Maximize2,
  Minimize2,
  Image as ImageIcon,
  Compass,
} from 'lucide-react';
import { SongSection } from '../../types';

interface SectionEditorModalProps {
  section: SongSection | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (sectionId: string, newLyrics: string) => void;
  onModifyWithAi: (sectionId: string, modifier: string) => Promise<void>;
  onToggleLock: (sectionId: string) => void;
  isModifying: boolean;
}

export const SectionEditorModal: React.FC<SectionEditorModalProps> = ({
  section,
  isOpen,
  onClose,
  onSave,
  onModifyWithAi,
  onToggleLock,
  isModifying,
}) => {
  if (!isOpen || !section) return null;

  const [lyricsText, setLyricsText] = useState(section.lyrics);
  const [copied, setCopied] = useState(false);

  const modifiers = [
    { label: 'Tự Nhiên Hơn (More Natural)', desc: 'Gần gũi lời nói đời thường', icon: Smile },
    { label: 'Thi Vị & Nghệ Thuật (More Poetic)', desc: 'Tăng vẻ đẹp ngôn từ', icon: Feather },
    { label: 'Xúc Động & Sâu Lắng (More Emotional)', desc: 'Chạm sâu cảm xúc', icon: Heart },
    { label: 'Đổi Hình Tượng (Change Imagery)', desc: 'Thay đổi ẩn dụ và chi tiết', icon: ImageIcon },
    { label: 'Mở Rộng Ý Nghĩa (Expand Meaning)', desc: 'Làm rõ thông điệp ngầm', icon: Compass },
    { label: 'Rút Ngắn Câu Hát (Shorten)', desc: 'Cô đọng, súc tích hơn', icon: Minimize2 },
    { label: 'Kéo Dài Phát Triển (Expand)', desc: 'Bổ sung thêm 2-4 câu hát', icon: Maximize2 },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(`${section.label}\n\n${lyricsText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl rounded-2xl border p-6 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Edit3 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
                CHỈNH SỬA PHÂN ĐOẠN: {section.label}
              </h3>
              <p className="text-[11px]" style={{ color: 'var(--color-muted-text)' }}>
                Ý định: {section.intent || 'Truyền tải cảm xúc đoạn'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => onToggleLock(section.id)}
              className="p-1.5 rounded-lg border text-xs flex items-center space-x-1 cursor-pointer"
              style={{
                backgroundColor: section.isLocked ? 'var(--color-accent)' : 'var(--color-secondary-surface)',
                color: section.isLocked ? '#ffffff' : 'var(--color-text)',
                borderColor: 'var(--color-border)',
              }}
              title={section.isLocked ? 'Đoạn này đã bị khóa' : 'Khóa đoạn này'}
            >
              {section.isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
              <span>{section.isLocked ? 'LOCKED' : 'Khóa'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg border hover:opacity-80 cursor-pointer"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted-text)' }}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section Lyrics Textarea */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
            Lời Hát Hiện Tại:
          </label>
          <textarea
            value={lyricsText}
            onChange={(e) => setLyricsText(e.target.value)}
            disabled={section.isLocked}
            rows={6}
            className="w-full p-3.5 rounded-xl text-sm leading-relaxed border outline-none font-serif resize-y"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
          />
        </div>

        {/* AI Quick Modifiers */}
        <div className="space-y-2">
          <label className="text-xs font-semibold flex items-center space-x-1 text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Tinh Chỉnh & Viết Lại Phân Đoạn Này:</span>
          </label>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {modifiers.map((mod) => {
              const Icon = mod.icon;
              return (
                <button
                  key={mod.label}
                  type="button"
                  disabled={isModifying || section.isLocked}
                  onClick={() => onModifyWithAi(section.id, mod.label)}
                  className="p-2 rounded-lg border text-left text-xs font-medium transition-all hover:border-amber-500 cursor-pointer disabled:opacity-50"
                  style={{
                    backgroundColor: 'var(--color-secondary-surface)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                  title={mod.desc}
                >
                  <div className="flex items-center space-x-1.5 text-amber-400">
                    <Icon className="w-3.5 h-3.5" />
                    <span className="font-semibold truncate">{mod.label.split('(')[0]}</span>
                  </div>
                  <p className="text-[10px] mt-0.5 truncate" style={{ color: 'var(--color-muted-text)' }}>
                    {mod.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <button
            type="button"
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-lg border text-xs font-semibold flex items-center space-x-1.5 cursor-pointer hover:opacity-80"
            style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã Copy' : 'Copy Đoạn Này'}</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer hover:opacity-80"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted-text)' }}
            >
              Hủy
            </button>
            <button
              type="button"
              onClick={() => {
                onSave(section.id, lyricsText);
                onClose();
              }}
              disabled={section.isLocked}
              className="px-4 py-1.5 rounded-lg text-xs font-bold shadow-md cursor-pointer disabled:opacity-50"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#ffffff',
              }}
            >
              Lưu Thay Đổi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
