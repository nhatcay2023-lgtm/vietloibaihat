/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useMemo } from 'react';
import {
  SlidersHorizontal,
  Lock,
  Unlock,
  Sparkles,
  Search,
  Check,
  Ban,
  ChevronDown,
  ChevronUp,
  Info,
  Layers,
  Wand2,
  RefreshCw,
} from 'lucide-react';
import { CREATIVE_CONTROLS } from '../../data/controlsData';
import { ControlsRecord, ControlState } from '../../types';

interface CreativeControlsPanelProps {
  controls: ControlsRecord;
  onChangeControlState: (id: string, state: ControlState, value?: string | null) => void;
  onToggleLock: (id: string) => void;
  onConfigureAllByAi: () => Promise<void>;
  isResolving: boolean;
}

export const CreativeControlsPanel: React.FC<CreativeControlsPanelProps> = ({
  controls,
  onChangeControlState,
  onToggleLock,
  onConfigureAllByAi,
  isResolving,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedControlId, setExpandedControlId] = useState<string | null>(null);
  const [optionSearch, setOptionSearch] = useState<Record<string, string>>({});

  const categories = ['All', 'Musical', 'Vocal & Sound', 'Lyrical & Poetry', 'Structure & Dynamic', 'Context & Style'];

  const filteredControls = useMemo(() => {
    return CREATIVE_CONTROLS.filter((ctrl) => {
      const matchCategory = selectedCategory === 'All' || ctrl.category === selectedCategory;
      const matchQuery =
        searchQuery.trim() === '' ||
        ctrl.nameVi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ctrl.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ctrl.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div
      id="creative-controls-panel"
      className="p-5 md:p-6 rounded-2xl border transition-all shadow-sm space-y-5"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Top Header & AI Configure Everything Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex items-center space-x-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: 'var(--color-tag-bg)',
              color: 'var(--color-tag-text)',
            }}
          >
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-base font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
                21 CREATIVE CONTROLS
              </h2>
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase bg-amber-500/20 text-amber-400">
                PRO DAW SUITE
              </span>
            </div>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Quy tắc 3 trạng thái: [USER_SELECTED] • [AI_AUTO] • [NONE] + Khóa [LOCK]
            </p>
          </div>
        </div>

        {/* AI CONFIGURE EVERYTHING BUTTON */}
        <button
          id="btn-ai-configure-all"
          type="button"
          onClick={onConfigureAllByAi}
          disabled={isResolving}
          className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer disabled:opacity-50"
          style={{
            backgroundColor: 'var(--color-accent)',
            color: '#ffffff',
          }}
          title="AI đọc Story và tự động suy luận đề xuất cho tất cả các mục AI_AUTO (Không đè lên mục USER / LOCKED)"
        >
          <Wand2 className={`w-3.5 h-3.5 ${isResolving ? 'animate-spin' : ''}`} />
          <span>{isResolving ? 'AI Đang Cấu Hình...' : 'AI CẤU HÌNH TOÀN BỘ'}</span>
        </button>
      </div>

      {/* Filter & Category Pills */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="input-search-controls"
            type="text"
            placeholder="Tìm nhanh trong 21 mục điều khiển..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 rounded-xl text-xs border outline-none transition-all"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
          />
        </div>

        {/* Categories */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: selectedCategory === cat ? 'var(--color-accent)' : 'var(--color-secondary-surface)',
                color: selectedCategory === cat ? '#ffffff' : 'var(--color-text)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 21 Controls List (Accordion based) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredControls.map((ctrl) => {
          const stateData = controls[ctrl.id] || { state: 'AI_AUTO', value: null, isLocked: false };
          const isExpanded = expandedControlId === ctrl.id;
          const searchVal = optionSearch[ctrl.id] || '';

          // Filter options for this control
          const visibleOptions = ctrl.options.filter((opt) =>
            searchVal.trim() === '' ||
            opt.label.toLowerCase().includes(searchVal.toLowerCase()) ||
            opt.description.toLowerCase().includes(searchVal.toLowerCase())
          );

          // Get state badge styling
          let badgeText = 'AI AUTO';
          let badgeBg = 'rgba(59, 130, 246, 0.15)';
          let badgeColor = '#60a5fa';

          if (stateData.state === 'USER_SELECTED') {
            badgeText = 'USER';
            badgeBg = 'rgba(16, 185, 129, 0.15)';
            badgeColor = '#34d399';
          } else if (stateData.state === 'NONE') {
            badgeText = 'NONE';
            badgeBg = 'rgba(239, 68, 68, 0.15)';
            badgeColor = '#f87171';
          }

          return (
            <div
              key={ctrl.id}
              id={`control-card-${ctrl.id}`}
              className={`p-3.5 rounded-xl border transition-all ${
                isExpanded ? 'ring-1 ring-amber-500/50 md:col-span-2' : ''
              }`}
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: stateData.isLocked ? 'var(--color-accent)' : 'var(--color-border)',
              }}
            >
              {/* Header of Item */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold truncate" style={{ color: 'var(--color-text)' }}>
                      {ctrl.nameVi}
                    </span>

                    {/* State Badge */}
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shrink-0"
                      style={{ backgroundColor: badgeBg, color: badgeColor }}
                    >
                      {badgeText}
                    </span>

                    {/* Lock Badge */}
                    {stateData.isLocked && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 flex items-center space-x-1 shrink-0">
                        <Lock className="w-2.5 h-2.5" />
                        <span>LOCKED</span>
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] truncate mt-0.5" style={{ color: 'var(--color-muted-text)' }}>
                    {ctrl.description}
                  </p>
                </div>

                {/* Lock Toggle Button */}
                <button
                  type="button"
                  id={`btn-lock-${ctrl.id}`}
                  onClick={() => onToggleLock(ctrl.id)}
                  className="p-1.5 rounded-lg border transition-colors cursor-pointer shrink-0"
                  style={{
                    backgroundColor: stateData.isLocked ? 'var(--color-accent)' : 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                    color: stateData.isLocked ? '#ffffff' : 'var(--color-muted-text)',
                  }}
                  title={stateData.isLocked ? 'Đã khóa: AI không được thay đổi' : 'Mở khóa'}
                >
                  {stateData.isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* State Control Buttons: [ USER ] [ AI AUTO ] [ NONE ] */}
              <div className="grid grid-cols-3 gap-1.5 mt-2.5">
                {/* SELECT / USER BUTTON */}
                <button
                  type="button"
                  id={`btn-state-user-${ctrl.id}`}
                  onClick={() => {
                    setExpandedControlId(isExpanded ? null : ctrl.id);
                  }}
                  className={`px-2 py-1 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1 border transition-all cursor-pointer truncate ${
                    stateData.state === 'USER_SELECTED' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: stateData.state === 'USER_SELECTED' ? 'var(--color-tag-bg)' : 'var(--color-surface)',
                    color: stateData.state === 'USER_SELECTED' ? 'var(--color-tag-text)' : 'var(--color-text)',
                    borderColor: stateData.state === 'USER_SELECTED' ? 'var(--color-accent)' : 'var(--color-border)',
                  }}
                >
                  <span className="truncate">
                    {stateData.state === 'USER_SELECTED' && stateData.value ? stateData.value : 'Chọn (40)'}
                  </span>
                  {isExpanded ? <ChevronUp className="w-3 h-3 shrink-0" /> : <ChevronDown className="w-3 h-3 shrink-0" />}
                </button>

                {/* AI AUTO BUTTON */}
                <button
                  type="button"
                  id={`btn-state-ai-${ctrl.id}`}
                  onClick={() => onChangeControlState(ctrl.id, 'AI_AUTO')}
                  className={`px-2 py-1 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1 border transition-all cursor-pointer truncate ${
                    stateData.state === 'AI_AUTO' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: stateData.state === 'AI_AUTO' ? 'rgba(59, 130, 246, 0.2)' : 'var(--color-surface)',
                    color: stateData.state === 'AI_AUTO' ? '#60a5fa' : 'var(--color-text)',
                    borderColor: stateData.state === 'AI_AUTO' ? '#3b82f6' : 'var(--color-border)',
                  }}
                  title="AI tự động suy luận theo toàn bộ Master Song Context"
                >
                  <Sparkles className="w-3 h-3 text-blue-400 shrink-0" />
                  <span className="truncate">AI AUTO</span>
                </button>

                {/* NONE BUTTON */}
                <button
                  type="button"
                  id={`btn-state-none-${ctrl.id}`}
                  onClick={() => onChangeControlState(ctrl.id, 'NONE')}
                  className={`px-2 py-1 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1 border transition-all cursor-pointer truncate ${
                    stateData.state === 'NONE' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: stateData.state === 'NONE' ? 'rgba(239, 68, 68, 0.2)' : 'var(--color-surface)',
                    color: stateData.state === 'NONE' ? '#f87171' : 'var(--color-text)',
                    borderColor: stateData.state === 'NONE' ? '#ef4444' : 'var(--color-border)',
                  }}
                  title="Vô hiệu hóa hoàn toàn yếu tố này"
                >
                  <Ban className="w-3 h-3 text-red-400 shrink-0" />
                  <span className="truncate">NONE</span>
                </button>
              </div>

              {/* Resolved / Selected Value Display */}
              <div className="mt-2 text-[11px] flex items-center justify-between" style={{ color: 'var(--color-muted-text)' }}>
                {stateData.state === 'USER_SELECTED' && (
                  <span className="text-emerald-400 font-medium truncate">
                    ✓ Đã chọn: {stateData.value || 'Chưa chọn'}
                  </span>
                )}
                {stateData.state === 'AI_AUTO' && (
                  <span className="text-blue-400 font-medium truncate">
                    ✨ {stateData.resolvedValue ? `AI đề xuất: ${stateData.resolvedValue}` : 'AI sẽ tự suy luận'}
                  </span>
                )}
                {stateData.state === 'NONE' && (
                  <span className="text-red-400 font-medium truncate">
                    🚫 Vô hiệu hóa (AI không sử dụng)
                  </span>
                )}
              </div>

              {/* AI Short Recommendation Reason */}
              {stateData.state === 'AI_AUTO' && stateData.resolutionReason && (
                <div
                  className="mt-1.5 p-2 rounded-lg text-[11px] leading-relaxed border flex items-start space-x-1.5"
                  style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    borderColor: 'rgba(59, 130, 246, 0.2)',
                    color: '#93c5fd',
                  }}
                >
                  <Info className="w-3 h-3 shrink-0 mt-0.5 text-blue-400" />
                  <span>{stateData.resolutionReason}</span>
                </div>
              )}

              {/* Accordion 40 Options Picker */}
              {isExpanded && (
                <div
                  id={`options-container-${ctrl.id}`}
                  className="mt-3 p-3 rounded-xl border space-y-3 animate-in fade-in duration-150"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  {/* Option Filter Input */}
                  <div className="flex items-center justify-between gap-2">
                    <input
                      type="text"
                      placeholder={`Tìm trong ${ctrl.options.length} lựa chọn...`}
                      value={searchVal}
                      onChange={(e) =>
                        setOptionSearch({ ...optionSearch, [ctrl.id]: e.target.value })
                      }
                      className="w-full px-3 py-1.5 rounded-lg text-xs border outline-none"
                      style={{
                        backgroundColor: 'var(--color-secondary-surface)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)',
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setExpandedControlId(null)}
                      className="text-xs px-2.5 py-1.5 rounded-lg border font-semibold hover:opacity-80 shrink-0"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    >
                      Đóng
                    </button>
                  </div>

                  {/* Options Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 max-h-56 overflow-y-auto pr-1">
                    {visibleOptions.map((opt, idx) => {
                      const isSelected = stateData.state === 'USER_SELECTED' && stateData.value === opt.id;

                      return (
                        <button
                          key={opt.id}
                          type="button"
                          id={`opt-${ctrl.id}-${idx}`}
                          onClick={() => {
                            onChangeControlState(ctrl.id, 'USER_SELECTED', opt.id);
                            setExpandedControlId(null);
                          }}
                          className={`p-2 rounded-lg text-xs font-medium text-left border transition-all cursor-pointer truncate ${
                            isSelected ? 'ring-1 ring-emerald-500 shadow-sm' : 'hover:opacity-90'
                          }`}
                          style={{
                            backgroundColor: isSelected
                              ? 'var(--color-tag-bg)'
                              : 'var(--color-secondary-surface)',
                            borderColor: isSelected ? 'var(--color-accent)' : 'var(--color-border)',
                            color: isSelected ? 'var(--color-tag-text)' : 'var(--color-text)',
                          }}
                          title={opt.description}
                        >
                          <div className="flex items-center justify-between">
                            <span className="truncate">{opt.label}</span>
                            {isSelected && <Check className="w-3 h-3 text-emerald-400 shrink-0 ml-1" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
