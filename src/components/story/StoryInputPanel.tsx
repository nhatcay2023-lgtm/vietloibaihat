/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import {
  Sparkles,
  BookText,
  Clock,
  User,
  Heart,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { SONG_LENGTH_OPTIONS } from '../../data/controlsData';
import { StoryAnalysis } from '../../types';

interface StoryInputPanelProps {
  story: string;
  onChangeStory: (val: string) => void;
  songLength: string;
  onChangeSongLength: (val: string) => void;
  onExpandStory: () => Promise<void>;
  isExpanding: boolean;
  storyAnalysis: StoryAnalysis | null;
}

export const StoryInputPanel: React.FC<StoryInputPanelProps> = ({
  story,
  onChangeStory,
  songLength,
  onChangeSongLength,
  onExpandStory,
  isExpanding,
  storyAnalysis,
}) => {
  const [showAnalysisDetails, setShowAnalysisDetails] = useState(false);

  return (
    <div
      id="story-input-panel"
      className="p-5 md:p-6 rounded-2xl border transition-all shadow-sm space-y-4"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: 'var(--color-tag-bg)',
              color: 'var(--color-tag-text)',
            }}
          >
            <BookText className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-base font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              BÀI HÁT NÀY NÓI VỀ ĐIỀU GÌ?
            </h2>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Nhập ý tưởng, câu chuyện, kỷ niệm, nhân vật, cảm xúc và thông điệp cốt lõi
            </p>
          </div>
        </div>

        {/* AI Expand Story Button */}
        <button
          id="btn-ai-expand-story"
          type="button"
          onClick={onExpandStory}
          disabled={isExpanding || !story.trim()}
          className="inline-flex items-center justify-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold shadow-md transition-all disabled:opacity-50 cursor-pointer"
          style={{
            backgroundColor: 'var(--color-accent)',
            color: '#ffffff',
          }}
          title="AI sẽ phân tích tâm lý, bối cảnh và mở rộng chiều sâu nhưng giữ nguyên 100% ý đồ gốc"
        >
          <Sparkles className={`w-3.5 h-3.5 ${isExpanding ? 'animate-spin' : ''}`} />
          <span>{isExpanding ? 'AI Đang Mở Rộng...' : 'AI MỞ RỘNG CÂU CHUYỆN'}</span>
        </button>
      </div>

      {/* Quick Inspiration Presets */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs" style={{ color: 'var(--color-muted-text)' }}>
          <span className="font-semibold flex items-center space-x-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Ý tưởng gợi ý nhanh (Nhấn để điền mẫu):</span>
          </span>
          {story.trim() && (
            <button
              type="button"
              onClick={() => onChangeStory('')}
              className="hover:underline cursor-pointer opacity-80 hover:opacity-100"
            >
              Xóa câu chuyện
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            {
              label: '🍂 Hoàng Diệu Mùa Thu',
              text: 'Một người trở về góc quán cà phê cũ trên phố Hoàng Diệu vào một chiều thu lá rụng. Nhìn chiếc ghế trống đối diện, nhớ lại lần đầu hẹn hò năm 18 tuổi. Dù thời gian đã qua và mỗi người một ngã rẽ, trong lòng chỉ còn sự biết ơn và bâng khuâng ngọt ngào.',
            },
            {
              label: '🌧️ Phố Đêm Sau Mưa',
              text: 'Đi dạo một mình trên con phố ướt sũng ánh đèn neon lúc nửa đêm sau cơn mưa rào. Những suy nghĩ hỗn độn về sự nghiệp, những cuộc gọi chưa dám thực hiện và khao khát tìm lại chính mình giữa thành phố tấp nập.',
            },
            {
              label: '🌅 Chuyến Xe Tuổi 20',
              text: 'Chuyến xe khách rời quê nhà lên thành phố của một thanh niên mang theo cây đàn guitar cũ và giấc mơ âm nhạc. Sự háo hức xen lẫn nỗi sợ, lời dặn dò của mẹ ở bến xe và niềm tin kiên định vào tương lai.',
            },
            {
              label: '☕ Ký Ức Ban Công Cũ',
              text: 'Sáng sớm bên ban công nhiều nắng, nhâm nhi tách trà nóng và bất chợt nghe lại giai điệu bài hát mà người xưa từng rất thích. Một cảm giác bình yên, nhẹ nhàng chữa lành sau nhiều năm giông bão.',
            },
          ].map((preset, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onChangeStory(preset.text)}
              className="px-2.5 py-1 rounded-lg text-xs font-medium border transition-all cursor-pointer hover:border-amber-400"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Story Textarea */}
      <div className="relative">
        <textarea
          id="textarea-story-input"
          value={story}
          onChange={(e) => onChangeStory(e.target.value)}
          placeholder="Ví dụ: Một người trở về góc quán cà phê cũ trên phố Hoàng Diệu vào một buổi chiều thu mưa bay. Nhìn thấy chiếc ghế trống đối diện, nhớ lại lần đầu hẹn hò năm 18 tuổi. Giờ cả hai đã có cuộc sống riêng, chỉ còn lại sự biết ơn và bâng khuâng cho một thời thanh xuân đẹp..."
          rows={4}
          className="w-full p-4 rounded-xl text-sm leading-relaxed border outline-none transition-all resize-y font-normal"
          style={{
            backgroundColor: 'var(--color-secondary-surface)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
          }}
        />
        <div className="flex justify-between items-center mt-2 px-1 text-xs" style={{ color: 'var(--color-muted-text)' }}>
          <div className="flex items-center space-x-1">
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>Show, Don't Tell: Mô tả chi tiết cảnh vật, giác quan, đồ vật kỷ niệm giúp bài hát xúc động hơn.</span>
          </div>
          <span>{story.length} ký tự</span>
        </div>
      </div>

      {/* Song Length & Analysis Toggle */}
      <div className="pt-2 border-t flex flex-wrap items-center justify-between gap-3" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
          <span className="text-xs font-semibold" style={{ color: 'var(--color-text)' }}>
            Độ Dài Bài Hát (Song Length):
          </span>
          <select
            id="select-song-length"
            value={songLength}
            onChange={(e) => onChangeSongLength(e.target.value)}
            className="text-xs font-medium rounded-lg px-2.5 py-1.5 border outline-none cursor-pointer"
            style={{
              backgroundColor: 'var(--color-secondary-surface)',
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
            }}
          >
            {SONG_LENGTH_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {storyAnalysis && (
          <button
            id="btn-toggle-story-analysis"
            type="button"
            onClick={() => setShowAnalysisDetails(!showAnalysisDetails)}
            className="text-xs font-semibold flex items-center space-x-1.5 px-3 py-1 rounded-lg border transition-colors cursor-pointer"
            style={{
              backgroundColor: 'var(--color-tag-bg)',
              color: 'var(--color-tag-text)',
              borderColor: 'var(--color-border)',
            }}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>AI Story Breakdown</span>
            {showAnalysisDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>

      {/* Story Analysis Breakdown Accordion */}
      {storyAnalysis && showAnalysisDetails && (
        <div
          id="story-analysis-details"
          className="p-4 rounded-xl border space-y-3 text-xs animate-in fade-in duration-200"
          style={{
            backgroundColor: 'var(--color-secondary-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="font-bold text-sm flex items-center space-x-2" style={{ color: 'var(--color-text)' }}>
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Kết Quả Phân Tích Cốt Truyện & Tâm Lý AI:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <span className="font-semibold block" style={{ color: 'var(--color-muted-text)' }}>Chủ đề (Topic):</span>
              <span className="font-medium" style={{ color: 'var(--color-text)' }}>{storyAnalysis.topic}</span>
            </div>
            <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <span className="font-semibold block" style={{ color: 'var(--color-muted-text)' }}>Nhân vật & Đại từ:</span>
              <span className="font-medium" style={{ color: 'var(--color-text)' }}>{storyAnalysis.characters}</span>
            </div>
            <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <span className="font-semibold block" style={{ color: 'var(--color-muted-text)' }}>Cảm xúc cốt lõi:</span>
              <span className="font-medium text-amber-500">{storyAnalysis.primaryEmotion} ({storyAnalysis.secondaryEmotion})</span>
            </div>
            <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <span className="font-semibold block" style={{ color: 'var(--color-muted-text)' }}>Không gian & Thời gian:</span>
              <span className="font-medium" style={{ color: 'var(--color-text)' }}>{storyAnalysis.spaceContext} • {storyAnalysis.timeContext}</span>
            </div>
            <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <span className="font-semibold block" style={{ color: 'var(--color-muted-text)' }}>Bước ngoặt cảm xúc:</span>
              <span className="font-medium" style={{ color: 'var(--color-text)' }}>{storyAnalysis.emotionalShiftPoint}</span>
            </div>
            <div className="p-2.5 rounded-lg border" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
              <span className="font-semibold block" style={{ color: 'var(--color-muted-text)' }}>Thông điệp đọng lại:</span>
              <span className="font-medium" style={{ color: 'var(--color-text)' }}>{storyAnalysis.coreMessage}</span>
            </div>
          </div>

          {storyAnalysis.expandedStory && (
            <div className="p-3 rounded-lg border text-xs leading-relaxed mt-2" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }}>
              <span className="font-semibold block text-amber-500 mb-1">Phiên Bản Mở Rộng Chiều Sâu:</span>
              {storyAnalysis.expandedStory}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
