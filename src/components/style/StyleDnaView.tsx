/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Dna, Sparkles, Layers, Sliders, Music2, RefreshCw } from 'lucide-react';
import { Project, ReferenceSong } from '../../types';

interface StyleDnaViewProps {
  activeProject: Project | null;
  references: ReferenceSong[];
}

export const StyleDnaView: React.FC<StyleDnaViewProps> = ({
  activeProject,
  references,
}) => {
  const projectDna = activeProject?.styleDNA;

  return (
    <div id="style-dna-view" className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div
        className="p-6 md:p-8 rounded-2xl border transition-all shadow-sm space-y-2"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <Dna className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              STYLE DNA & AI MUSICAL MEMORY
            </h2>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Bộ nhớ trừu tượng của AI giúp giữ sự đồng nhất trong toàn bộ album / dự án
            </p>
          </div>
        </div>
      </div>

      {/* Project Active Style DNA Card */}
      <div
        className="p-6 rounded-2xl border transition-all shadow-sm space-y-5"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
          <div>
            <span className="text-[10px] font-bold uppercase text-purple-400 tracking-wider block">
              DỰ ÁN HIỆN TẠI
            </span>
            <h3 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
              {activeProject?.name}
            </h3>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 font-semibold border border-purple-500/20">
            Active Musical Profile
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Tone & Emotion */}
          <div
            className="p-4 rounded-xl border space-y-2 text-xs"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <span className="font-bold text-amber-400 block">Âm Hưởng & Cảm Xúc (Tone)</span>
            <div className="flex flex-wrap gap-1.5">
              {(projectDna?.emotionalTone || ['Nostalgic', 'Introspective', 'Warm Melancholy']).map((t: string) => (
                <span key={t} className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Instrumentation */}
          <div
            className="p-4 rounded-xl border space-y-2 text-xs"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <span className="font-bold text-blue-400 block">Nhạc Cụ Đặc Trưng (Instruments)</span>
            <div className="flex flex-wrap gap-1.5">
              {(projectDna?.instrumentation || ['Acoustic Piano', 'Warm Strings', 'Acoustic Guitar', 'Subtle Drum Loops']).map((i: string) => (
                <span key={i} className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-[11px]">
                  {i}
                </span>
              ))}
            </div>
          </div>

          {/* Phrasing & Lyrics */}
          <div
            className="p-4 rounded-xl border space-y-2 text-xs"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <span className="font-bold text-emerald-400 block">Phong Cách Viết Lời (Lyric Style)</span>
            <div className="flex flex-wrap gap-1.5">
              {(projectDna?.lyricCharacteristics || ['Sensory details', 'Poetic & Conversational', 'Show don\'t tell', 'Vivid metaphors']).map((l: string) => (
                <span key={l} className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[11px]">
                  {l}
                </span>
              ))}

            </div>
          </div>
        </div>

        {/* Narrative & Structure Preference */}
        <div
          className="p-4 rounded-xl border space-y-2 text-xs"
          style={{
            backgroundColor: 'var(--color-secondary-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <span className="font-bold text-purple-400 block">Cấu Trúc Tự Sự Ưu Tiên (Narrative Flow)</span>
          <p className="leading-relaxed" style={{ color: 'var(--color-text)' }}>
            {projectDna?.structurePreference ||
              'Mở đầu bằng không gian tĩnh lặng (Intro) -> Tự sự bước vào câu chuyện (Verse 1) -> Tăng dần kịch tính (Pre-Chorus) -> Bùng nổ cảm xúc cao trào (Chorus & Final Chorus) -> Lắng đọng suy tư (Bridge & Outro).'}
          </p>
        </div>
      </div>
    </div>
  );
};
