/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Sparkles, Wand2, Sliders } from 'lucide-react';
import { CREATIVE_CONTROLS } from '../../data/controlsData';
import { ControlsRecord, ControlState } from '../../types';

interface BasicModePanelProps {
  controls: ControlsRecord;
  onChangeControlState: (id: string, state: ControlState, value?: string | null) => void;
  onConfigureAllByAi: () => Promise<void>;
  isResolving: boolean;
  onSwitchToAdvanced: () => void;
}

export const BasicModePanel: React.FC<BasicModePanelProps> = ({
  controls,
  onChangeControlState,
  onConfigureAllByAi,
  isResolving,
  onSwitchToAdvanced,
}) => {
  const basicControlIds = ['genre', 'mood', 'emotion', 'vocal', 'overallGoal', 'instruments'];

  return (
    <div
      id="basic-mode-panel"
      className="p-5 md:p-6 rounded-2xl border transition-all shadow-sm space-y-4"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
        <div>
          <div className="flex items-center space-x-2">
            <h2 className="text-base font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              CHẾ ĐỘ RÚT GỌN (BASIC STUDIO)
            </h2>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase bg-blue-500/20 text-blue-400">
              QUICK START
            </span>
          </div>
          <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
            Chọn nhanh các thông số chính, các mục còn lại AI sẽ tự động tối ưu
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={onConfigureAllByAi}
            disabled={isResolving}
            className="inline-flex items-center justify-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-md cursor-pointer disabled:opacity-50"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: '#ffffff',
            }}
          >
            <Wand2 className={`w-3.5 h-3.5 ${isResolving ? 'animate-spin' : ''}`} />
            <span>AI CẤU HÌNH TOÀN BỘ</span>
          </button>

          <button
            type="button"
            onClick={onSwitchToAdvanced}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer hover:opacity-80"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            Mở 21 Controls
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {basicControlIds.map((id) => {
          const ctrl = CREATIVE_CONTROLS.find((c) => c.id === id);
          if (!ctrl) return null;
          const currentVal = controls[id]?.value || 'AI AUTO';

          return (
            <div
              key={id}
              className="p-3.5 rounded-xl border space-y-1.5"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <label className="text-xs font-bold block" style={{ color: 'var(--color-text)' }}>
                {ctrl.nameVi.split('.')[1]?.trim() || ctrl.name}
              </label>

              <select
                value={controls[id]?.state === 'AI_AUTO' ? 'AI_AUTO' : currentVal}
                onChange={(e) => {
                  if (e.target.value === 'AI_AUTO') {
                    onChangeControlState(id, 'AI_AUTO');
                  } else {
                    onChangeControlState(id, 'USER_SELECTED', e.target.value);
                  }
                }}
                className="w-full text-xs font-medium rounded-lg p-2 border outline-none cursor-pointer"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }}
              >
                <option value="AI_AUTO">✨ [AI AUTO] Tự động suy luận</option>
                {ctrl.options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </div>
  );
};
