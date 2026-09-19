/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import {
  History,
  RotateCcw,
  Copy,
  GitCompare,
  Clock,
  Check,
  Plus,
  Minus,
  FileText,
} from 'lucide-react';
import { Song, SongVersion } from '../../types';

interface VersionHistoryDrawerProps {
  song: Song;
  onRestoreVersion: (version: SongVersion) => void;
  onDuplicateVersion: (version: SongVersion) => void;
}

export const VersionHistoryDrawer: React.FC<VersionHistoryDrawerProps> = ({
  song,
  onRestoreVersion,
  onDuplicateVersion,
}) => {
  const [selectedVersionId, setSelectedVersionId] = useState<string>(
    song.versions[0]?.id || ''
  );
  const [compareVersionId, setCompareVersionId] = useState<string | null>(
    song.versions[1]?.id || null
  );

  const selectedVersion = song.versions.find((v) => v.id === selectedVersionId) || song.versions[0];
  const compareVersion = compareVersionId ? song.versions.find((v) => v.id === compareVersionId) : null;

  // Simple line diff calculation
  const getDiffLines = () => {
    if (!compareVersion || !selectedVersion) return null;
    const oldLines = compareVersion.lyrics.split('\n');
    const newLines = selectedVersion.lyrics.split('\n');

    return newLines.map((line, idx) => {
      const isAdded = !oldLines.includes(line);
      const isChanged = oldLines[idx] && oldLines[idx] !== line;
      return {
        line,
        status: isAdded ? 'added' : isChanged ? 'changed' : 'unchanged',
      };
    });
  };

  const diffLines = getDiffLines();

  return (
    <div
      id="version-history-container"
      className="p-5 md:p-6 rounded-2xl border transition-all shadow-sm space-y-6"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <History className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              LỊCH SỬ PHIÊN BẢN (VERSION SYSTEM)
            </h3>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Tất cả các bản thảo (v1, v2, v3...) được lưu giữ an toàn, hỗ trợ so sánh Diff và khôi phục
            </p>
          </div>
        </div>

        <div className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          Hiện tại: Version {song.currentVersionNumber}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Version List Sidebar */}
        <div className="space-y-2">
          <label className="text-xs font-bold block" style={{ color: 'var(--color-text)' }}>
            Danh Sách Phiên Bản ({song.versions.length}):
          </label>

          <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
            {song.versions.map((ver) => {
              const isSelected = ver.id === selectedVersionId;

              return (
                <div
                  key={ver.id}
                  onClick={() => setSelectedVersionId(ver.id)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    isSelected ? 'ring-1 ring-amber-500 shadow-sm' : 'hover:opacity-90'
                  }`}
                  style={{
                    backgroundColor: isSelected
                      ? 'var(--color-tag-bg)'
                      : 'var(--color-secondary-surface)',
                    borderColor: isSelected ? 'var(--color-accent)' : 'var(--color-border)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold" style={{ color: isSelected ? 'var(--color-tag-text)' : 'var(--color-text)' }}>
                      Version {ver.versionNumber}: {ver.title}
                    </span>
                    <span className="text-[10px] opacity-70" style={{ color: 'var(--color-muted-text)' }}>
                      {new Date(ver.timestamp).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  <p className="text-[11px] truncate mt-1" style={{ color: 'var(--color-muted-text)' }}>
                    {ver.changeNote || 'Bản sửa đổi'}
                  </p>

                  <div className="flex items-center space-x-2 mt-2 pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRestoreVersion(ver);
                      }}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold border flex items-center space-x-1 hover:bg-amber-500/20"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      title="Khôi phục phiên bản này làm bản hiện tại"
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                      <span>Khôi phục</span>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDuplicateVersion(ver);
                      }}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold border flex items-center space-x-1 hover:opacity-80"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                    >
                      <Copy className="w-2.5 h-2.5" />
                      <span>Nhân bản</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Version Preview & Diff Comparison */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold" style={{ color: 'var(--color-text)' }}>
                Nội Dung Version {selectedVersion?.versionNumber}: {selectedVersion?.title}
              </span>
            </div>

            {/* Compare Selector */}
            {song.versions.length > 1 && (
              <div className="flex items-center space-x-1.5 text-xs">
                <GitCompare className="w-3.5 h-3.5 text-blue-400" />
                <span style={{ color: 'var(--color-muted-text)' }}>So sánh với:</span>
                <select
                  value={compareVersionId || ''}
                  onChange={(e) => setCompareVersionId(e.target.value || null)}
                  className="text-[11px] rounded px-2 py-1 border outline-none cursor-pointer"
                  style={{
                    backgroundColor: 'var(--color-secondary-surface)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                >
                  <option value="">(Không so sánh)</option>
                  {song.versions
                    .filter((v) => v.id !== selectedVersionId)
                    .map((v) => (
                      <option key={v.id} value={v.id}>
                        Version {v.versionNumber} ({v.title})
                      </option>
                    ))}
                </select>
              </div>
            )}
          </div>

          {/* Diff View or Plain Text View */}
          {compareVersion && diffLines ? (
            <div
              className="p-4 rounded-xl border text-xs font-serif leading-relaxed space-y-1 max-h-96 overflow-y-auto"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="text-[11px] mb-2 p-2 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 flex items-center space-x-3">
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Xanh: Thêm mới (Added)</span>
                </span>
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span>Vàng: Thay đổi (Changed)</span>
                </span>
              </div>

              {diffLines.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-1 rounded ${
                    item.status === 'added'
                      ? 'bg-emerald-500/15 text-emerald-300'
                      : item.status === 'changed'
                      ? 'bg-amber-500/15 text-amber-300'
                      : ''
                  }`}
                  style={{ color: item.status === 'unchanged' ? 'var(--color-text)' : undefined }}
                >
                  {item.line || <span className="opacity-0">empty</span>}
                </div>
              ))}
            </div>
          ) : (
            <div
              className="p-4 rounded-xl border text-xs font-serif leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <div className="font-bold text-base mb-3" style={{ color: 'var(--color-accent)' }}>
                {selectedVersion?.title}
              </div>
              {selectedVersion?.lyrics}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
