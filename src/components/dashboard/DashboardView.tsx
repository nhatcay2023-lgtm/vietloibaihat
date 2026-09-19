/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import {
  Sparkles,
  Wand2,
  FolderKanban,
  Music,
  Library,
  Dna,
  ArrowRight,
  Play,
  Sliders,
  BookOpen,
} from 'lucide-react';
import { Project, Song, ReferenceSong, SongIdea } from '../../types';
import { SongIdeasExplorer } from './SongIdeasExplorer';

interface DashboardViewProps {
  activeProject: Project | null;
  projects: Project[];
  songs: Song[];
  references: ReferenceSong[];
  onNavigate: (page: string) => void;
  onSelectSong: (song: Song) => void;
  onSelectSongIdea: (idea: SongIdea) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  activeProject,
  projects,
  songs,
  references,
  onNavigate,
  onSelectSong,
  onSelectSongIdea,
}) => {
  const recentSongs = songs.slice(0, 4);

  return (
    <div id="dashboard-view" className="space-y-6 animate-in fade-in duration-200">
      {/* Hero Welcome Banner */}
      <div
        className="p-6 md:p-8 rounded-3xl border relative overflow-hidden shadow-md"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="max-w-2xl space-y-3 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500/15 text-amber-400 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI SONGWRITING STUDIO PRO</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight" style={{ color: 'var(--color-text)' }}>
            Hệ Thống Sáng Tác Nhạc Đỉnh Cao 21 Controls
          </h1>

          <p className="text-xs md:text-sm leading-relaxed" style={{ color: 'var(--color-muted-text)' }}>
            Biến ý tưởng và câu chuyện của bạn thành ca khúc hoàn chỉnh với ca từ thi vị, phân đoạn chuẩn quốc tế, bản vẽ cấu trúc (Blueprint), tầng nghĩa ngầm và cẩm nang phối khí chuyên nghiệp ~850 từ.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="btn-dash-create-song"
              onClick={() => onNavigate('create')}
              className="px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold shadow-lg flex items-center space-x-2 transition-all cursor-pointer hover:opacity-95"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#ffffff',
              }}
            >
              <Wand2 className="w-4 h-4" />
              <span>Bắt Đầu Sáng Tác Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('help')}
              className="px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold border flex items-center space-x-2 cursor-pointer hover:opacity-80"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <BookOpen className="w-4 h-4" />
              <span>Xem Hướng Dẫn (22 Mục)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overview Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => onNavigate('projects')}
          className="p-4 rounded-2xl border transition-all cursor-pointer hover:scale-[1.02]"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold" style={{ color: 'var(--color-muted-text)' }}>Dự Án (Projects)</span>
            <FolderKanban className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold mt-2" style={{ color: 'var(--color-text)' }}>
            {projects.length}
          </div>
          <p className="text-[11px] mt-1 text-blue-400">Đang hoạt động: {activeProject?.name}</p>
        </div>

        <div
          onClick={() => onNavigate('songs')}
          className="p-4 rounded-2xl border transition-all cursor-pointer hover:scale-[1.02]"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold" style={{ color: 'var(--color-muted-text)' }}>Kho Bài Hát</span>
            <Music className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold mt-2" style={{ color: 'var(--color-text)' }}>
            {songs.length}
          </div>
          <p className="text-[11px] mt-1 text-emerald-400">Đã hoàn thành</p>
        </div>

        <div
          onClick={() => onNavigate('references')}
          className="p-4 rounded-2xl border transition-all cursor-pointer hover:scale-[1.02]"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold" style={{ color: 'var(--color-muted-text)' }}>Reference Library</span>
            <Library className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-bold mt-2" style={{ color: 'var(--color-text)' }}>
            {references.length}
          </div>
          <p className="text-[11px] mt-1 text-amber-400">Bài hát mẫu</p>
        </div>

        <div
          onClick={() => onNavigate('style-dna')}
          className="p-4 rounded-2xl border transition-all cursor-pointer hover:scale-[1.02]"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold" style={{ color: 'var(--color-muted-text)' }}>Style DNA Memory</span>
            <Dna className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold mt-2" style={{ color: 'var(--color-text)' }}>
            {activeProject?.styleDNA?.genres?.length || 1}
          </div>
          <p className="text-[11px] mt-1 text-purple-400">Hồ sơ âm nhạc AI</p>
        </div>
      </div>

      {/* Recent Songs */}
      <div
        className="p-5 md:p-6 rounded-2xl border transition-all shadow-sm space-y-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
          <div className="flex items-center space-x-2">
            <Music className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              BÀI HÁT GẦN ĐÂY
            </h3>
          </div>

          <button
            onClick={() => onNavigate('songs')}
            className="text-xs font-semibold flex items-center space-x-1 hover:underline"
            style={{ color: 'var(--color-accent)' }}
          >
            <span>Xem tất cả ({songs.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {recentSongs.length === 0 ? (
          <div className="text-center py-8 space-y-2">
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Bạn chưa có bài hát nào. Hãy bắt đầu sáng tác bài hát đầu tiên!
            </p>
            <button
              onClick={() => onNavigate('create')}
              className="px-4 py-2 rounded-xl text-xs font-bold shadow-md cursor-pointer inline-flex items-center space-x-1.5"
              style={{
                backgroundColor: 'var(--color-accent)',
                color: '#ffffff',
              }}
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Tạo Bài Hát Đầu Tiên</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {recentSongs.map((song) => (
              <div
                key={song.id}
                onClick={() => {
                  onSelectSong(song);
                  onNavigate('create');
                }}
                className="p-4 rounded-xl border text-xs cursor-pointer transition-all hover:scale-[1.01] hover:border-amber-500/50 space-y-2"
                style={{
                  backgroundColor: 'var(--color-secondary-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm truncate" style={{ color: 'var(--color-text)' }}>
                    {song.title}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-500/10 text-amber-400">
                    v{song.currentVersionNumber}
                  </span>
                </div>

                <p className="text-[11px] line-clamp-2 italic" style={{ color: 'var(--color-muted-text)' }}>
                  "{song.sections[0]?.lyrics.slice(0, 100) || 'Lời bài hát...'}..."
                </p>

                <div className="flex items-center justify-between pt-2 border-t text-[10px]" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted-text)' }}>
                  <span>{song.controls.genre?.value || 'Pop Ballad'} • {song.controls.tempo?.value || '72 BPM'}</span>
                  <span>{new Date(song.updatedAt).toLocaleDateString('vi-VN')}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 200 Song Ideas Library by Age Category */}
      <SongIdeasExplorer onSelectAndStart={onSelectSongIdea} />
    </div>
  );
};
