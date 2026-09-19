/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import {
  Library,
  Plus,
  Sparkles,
  Trash2,
  Music,
  Dna,
  FileText,
  User,
  Check,
  Search,
} from 'lucide-react';
import { ReferenceSong, StyleDNA, Project } from '../../types';
import { AiPipelineService } from '../../services/aiPipelineService';

interface ReferenceLibraryViewProps {
  references: ReferenceSong[];
  projects: Project[];
  activeProject: Project | null;
  onAddReference: (ref: ReferenceSong) => void;
  onDeleteReference: (id: string) => void;
  onUpdateReference: (ref: ReferenceSong) => void;
}

export const ReferenceLibraryView: React.FC<ReferenceLibraryViewProps> = ({
  references,
  projects,
  activeProject,
  onAddReference,
  onDeleteReference,
  onUpdateReference,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [tempo, setTempo] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [audioDescription, setAudioDescription] = useState('');

  const handleCreateAndAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsAnalyzing(true);
    const newRef: ReferenceSong = {
      id: `ref_${Date.now()}`,
      projectId: activeProject?.id,
      title: title.trim(),
      artist: artist.trim(),
      genre: genre.trim() || 'Pop',
      tempo: tempo.trim() || '75 BPM',
      lyrics: lyrics.trim(),
      audioDescription: audioDescription.trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      // Analyze with AI to extract abstract Style DNA
      const dna = await AiPipelineService.analyzeReference(newRef);
      newRef.styleDNA = dna;
    } catch (err) {
      console.warn('AI reference analysis fallback:', err);
    } finally {
      setIsAnalyzing(false);
      onAddReference(newRef);
      setTitle('');
      setArtist('');
      setGenre('');
      setTempo('');
      setLyrics('');
      setAudioDescription('');
      setIsModalOpen(false);
    }
  };

  const filteredReferences = references.filter(
    (r) =>
      searchQuery.trim() === '' ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.genre?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="reference-library-view" className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div
        className="p-6 md:p-8 rounded-2xl border transition-all shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Library className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              REFERENCE LIBRARY (BÀI HÁT THAM KHẢO)
            </h2>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              AI sẽ bóc tách các đặc trưng trừu tượng (Style DNA) mà KHÔNG sao chép ca từ hay giai điệu
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl text-xs font-bold shadow-md flex items-center space-x-2 transition-all cursor-pointer"
          style={{
            backgroundColor: 'var(--color-accent)',
            color: '#ffffff',
          }}
        >
          <Plus className="w-4 h-4" />
          <span>Thêm Bài Tham Khảo Mới</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Tìm bài hát mẫu theo tên, nghệ sĩ, thể loại..."
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

      {/* References Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReferences.map((ref) => (
          <div
            key={ref.id}
            id={`reference-card-${ref.id}`}
            className="p-5 rounded-2xl border transition-all space-y-3 flex flex-col justify-between shadow-sm"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
                    {ref.title}
                  </h3>
                  <p className="text-xs font-semibold" style={{ color: 'var(--color-accent)' }}>
                    {ref.artist || 'Nghệ sĩ tham khảo'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onDeleteReference(ref.id)}
                  className="p-1 rounded-lg border text-red-400 hover:bg-red-500/10 cursor-pointer"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Attributes Chips */}
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400">
                  {ref.genre || 'Pop'}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
                  {ref.tempo || '75 BPM'}
                </span>
              </div>

              {/* Style DNA Highlights */}
              {ref.styleDNA && (
                <div
                  className="p-3 rounded-xl border text-[11px] space-y-1"
                  style={{
                    backgroundColor: 'var(--color-secondary-surface)',
                    borderColor: 'var(--color-border)',
                  }}
                >
                  <div className="flex items-center space-x-1.5 text-purple-400 font-bold">
                    <Dna className="w-3.5 h-3.5" />
                    <span>Style DNA Đã Bóc Tách:</span>
                  </div>
                  <p className="line-clamp-2" style={{ color: 'var(--color-muted-text)' }}>
                    <span className="font-semibold text-gray-300">Cảm xúc:</span> {ref.styleDNA.emotionalTone?.join(', ')}
                  </p>
                  <p className="line-clamp-2" style={{ color: 'var(--color-muted-text)' }}>
                    <span className="font-semibold text-gray-300">Nhạc cụ:</span> {ref.styleDNA.instrumentation?.join(', ')}
                  </p>
                </div>
              )}
            </div>

            <div className="text-[10px] pt-2 border-t" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted-text)' }}>
              Đã nạp vào bộ não sáng tác AI
            </div>
          </div>
        ))}
      </div>

      {/* Add Reference Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-in fade-in duration-200">
          <div
            className="w-full max-w-xl rounded-2xl border p-6 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
                THÊM BÀI HÁT THAM KHẢO (REFERENCE SONG)
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-xs px-2 py-1 rounded border cursor-pointer hover:opacity-80"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted-text)' }}
              >
                Đóng
              </button>
            </div>

            <form onSubmit={handleCreateAndAnalyze} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
                    Tên Bài Hát Tham Khảo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ví dụ: Nàng Thơ, Cơn Mưa Băng Giá..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl text-xs border outline-none"
                    style={{
                      backgroundColor: 'var(--color-secondary-surface)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
                    Nghệ Sĩ / Ca Sĩ
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Hoàng Dũng, Bùi Anh Tuấn..."
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl text-xs border outline-none"
                    style={{
                      backgroundColor: 'var(--color-secondary-surface)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
                    Thể Loại (Genre)
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: Ballad, R&B, Acoustic Pop..."
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl text-xs border outline-none"
                    style={{
                      backgroundColor: 'var(--color-secondary-surface)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
                    Tempo / Nhịp độ
                  </label>
                  <input
                    type="text"
                    placeholder="Ví dụ: 72 BPM, 85 BPM..."
                    value={tempo}
                    onChange={(e) => setTempo(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl text-xs border outline-none"
                    style={{
                      backgroundColor: 'var(--color-secondary-surface)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
                  Lời Bài Hát Mẫu (Tùy chọn - để AI phân tích cấu trúc & nhịp)
                </label>
                <textarea
                  rows={3}
                  placeholder="Dán một đoạn hoặc toàn bộ lời bài hát tham khảo..."
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl text-xs border outline-none font-serif"
                  style={{
                    backgroundColor: 'var(--color-secondary-surface)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
                  Mô Tả Âm Thanh & Cảm Xúc (Audio Description)
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Tiếng piano mở đầu chậm rãi, dàn dây dâng trào ở điệp khúc, vocal nam cao mộc mạc..."
                  value={audioDescription}
                  onChange={(e) => setAudioDescription(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-xl text-xs border outline-none"
                  style={{
                    backgroundColor: 'var(--color-secondary-surface)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                />
              </div>

              <div className="flex justify-end space-x-2 pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium border cursor-pointer hover:opacity-80"
                  style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted-text)' }}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="px-5 py-2 rounded-xl text-xs font-bold shadow-md cursor-pointer flex items-center space-x-2 disabled:opacity-50"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: '#ffffff',
                  }}
                >
                  <Sparkles className={`w-3.5 h-3.5 ${isAnalyzing ? 'animate-spin' : ''}`} />
                  <span>{isAnalyzing ? 'AI Đang Bóc Tách DNA...' : 'Thêm & Bóc Tách Style DNA'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
