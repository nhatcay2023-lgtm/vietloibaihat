/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  Loader2,
  Cpu,
  Layers,
  FileCheck,
  Disc3,
  XCircle,
} from 'lucide-react';
import { GenerationStepStatus, ControlsRecord } from '../../types';

interface AiScanVisualizerProps {
  progress: GenerationStepStatus | null;
  isOpen: boolean;
  onCancel?: () => void;
  controls?: ControlsRecord;
}

export const AiScanVisualizer: React.FC<AiScanVisualizerProps> = ({
  progress,
  isOpen,
  onCancel,
  controls,
}) => {
  if (!isOpen || !progress) return null;

  const pipelineStages = [
    { step: 1, name: 'AI Scan Story & Context', desc: 'Quét cốt truyện, tâm lý nhân vật & bối cảnh' },
    { step: 2, name: 'Resolve Creative Controls', desc: 'Suy luận 21 mục AI_AUTO & kiểm tra tương thích' },
    { step: 3, name: 'Master Song Context', desc: 'Tổng hợp Master Context & Style DNA' },
    { step: 4, name: 'Song Blueprint', desc: 'Thiết kế bố cục các đoạn & nhãn tiếng Anh' },
    { step: 5, name: 'Meaning Layer', desc: 'Đúc kết tầng nghĩa sâu thành câu hát ngắn' },
    { step: 6, name: 'Poetic Lyrics & Title', desc: 'Sáng tác lời hát, gieo vần & lọc sáo rỗng' },
    { step: 7, name: 'Production Guide (~850 từ)', desc: 'Soạn cẩm nang phối khí & 21 khía cạnh sản xuất' },
    { step: 8, name: 'Save & Update Memory', desc: 'Lưu phiên bản và cập nhật bộ nhớ dự án' },
  ];

  return (
    <div
      id="ai-scan-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-in fade-in duration-200"
    >
      <div
        className="w-full max-w-xl rounded-2xl border p-6 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Cpu className="w-5 h-5 animate-spin" />
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
                AI SONGWRITING BRAIN ENGINE
              </h3>
              <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
                Đang vận hành chu trình sáng tác khép kín 8 chặng chuyên sâu...
              </p>
            </div>
          </div>

          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="text-xs px-2.5 py-1 rounded-lg border hover:bg-red-500/10 hover:text-red-400 transition-colors"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted-text)' }}
            >
              Hủy
            </button>
          )}
        </div>

        {/* Current Active Step Banner */}
        <div
          className="p-4 rounded-xl border flex items-center space-x-3"
          style={{
            backgroundColor: 'var(--color-secondary-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <Loader2 className="w-5 h-5 text-amber-400 animate-spin shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400">
                Chặng {progress.step}/{progress.totalSteps}: {progress.name}
              </span>
              <span className="text-[10px] font-semibold text-gray-400">
                {Math.round((progress.step / progress.totalSteps) * 100)}%
              </span>
            </div>
            <p className="text-xs truncate mt-0.5" style={{ color: 'var(--color-text)' }}>
              {progress.detail || 'Đang xử lý dữ liệu...'}
            </p>
          </div>
        </div>

        {/* Stage Steps List */}
        <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
          {pipelineStages.map((stage) => {
            const isDone = stage.step < progress.step;
            const isCurrent = stage.step === progress.step;

            return (
              <div
                key={stage.step}
                className={`p-2.5 rounded-lg border text-xs flex items-center justify-between transition-all ${
                  isCurrent ? 'ring-1 ring-amber-500 shadow-sm' : ''
                }`}
                style={{
                  backgroundColor: isCurrent
                    ? 'var(--color-tag-bg)'
                    : 'var(--color-secondary-surface)',
                  borderColor: isCurrent ? 'var(--color-accent)' : 'var(--color-border)',
                }}
              >
                <div className="flex items-center space-x-2.5">
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : isCurrent ? (
                    <Loader2 className="w-4 h-4 text-amber-400 animate-spin shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-gray-500 shrink-0 flex items-center justify-center text-[9px] text-gray-500">
                      {stage.step}
                    </div>
                  )}

                  <div>
                    <span
                      className={`font-semibold block ${
                        isCurrent ? 'text-amber-400' : isDone ? 'text-emerald-300' : ''
                      }`}
                      style={{ color: isCurrent ? undefined : isDone ? undefined : 'var(--color-text)' }}
                    >
                      {stage.name}
                    </span>
                    <span className="text-[11px]" style={{ color: 'var(--color-muted-text)' }}>
                      {stage.desc}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider opacity-70">
                  {isDone ? 'Hoàn thành' : isCurrent ? 'Đang chạy' : 'Chờ'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Context Scan Checklist Summary */}
        <div
          className="p-3 rounded-xl border text-[11px] grid grid-cols-2 sm:grid-cols-4 gap-2 text-center"
          style={{
            backgroundColor: 'var(--color-secondary-surface)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-muted-text)',
          }}
        >
          <div>
            <span className="text-emerald-400 block font-bold">✓ Story</span>
            <span>Đã quét</span>
          </div>
          <div>
            <span className="text-emerald-400 block font-bold">✓ 21 Controls</span>
            <span>Đã khóa</span>
          </div>
          <div>
            <span className="text-emerald-400 block font-bold">✓ Style DNA</span>
            <span>Đã nạp</span>
          </div>
          <div>
            <span className="text-emerald-400 block font-bold">✓ Meaning Layer</span>
            <span>Khởi tạo</span>
          </div>
        </div>
      </div>
    </div>
  );
};
