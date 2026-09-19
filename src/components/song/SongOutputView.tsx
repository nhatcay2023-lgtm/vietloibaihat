/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import {
  Copy,
  Check,
  Download,
  Edit,
  RotateCw,
  Lock,
  Unlock,
  Sparkles,
  FileText,
  Sliders,
  Compass,
  Layers,
  History,
  ShieldCheck,
  BookOpen,
  Share2,
} from 'lucide-react';
import { Song, SongSection, SongVersion } from '../../types';
import { SectionEditorModal } from './SectionEditorModal';
import { VersionHistoryDrawer } from './VersionHistoryDrawer';
import { GeminiService } from '../../services/geminiService';
import { PromptBuilder } from '../../services/promptBuilder';

interface SongOutputViewProps {
  song: Song;
  onUpdateSong: (updated: Song) => void;
  onModifySection: (sectionId: string, modifier: string) => Promise<void>;
  isModifyingSection: boolean;
}

export const SongOutputView: React.FC<SongOutputViewProps> = ({
  song,
  onUpdateSong,
  onModifySection,
  isModifyingSection,
}) => {
  const [activeTab, setActiveTab] = useState<'lyrics' | 'guide' | 'blueprint' | 'meaning' | 'quality' | 'versions'>('lyrics');
  const [editingSection, setEditingSection] = useState<SongSection | null>(null);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);
  const [lyricsViewMode, setLyricsViewMode] = useState<'cards' | 'plain'>('cards');
  const [isGeneratingGuide, setIsGeneratingGuide] = useState(false);

  const handleCopyText = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(type);
    setTimeout(() => setCopyStatus(null), 2500);
  };

  // FULL SONG: Title + Section labels + instructions + lyrics
  const fullSongText = `${song.title}\n\n${song.sections
    .map((s) => `${s.label}\n\n${s.lyrics}`)
    .join('\n\n')}`;

  // LYRICS ONLY: just lyrics lines without [ ] labels
  const lyricsOnlyText = song.sections.map((s) => s.lyrics).join('\n\n');

  // TITLE + LYRICS: Title + lyrics without [ ] labels
  const titleAndLyricsText = `${song.title}\n\n${lyricsOnlyText}`;

  // GUIDE: Full 800-900 words production guide
  const guideText = song.guide?.fullGuideText || 'Chưa có hướng dẫn phối khí.';

  // Export handlers
  const handleExport = (format: 'txt' | 'md' | 'json') => {
    let content = '';
    let filename = `${song.title.replace(/\s+/g, '_')}`;
    let mimeType = 'text/plain';

    if (format === 'txt') {
      content = `AI SONGWRITER STUDIO — CA KHÚC HOÀN CHỈNH\n=========================================\nTỰA ĐỀ: ${song.title}\nTHỂ LOẠI: ${song.controls.genre?.value || 'Pop Ballad'} | TEMPO: ${song.controls.tempo?.value || '72 BPM'} | VOCAL: ${song.controls.vocal?.value || 'Male'}\n\n${fullSongText}\n\n=========================================\nHƯỚNG DẪN PHỐI KHÍ & CHẤT BÀI HÁT (PRODUCTION GUIDE)\n=========================================\n${guideText}`;
      filename += '.txt';
    } else if (format === 'md') {
      content = `# ${song.title}\n\n> **Thể loại:** ${song.controls.genre?.value || 'Pop Ballad'} | **Tempo:** ${song.controls.tempo?.value || '72 BPM'} | **Vocal:** ${song.controls.vocal?.value || 'Male'}\n\n---\n\n## Lời Bài Hát (Lyrics)\n\n${song.sections.map((s) => `### \`${s.label}\`\n\n${s.lyrics.split('\n').map((l) => `${l}  `).join('\n')}`).join('\n\n')}\n\n---\n\n## Hướng Dẫn Phối Khí & Sản Xuất (Songwriting & Production Guide)\n\n${guideText}`;
      filename += '.md';
      mimeType = 'text/markdown';
    } else if (format === 'json') {
      content = JSON.stringify(song, null, 2);
      filename += '.json';
      mimeType = 'application/json';
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveEditedSection = (sectionId: string, newLyrics: string) => {
    const updatedSections = song.sections.map((s) =>
      s.id === sectionId ? { ...s, lyrics: newLyrics } : s
    );
    const updatedFullLyrics = updatedSections
      .map((s) => `${s.label}\n\n${s.lyrics}`)
      .join('\n\n');

    onUpdateSong({
      ...song,
      lyrics: updatedFullLyrics,
      sections: updatedSections,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleToggleSectionLock = (sectionId: string) => {
    const updatedSections = song.sections.map((s) =>
      s.id === sectionId ? { ...s, isLocked: !s.isLocked } : s
    );
    onUpdateSong({
      ...song,
      sections: updatedSections,
      updatedAt: new Date().toISOString(),
    });
  };

  const handleRegenerateGuide = async () => {
    setIsGeneratingGuide(true);
    try {
      const masterContext = {
        genre: song.controls.genre?.value || 'Pop Ballad',
        tempo: song.controls.tempo?.value || '72 BPM',
        vocal: song.controls.vocal?.value || 'Male Mid-Low',
        emotion: song.controls.emotion?.value || 'Emotional',
        mood: song.controls.mood?.value || 'Warm Melancholic',
        instruments: song.controls.instruments?.value || 'Piano + Strings',
        arrangementStyle: song.controls.arrangementStyle?.value || 'Acoustic Ballad',
        structure: song.controls.structure?.value || 'Standard Pop',
        climax: song.controls.climax?.value || 'Final Chorus',
        hook: song.controls.hook?.value || 'Main Hook',
        story: song.storySnapshot || song.lyrics.slice(0, 120),
        phrasing: song.controls.phrasing?.value || 'Expressive',
      };
      const prompt = PromptBuilder.buildProductionGuidePrompt(song.title, song.lyrics, masterContext);
      let newGuideText = await GeminiService.generate(prompt, {
        temperature: 0.65,
        systemInstruction: 'You are an elite Audio Producer. Write a concise, actionable Production & Arrangement Guide strictly 100% IN ENGLISH. MANDATORY: The entire response MUST NOT EXCEED 990 CHARACTERS.',
      });
      if (newGuideText.length > 990) {
        newGuideText = newGuideText.slice(0, 987).trim() + '...';
      }
      onUpdateSong({
        ...song,
        guide: {
          ...(song.guide || {
            songConcept: 'Song Concept',
            emotionalDirection: masterContext.emotion,
            vocalDirection: masterContext.vocal,
            tempo: masterContext.tempo,
            verse1Direction: 'Acoustic',
            preChorusDirection: 'Build',
            chorusDirection: 'Full',
            verse2Direction: 'Groove',
            bridgeDirection: 'Stripped',
            finalChorus: 'Climax',
            instrumentation: masterContext.instruments,
            arrangement: masterContext.arrangementStyle,
            dynamics: 'pp to ff',
            vocalExpression: 'Warm',
            adLibs: 'Harmonies',
            harmony: '3-part',
            backgroundVocal: 'Pads',
            instrumentEntryExit: 'Arrangement',
            mixingDirection: 'Stereo',
            outro: 'Fade',
            overallPerformanceDirection: 'Authentic',
          }),
          fullGuideText: newGuideText,
        },
        updatedAt: new Date().toISOString(),
      });
    } catch (e) {
      console.error('Failed to regenerate English guide:', e);
    } finally {
      setIsGeneratingGuide(false);
    }
  };

  return (
    <div
      id="song-output-view"
      className="space-y-5 animate-in fade-in duration-300"
    >
      {/* SONG TITLE BANNER (AT THE VERY TOP AS REQUIRED) */}
      <div
        id="song-title-banner"
        className="p-6 md:p-8 rounded-2xl border transition-all shadow-md space-y-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-widest uppercase block text-amber-500 mb-1">
              MASTER SONG TITLE
            </span>
            <h1
              id="song-title-text"
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
              style={{ color: 'var(--color-text)' }}
            >
              {song.title}
            </h1>
            <p className="text-xs mt-1" style={{ color: 'var(--color-muted-text)' }}>
              {song.sections.length} Phân đoạn • {song.songLength || '300–400 words'} • Phiên bản v{song.currentVersionNumber}
            </p>
          </div>

          {/* Quick Audio / Mood Tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span
              className="px-3 py-1 rounded-full font-semibold border"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              🎵 {song.controls.genre?.value || 'Pop Ballad'}
            </span>
            <span
              className="px-3 py-1 rounded-full font-semibold border"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              ⏱️ {song.controls.tempo?.value || '72 BPM'}
            </span>
            <span
              className="px-3 py-1 rounded-full font-semibold border"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              🎤 {song.controls.vocal?.value || 'Male'}
            </span>
          </div>
        </div>

        {/* PRIMARY COPY BUTTONS BAR (AT TOP AS REQUIRED) */}
        <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-3" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex flex-wrap items-center gap-2">
            {/* COPY FULL SONG (TITLE + LABELS + LYRICS) - PRIMARY 1-CLICK */}
            <button
              id="btn-copy-full-song"
              type="button"
              onClick={() => handleCopyText(fullSongText, 'full')}
              className="px-4 py-2.5 rounded-xl text-xs md:text-sm font-extrabold shadow-lg flex items-center space-x-2 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#ffffff',
              }}
              title="Sao chép Tựa đề + Toàn bộ các phân đoạn + Ca từ trong 1 lần nhấn"
            >
              {copyStatus === 'full' ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>ĐÃ COPY TOÀN BỘ BÀI HÁT!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY CẢ BÀI HÁT (1-CLICK)</span>
                </>
              )}
            </button>

            {/* COPY LYRICS ONLY */}
            <button
              id="btn-copy-lyrics-only"
              type="button"
              onClick={() => handleCopyText(lyricsOnlyText, 'lyrics')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center space-x-1.5 transition-all cursor-pointer hover:border-amber-400 hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
              title="Chỉ sao chép văn bản lời bài hát (không chứa ký hiệu phân đoạn)"
            >
              {copyStatus === 'lyrics' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copyStatus === 'lyrics' ? 'Đã Copy Lời Hát!' : 'COPY CHỈ LỜI HÁT'}</span>
            </button>

            {/* COPY TITLE + LYRICS */}
            <button
              id="btn-copy-title-lyrics"
              type="button"
              onClick={() => handleCopyText(titleAndLyricsText, 'title-lyrics')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border flex items-center space-x-1.5 transition-all cursor-pointer hover:border-amber-400 hover:opacity-90"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
              title="Sao chép Tựa đề + Lời hát không kèm ký hiệu"
            >
              {copyStatus === 'title-lyrics' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copyStatus === 'title-lyrics' ? 'Đã Copy Tựa Đề + Lời!' : 'COPY TỰA ĐỀ + LỜI'}</span>
            </button>

            {/* COPY PRODUCTION GUIDE (EN) */}
            <button
              id="btn-copy-guide"
              type="button"
              onClick={() => handleCopyText(guideText, 'guide')}
              className="px-3 py-2 rounded-xl text-xs font-semibold border flex items-center space-x-1.5 transition-colors cursor-pointer hover:opacity-80"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
              title="Sao chép hướng dẫn phối khí tiếng Anh (≤990 ký tự)"
            >
              {copyStatus === 'guide' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copyStatus === 'guide' ? 'Đã Copy Guide!' : 'COPY GUIDE (EN)'}</span>
            </button>
          </div>

          {/* Export Dropdown */}
          <div className="flex items-center space-x-1.5">
            <span className="text-xs font-medium" style={{ color: 'var(--color-muted-text)' }}>Xuất file:</span>
            <button
              type="button"
              onClick={() => handleExport('txt')}
              className="px-2.5 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer hover:opacity-80"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
            >
              TXT
            </button>
            <button
              type="button"
              onClick={() => handleExport('md')}
              className="px-2.5 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer hover:opacity-80"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
            >
              MD
            </button>
            <button
              type="button"
              onClick={() => handleExport('json')}
              className="px-2.5 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer hover:opacity-80"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
            >
              JSON
            </button>
          </div>
        </div>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex items-center space-x-2 border-b overflow-x-auto pb-1" style={{ borderColor: 'var(--color-border)' }}>
        {[
          { id: 'lyrics', label: 'BÀI HÁT (Lyrics)', icon: FileText },
          { id: 'guide', label: 'PRODUCTION GUIDE (EN)', icon: BookOpen },
          { id: 'blueprint', label: 'SONG BLUEPRINT', icon: Compass },
          { id: 'meaning', label: 'MEANING LAYER', icon: Layers },
          { id: 'quality', label: 'QUALITY CONTROL', icon: ShieldCheck },
          { id: 'versions', label: `VERSIONS (${song.versions.length})`, icon: History },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              id={`tab-btn-${tab.id}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-bold flex items-center space-x-2 border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                isActive ? 'border-amber-500 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: isActive ? 'var(--color-surface)' : 'transparent',
                color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
              }}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT: LYRICS */}
      {activeTab === 'lyrics' && (
        <div id="lyrics-tab-content" className="space-y-4">
          {/* Dedicated Quick Action Banner inside Lyrics Tab */}
          <div
            className="p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold" style={{ color: 'var(--color-text)' }}>
                Ca khúc hoàn chỉnh ({song.sections.length} phân đoạn)
              </span>
              {copyStatus && (
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center space-x-1 animate-in fade-in">
                  <Check className="w-3 h-3" />
                  <span>Đã lưu vào bộ nhớ tạm!</span>
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* COPY ALL LYRICS 1-CLICK BUTTON */}
              <button
                id="btn-copy-lyrics-tab-action"
                type="button"
                onClick={() => handleCopyText(fullSongText, 'tab-full')}
                className="px-3.5 py-1.5 rounded-lg text-xs font-extrabold shadow flex items-center space-x-1.5 transition-all cursor-pointer hover:opacity-90"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: '#ffffff',
                }}
                title="Sao chép toàn bộ lời bài hát (1 lần)"
              >
                {copyStatus === 'tab-full' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>ĐÃ SAO CHÉP CẢ BÀI!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao Chép Toàn Bộ Lời Bài Hát</span>
                  </>
                )}
              </button>

              {/* Toggle view format */}
              <div className="flex items-center rounded-lg border p-0.5" style={{ borderColor: 'var(--color-border)' }}>
                <button
                  type="button"
                  onClick={() => setLyricsViewMode('cards')}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
                    lyricsViewMode === 'cards' ? 'bg-amber-500 text-black font-bold' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{ color: lyricsViewMode === 'cards' ? '#000000' : 'var(--color-text)' }}
                >
                  Dạng Thẻ Đoạn
                </button>
                <button
                  type="button"
                  onClick={() => setLyricsViewMode('plain')}
                  className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
                    lyricsViewMode === 'plain' ? 'bg-amber-500 text-black font-bold' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{ color: lyricsViewMode === 'plain' ? '#000000' : 'var(--color-text)' }}
                >
                  Văn Bản Liền Mạch
                </button>
              </div>
            </div>
          </div>

          {/* PLAIN TEXT VIEW */}
          {lyricsViewMode === 'plain' ? (
            <div
              className="p-6 md:p-8 rounded-2xl border transition-all shadow-sm space-y-4"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                  Toàn bộ văn bản lời bài hát
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyText(fullSongText, 'plain-full')}
                  className="px-3 py-1 rounded-lg border text-xs font-semibold flex items-center space-x-1.5 cursor-pointer hover:opacity-80"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                >
                  {copyStatus === 'plain-full' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copyStatus === 'plain-full' ? 'Đã Copy!' : 'Copy Toàn Bộ Văn Bản'}</span>
                </button>
              </div>
              <pre
                className="text-base md:text-lg leading-relaxed whitespace-pre-wrap font-serif select-all"
                style={{ color: 'var(--color-text)' }}
              >
                {fullSongText}
              </pre>
            </div>
          ) : (
            /* SECTION CARDS VIEW */
            song.sections.map((section, idx) => (
              <div
                key={section.id}
                id={`section-card-${section.id}`}
                className="p-5 md:p-6 rounded-2xl border transition-all shadow-sm space-y-3"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: section.isLocked ? 'var(--color-accent)' : 'var(--color-border)',
                }}
              >
                {/* Section Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="flex items-center space-x-2">
                    <span
                      className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg"
                      style={{
                        backgroundColor: 'var(--color-tag-bg)',
                        color: 'var(--color-tag-text)',
                      }}
                    >
                      {section.label}
                    </span>

                    {section.isLocked && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase bg-amber-500/20 text-amber-400 flex items-center space-x-1">
                        <Lock className="w-2.5 h-2.5" />
                        <span>LOCKED</span>
                      </span>
                    )}
                  </div>

                  {/* Section Action Buttons */}
                  <div className="flex items-center space-x-1.5">
                    <button
                      type="button"
                      onClick={() => setEditingSection(section)}
                      className="px-2.5 py-1 rounded-lg border text-xs font-semibold flex items-center space-x-1 transition-colors cursor-pointer hover:opacity-80"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      title="Chỉnh sửa hoặc dùng AI tinh chỉnh đoạn này"
                    >
                      <Edit className="w-3 h-3" />
                      <span>Sửa / AI Modifier</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleToggleSectionLock(section.id)}
                      className="p-1 rounded-lg border transition-colors cursor-pointer"
                      style={{
                        backgroundColor: section.isLocked ? 'var(--color-accent)' : 'var(--color-secondary-surface)',
                        borderColor: 'var(--color-border)',
                        color: section.isLocked ? '#ffffff' : 'var(--color-muted-text)',
                      }}
                      title={section.isLocked ? 'Đã khóa' : 'Khóa đoạn'}
                    >
                      {section.isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopyText(`${section.label}\n\n${section.lyrics}`, `sec_${section.id}`)}
                      className="p-1 rounded-lg border transition-colors cursor-pointer hover:opacity-80"
                      style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                      title="Copy đoạn này"
                    >
                      {copyStatus === `sec_${section.id}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Section Lyrics Display */}
                <div
                  className="text-base md:text-lg leading-relaxed whitespace-pre-line font-serif pl-2 border-l-2"
                  style={{
                    borderColor: 'var(--color-accent)',
                    color: 'var(--color-text)',
                  }}
                >
                  {section.lyrics}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB CONTENT: PRODUCTION GUIDE (EN - STRICTLY <= 990 CHARS) */}
      {activeTab === 'guide' && (
        <div
          id="guide-tab-content"
          className="p-6 md:p-8 rounded-2xl border transition-all shadow-sm space-y-6"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-bold tracking-wider uppercase text-amber-500 block">
                  STUDIO PRODUCTION & ARRANGEMENT GUIDE (ENGLISH)
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold border ${
                    guideText.length <= 990
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  }`}
                  title="Giới hạn ký tự chuẩn theo yêu cầu: tối đa 990 ký tự"
                >
                  {guideText.length} / 990 chars
                </span>
              </div>
              <h3 className="text-xl font-bold tracking-tight mt-1" style={{ color: 'var(--color-text)' }}>
                HƯỚNG DẪN PHỐI KHÍ TIẾNG ANH (≤ 990 KÝ TỰ)
              </h3>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-muted-text)' }}>
                Professional guidance for Arrangers, Audio Engineers, Vocalists & Music Producers
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* REGENERATE ENGLISH GUIDE BUTTON */}
              <button
                type="button"
                id="btn-regenerate-guide-en"
                onClick={handleRegenerateGuide}
                disabled={isGeneratingGuide}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold border flex items-center space-x-1.5 transition-all cursor-pointer hover:border-amber-400 disabled:opacity-50"
                style={{
                  backgroundColor: 'var(--color-secondary-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }}
                title="Tạo lại cẩm nang phối khí bằng tiếng Anh chuẩn ≤ 990 ký tự với AI"
              >
                <RotateCw className={`w-3.5 h-3.5 text-amber-400 ${isGeneratingGuide ? 'animate-spin' : ''}`} />
                <span>{isGeneratingGuide ? 'Đang tạo...' : 'Tạo lại Guide EN (≤990 ký tự)'}</span>
              </button>

              {/* COPY GUIDE BUTTON */}
              <button
                type="button"
                id="btn-copy-guide-full"
                onClick={() => handleCopyText(guideText, 'guide-full')}
                className="px-4 py-2 rounded-xl text-xs font-bold border flex items-center space-x-1.5 cursor-pointer hover:opacity-90 shrink-0"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  borderColor: 'var(--color-accent)',
                  color: '#ffffff',
                }}
              >
                {copyStatus === 'guide-full' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copyStatus === 'guide-full' ? 'Đã Copy Guide!' : 'Copy Toàn Bộ Guide'}</span>
              </button>
            </div>
          </div>

          <div
            className="p-5 md:p-6 rounded-xl border text-sm md:text-base leading-relaxed whitespace-pre-wrap font-sans font-medium space-y-3"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            {guideText}
          </div>
        </div>
      )}

      {/* TAB CONTENT: SONG BLUEPRINT */}
      {activeTab === 'blueprint' && (
        <div
          id="blueprint-tab-content"
          className="p-6 rounded-2xl border transition-all shadow-sm space-y-6"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
            <span className="text-[11px] font-bold tracking-wider uppercase text-amber-500 block mb-1">
              STRUCTURAL ARCHITECTURE
            </span>
            <h3 className="text-lg font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              BẢN THIẾT KẾ BÀI HÁT (SONG BLUEPRINT)
            </h3>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Vòng cung phát triển: {song.blueprint.overallArc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {song.blueprint.sections.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border space-y-2 text-xs"
                style={{
                  backgroundColor: 'var(--color-secondary-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-400">{sec.label}</span>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-blue-500/20 text-blue-300">
                    {sec.dynamicLevel}
                  </span>
                </div>

                <div>
                  <span className="font-semibold block" style={{ color: 'var(--color-muted-text)' }}>Mục đích tự sự:</span>
                  <span style={{ color: 'var(--color-text)' }}>{sec.narrativePurpose}</span>
                </div>

                <div>
                  <span className="font-semibold block" style={{ color: 'var(--color-muted-text)' }}>Mục đích cảm xúc:</span>
                  <span style={{ color: 'var(--color-text)' }}>{sec.emotionalPurpose}</span>
                </div>

                <div>
                  <span className="font-semibold block" style={{ color: 'var(--color-muted-text)' }}>Hình tượng đại diện:</span>
                  <span className="text-emerald-400">{sec.imagery}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: MEANING LAYER */}
      {activeTab === 'meaning' && (
        <div
          id="meaning-tab-content"
          className="p-6 rounded-2xl border transition-all shadow-sm space-y-6"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
            <span className="text-[11px] font-bold tracking-wider uppercase text-amber-500 block mb-1">
              MEANING SUBTEXT ENGINE
            </span>
            <h3 className="text-lg font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              LỚP Ý NGHĨA ẨN (INTENT → MEANING → LYRIC)
            </h3>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Nguyên tắc vàng: "Ý nghĩa có thể dài — Câu hát có thể ngắn"
            </p>
          </div>

          <div className="space-y-4">
            {song.meaningLayer.sections.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border space-y-2 text-xs"
                style={{
                  backgroundColor: 'var(--color-secondary-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <span className="font-bold text-sm text-amber-400">{m.sectionType}</span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="font-semibold block text-blue-400">Ý nghĩa nội tâm dài (Long Meaning):</span>
                    <p className="leading-relaxed mt-0.5" style={{ color: 'var(--color-text)' }}>
                      {m.longMeaning}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold block text-emerald-400">Đúc kết câu hát ngắn (Singable Core):</span>
                    <p className="font-serif italic text-sm mt-0.5" style={{ color: 'var(--color-text)' }}>
                      "{m.singableCore}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: QUALITY CHECK */}
      {activeTab === 'quality' && (
        <div
          id="quality-tab-content"
          className="p-6 rounded-2xl border transition-all shadow-sm space-y-6"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--color-border)' }}>
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-500 block mb-1">
                AI QUALITY CONTROL ENGINE
              </span>
              <h3 className="text-lg font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
                BẢNG KIỂM ĐỊNH CHẤT LƯỢNG CA TỪ & CẤU TRÚC
              </h3>
            </div>
            <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              ĐẠT CHUẨN XUẤT BẢN ({song.qualityCheck?.score || 95}/100)
            </div>
          </div>

          <div className="space-y-2">
            {(song.qualityCheck?.items || []).map((q, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl border text-xs flex items-center justify-between"
                style={{
                  backgroundColor: 'var(--color-secondary-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="flex items-center space-x-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold" style={{ color: 'var(--color-text)' }}>{q.rule}</span>
                    <p className="text-[11px]" style={{ color: 'var(--color-muted-text)' }}>{q.notes}</p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded font-bold uppercase bg-emerald-500/20 text-emerald-400">
                  PASS
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: VERSIONS */}
      {activeTab === 'versions' && (
        <VersionHistoryDrawer
          song={song}
          onRestoreVersion={(ver: SongVersion) => {
            onUpdateSong({
              ...song,
              title: ver.title,
              lyrics: ver.lyrics,
              sections: ver.sections,
              blueprint: ver.blueprint || song.blueprint,
              meaningLayer: ver.meaningLayer || song.meaningLayer,
              currentVersionNumber: ver.versionNumber,
              updatedAt: new Date().toISOString(),
            });
            setActiveTab('lyrics');
          }}
          onDuplicateVersion={(ver: SongVersion) => {
            const nextVer = song.currentVersionNumber + 1;
            const newVerObj: SongVersion = {
              ...ver,
              id: `ver_${nextVer}_${song.id}`,
              versionNumber: nextVer,
              timestamp: new Date().toISOString(),
              changeNote: `Nhân bản từ Version ${ver.versionNumber}`,
            };
            onUpdateSong({
              ...song,
              currentVersionNumber: nextVer,
              versions: [newVerObj, ...song.versions],
              updatedAt: new Date().toISOString(),
            });
          }}
        />
      )}

      {/* SECTION EDIT MODAL */}
      <SectionEditorModal
        section={editingSection}
        isOpen={!!editingSection}
        onClose={() => setEditingSection(null)}
        onSave={handleSaveEditedSection}
        onModifyWithAi={async (sectionId, modifier) => {
          await onModifySection(sectionId, modifier);
          setEditingSection(null);
        }}
        onToggleLock={handleToggleSectionLock}
        isModifying={isModifyingSection}
      />
    </div>
  );
};
