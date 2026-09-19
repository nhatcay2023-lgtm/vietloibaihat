/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useMemo } from 'react';
import {
  Music,
  Search,
  Plus,
  Trash2,
  ExternalLink,
  Copy,
  Check,
  Calendar,
  Layers,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { Song, Project } from '../../types';

interface SongsListViewProps {
  songs: Song[];
  projects: Project[];
  onSelectSong: (song: Song) => void;
  onDeleteSong: (id: string) => void;
  onNavigate: (page: string) => void;
}

export const SongsListView: React.FC<SongsListViewProps> = ({
  songs,
  projects,
  onSelectSong,
  onDeleteSong,
  onNavigate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterProject, setFilterProject] = useState<string>('all');
  const [copiedSongId, setCopiedSongId] = useState<string | null>(null);

  const handleCopySongLyrics = (song: Song) => {
    const fullText = `${song.title}\n\n${song.sections
      ? song.sections.map((s) => `${s.label}\n\n${s.lyrics}`).join('\n\n')
      : song.lyrics}`;
    navigator.clipboard.writeText(fullText);
    setCopiedSongId(song.id);
    setTimeout(() => setCopiedSongId(null), 2000);
  };

  const filteredSongs = useMemo(() => {
    return songs.filter((s) => {
      const matchProj = filterProject === 'all' || s.projectId === filterProject;
      const matchQuery =
        searchQuery.trim() === '' ||
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.lyrics.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.controls.genre?.value || '').toLowerCase().includes(searchQuery.toLowerCase());
      return matchProj && matchQuery;
    });
  }, [songs, filterProject, searchQuery]);

  return (
    <div id="songs-list-view" className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div
        className="p-6 md:p-8 rounded-2xl border transition-all shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Music className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              KHO BÀI HÁT ({songs.length})
            </h2>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Thư viện toàn bộ ca khúc đã tạo kèm bản vẽ Blueprint, Meaning Layer và Production Guide
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('create')}
          className="px-4 py-2.5 rounded-xl text-xs font-bold shadow-md flex items-center space-x-2 transition-all cursor-pointer"
          style={{
            backgroundColor: 'var(--color-accent)',
            color: '#ffffff',
          }}
        >
          <Plus className="w-4 h-4" />
          <span>Sáng Tác Bài Hát Mới</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full max-w-md">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm theo tên bài hát, lời hoặc thể loại..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs border outline-none"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={filterProject}
            onChange={(e) => setFilterProject(e.target.value)}
            className="text-xs font-medium rounded-xl px-3 py-2 border outline-none cursor-pointer flex-1 sm:flex-initial"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            <option value="all">Tất cả dự án ({songs.length})</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Songs Grid */}
      {filteredSongs.length === 0 ? (
        <div
          className="p-12 text-center rounded-2xl border space-y-3"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <Music className="w-8 h-8 mx-auto text-gray-400 opacity-50" />
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
            Không tìm thấy bài hát nào
          </p>
          <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
            Hãy thử tìm kiếm với từ khóa khác hoặc tạo bài hát mới.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSongs.map((song) => {
            const project = projects.find((p) => p.id === song.projectId);

            return (
              <div
                key={song.id}
                id={`song-card-${song.id}`}
                className="p-5 rounded-2xl border transition-all space-y-3 flex flex-col justify-between hover:scale-[1.01] shadow-sm"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider">
                        {project?.name || 'Độc lập'}
                      </span>
                      <h3 className="text-base font-bold line-clamp-1" style={{ color: 'var(--color-text)' }}>
                        {song.title}
                      </h3>
                    </div>

                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-500/10 text-amber-400 shrink-0">
                      v{song.currentVersionNumber}
                    </span>
                  </div>

                  {/* Lyrics Snippet */}
                  <p className="text-xs line-clamp-3 italic font-serif leading-relaxed" style={{ color: 'var(--color-muted-text)' }}>
                    "{song.sections[0]?.lyrics || song.lyrics.slice(0, 120)}..."
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                      {song.controls.genre?.value || 'Pop Ballad'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                      {song.controls.tempo?.value || '72 BPM'}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400">
                      {song.sections.length} đoạn
                    </span>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="flex items-center justify-between pt-3 border-t text-xs" style={{ borderColor: 'var(--color-border)' }}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectSong(song);
                      onNavigate('create');
                    }}
                    className="flex items-center space-x-1 font-bold transition-all hover:underline cursor-pointer"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    <span>Mở Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center space-x-1.5">
                    {/* 1-Click Copy Full Lyrics */}
                    <button
                      type="button"
                      onClick={() => handleCopySongLyrics(song)}
                      className="px-2 py-1 rounded-lg border text-xs font-semibold flex items-center space-x-1 transition-all cursor-pointer hover:border-amber-400"
                      style={{
                        backgroundColor: 'var(--color-secondary-surface)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-text)',
                      }}
                      title="Sao chép toàn bộ lời bài hát này trong 1 lần nhấn"
                    >
                      {copiedSongId === song.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Đã copy!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-amber-400" />
                          <span>Copy lời</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (confirm(`Bạn có chắc muốn xóa ca khúc "${song.title}"?`)) {
                          onDeleteSong(song.id);
                        }
                      }}
                      className="p-1.5 rounded-lg border text-red-400 hover:bg-red-500/10 cursor-pointer"
                      style={{ borderColor: 'var(--color-border)' }}
                      title="Xóa bài hát"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
