/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Search,
  BookOpen,
  Wand2,
  ArrowRight,
  Filter,
  CheckCircle2,
  Layers,
  Music,
  Tag,
  Eye,
  X,
  Play,
  Flame,
  ChevronRight,
  Activity,
  Heart,
  Baby,
  GraduationCap,
  Home,
  Compass,
  Coffee,
  SunDim,
} from 'lucide-react';
import { SongIdea, AgeCategoryId } from '../../types';
import { ALL_SONG_IDEAS, AGE_CATEGORIES_META } from '../../data/songIdeas';

interface SongIdeasExplorerProps {
  onSelectAndStart: (idea: SongIdea) => void;
}

export const SongIdeasExplorer: React.FC<SongIdeasExplorerProps> = ({
  onSelectAndStart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<AgeCategoryId | 'all'>('3-5');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeIdeaForModal, setActiveIdeaForModal] = useState<SongIdea | null>(null);

  // Icon mapping for categories
  const getCategoryIcon = (id: AgeCategoryId | 'all') => {
    switch (id) {
      case '3-5':
        return <Baby className="w-4 h-4 text-amber-400" />;
      case '6-15':
        return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      case '15-25':
        return <Heart className="w-4 h-4 text-rose-400" />;
      case '25-35':
        return <Home className="w-4 h-4 text-cyan-400" />;
      case '35-45':
        return <Compass className="w-4 h-4 text-indigo-400" />;
      case '45-60':
        return <Coffee className="w-4 h-4 text-purple-400" />;
      case '60+':
        return <SunDim className="w-4 h-4 text-orange-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  // Filter ideas
  const filteredIdeas = useMemo(() => {
    return ALL_SONG_IDEAS.filter((idea) => {
      const matchCat = selectedCategory === 'all' || idea.categoryId === selectedCategory;
      if (!matchCat) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        idea.title.toLowerCase().includes(q) ||
        idea.shortSummary.toLowerCase().includes(q) ||
        idea.genre.toLowerCase().includes(q) ||
        idea.mood.toLowerCase().includes(q) ||
        idea.detailedDescription.toLowerCase().includes(q) ||
        idea.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div
      id="song-ideas-library-section"
      className="p-5 md:p-8 rounded-3xl border shadow-lg space-y-6"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Header with badge */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-5" style={{ borderColor: 'var(--color-border)' }}>
        <div className="space-y-1.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500/15 text-amber-400 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KHO 200 Ý TƯỞNG MẪU BÀI HÁT THEO ĐỘ TUỔI</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight" style={{ color: 'var(--color-text)' }}>
            Tuyển Tập 200 Kịch Bản Âm Nhạc Chuẩn 15 Dòng
          </h2>
          <p className="text-xs md:text-sm" style={{ color: 'var(--color-muted-text)' }}>
            Phân chia chi tiết 7 chặng đời từ thiếu nhi 3–5 tuổi đến tuổi già 60+. Chọn một bài hát mẫu và nhấn <strong>Bắt đầu ngay</strong> để chuyển sang phòng thu và tự động mở rộng cốt truyện.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[260px] md:min-w-[320px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <input
            id="input-search-song-ideas"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tựa đề, phong cách, cảm xúc..."
            className="w-full pl-9 pr-8 py-2 rounded-xl text-xs border transition-all focus:outline-none focus:ring-1"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Age Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer border ${
            selectedCategory === 'all'
              ? 'bg-amber-500 text-black border-amber-500 shadow-md scale-[1.02]'
              : 'hover:opacity-80'
          }`}
          style={
            selectedCategory !== 'all'
              ? {
                  backgroundColor: 'var(--color-secondary-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }
              : {}
          }
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tất Cả Độ Tuổi</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded-full font-extrabold bg-black/20 text-current ml-1">
            200
          </span>
        </button>

        {AGE_CATEGORIES_META.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`tab-age-cat-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 cursor-pointer border ${
                isSelected
                  ? 'bg-amber-500 text-black border-amber-500 shadow-md scale-[1.02]'
                  : 'hover:opacity-80'
              }`}
              style={
                !isSelected
                  ? {
                      backgroundColor: 'var(--color-secondary-surface)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }
                  : {}
              }
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  isSelected ? 'bg-black/20 text-current' : 'bg-amber-500/15 text-amber-400'
                } ml-1`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Category Description Notice */}
      {selectedCategory !== 'all' && (
        <div
          className="p-3.5 rounded-2xl border text-xs flex items-center justify-between"
          style={{
            backgroundColor: 'var(--color-secondary-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center space-x-2.5">
            {getCategoryIcon(selectedCategory)}
            <div>
              <span className="font-bold mr-1" style={{ color: 'var(--color-text)' }}>
                {AGE_CATEGORIES_META.find((c) => c.id === selectedCategory)?.label}:
              </span>
              <span style={{ color: 'var(--color-muted-text)' }}>
                {AGE_CATEGORIES_META.find((c) => c.id === selectedCategory)?.description}
              </span>
            </div>
          </div>
          <span className="text-[11px] font-bold text-amber-400 shrink-0 ml-2">
            Hiển thị {filteredIdeas.length} bài mẫu
          </span>
        </div>
      )}

      {/* Grid of Song Ideas */}
      {filteredIdeas.length === 0 ? (
        <div className="text-center py-12 space-y-3">
          <p className="text-sm font-semibold" style={{ color: 'var(--color-muted-text)' }}>
            Không tìm thấy ý tưởng bài hát nào phù hợp với từ khóa "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-black hover:opacity-90 transition-all"
          >
            Đặt Lại Bộ Lọc
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredIdeas.map((idea) => (
            <div
              key={idea.id}
              id={`card-song-idea-${idea.id}`}
              className="p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between group hover:border-amber-500/50 hover:shadow-md"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="space-y-3">
                {/* Category & Tempo badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] px-2.5 py-1 rounded-full font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 truncate">
                    {idea.ageGroup}
                  </span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md border text-gray-400" style={{ borderColor: 'var(--color-border)' }}>
                    {idea.tempo}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-bold text-sm line-clamp-1 group-hover:text-amber-400 transition-colors" style={{ color: 'var(--color-text)' }}>
                    {idea.title}
                  </h3>
                  <p className="text-[11px] font-medium text-amber-500/90 mt-0.5">
                    {idea.genre}
                  </p>
                </div>

                {/* Short summary */}
                <p className="text-xs line-clamp-2 leading-relaxed" style={{ color: 'var(--color-muted-text)' }}>
                  {idea.shortSummary}
                </p>

                {/* Mood & Vocal */}
                <div className="space-y-1 text-[11px] pt-1">
                  <div className="flex items-center space-x-1.5" style={{ color: 'var(--color-muted-text)' }}>
                    <Activity className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span className="truncate">Cảm xúc: {idea.mood}</span>
                  </div>
                  <div className="flex items-center space-x-1.5" style={{ color: 'var(--color-muted-text)' }}>
                    <Music className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">Nhạc cụ: {idea.instruments}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {idea.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md font-medium"
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        color: 'var(--color-muted-text)',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-3 border-t flex items-center gap-2" style={{ borderColor: 'var(--color-border)' }}>
                <button
                  id={`btn-view-details-${idea.id}`}
                  onClick={() => setActiveIdeaForModal(idea)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center space-x-1.5 transition-all hover:bg-white/5 cursor-pointer"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Xem 15 Dòng</span>
                </button>

                <button
                  id={`btn-start-idea-${idea.id}`}
                  onClick={() => onSelectAndStart(idea)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-bold shadow-md flex items-center justify-center space-x-1.5 transition-all hover:opacity-90 cursor-pointer bg-amber-500 text-black"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Bắt Đầu Ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 15-Line Specification Modal / Drawer */}
      {activeIdeaForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="w-full max-w-2xl max-h-[88vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            {/* Modal Header */}
            <div className="p-5 border-b flex items-center justify-between" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                      {activeIdeaForModal.categoryLabel}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {activeIdeaForModal.tempo} • {activeIdeaForModal.genre}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold tracking-tight mt-0.5" style={{ color: 'var(--color-text)' }}>
                    {activeIdeaForModal.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveIdeaForModal(null)}
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - 15 Lines */}
            <div className="p-5 md:p-6 overflow-y-auto space-y-4 text-xs md:text-sm leading-relaxed scrollbar-thin">
              <div
                className="p-4 rounded-2xl border space-y-2"
                style={{
                  backgroundColor: 'var(--color-secondary-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <h4 className="font-bold text-amber-400 flex items-center space-x-1.5 text-xs uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Kịch Bản Chi Tiết (15 Dòng Miêu Tả Sơ Lược & Phong Cách)</span>
                </h4>
                <div className="space-y-1.5 pt-1 text-gray-200 whitespace-pre-line font-mono text-[11px] md:text-xs leading-relaxed">
                  {activeIdeaForModal.detailedDescription}
                </div>
              </div>

              {/* Technical quick spec */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--color-secondary-surface)', borderColor: 'var(--color-border)' }}>
                  <span className="font-bold text-gray-400 block mb-1">Cảm Xúc Chủ Đạo:</span>
                  <span style={{ color: 'var(--color-text)' }}>{activeIdeaForModal.mood}</span>
                </div>
                <div className="p-3 rounded-xl border" style={{ backgroundColor: 'var(--color-secondary-surface)', borderColor: 'var(--color-border)' }}>
                  <span className="font-bold text-gray-400 block mb-1">Vocal & Cách Nhả Chữ:</span>
                  <span style={{ color: 'var(--color-text)' }}>{activeIdeaForModal.vocal}</span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t flex items-center justify-end gap-3" style={{ borderColor: 'var(--color-border)' }}>
              <button
                onClick={() => setActiveIdeaForModal(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold border hover:bg-white/5 cursor-pointer"
                style={{
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }}
              >
                Đóng
              </button>

              <button
                id="btn-modal-start-idea"
                onClick={() => {
                  const idea = activeIdeaForModal;
                  setActiveIdeaForModal(null);
                  onSelectAndStart(idea);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg flex items-center space-x-2 bg-amber-500 text-black hover:opacity-95 cursor-pointer"
              >
                <Wand2 className="w-4 h-4" />
                <span>Bắt Đầu Ngay Với Ý Tưởng Này</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
