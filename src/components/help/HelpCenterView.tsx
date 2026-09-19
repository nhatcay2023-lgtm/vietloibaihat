/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Lightbulb,
  FileText,
  Sliders,
  Dna,
} from 'lucide-react';
import { HELP_TOPICS } from '../../data/helpTopics';

export const HelpCenterView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(HELP_TOPICS[0].id);

  const filteredTopics = useMemo(() => {
    return HELP_TOPICS.filter((t) => {
      const q = searchQuery.toLowerCase();
      const contentStr = t.content.join(' ').toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        contentStr.includes(q)
      );
    });
  }, [searchQuery]);

  const selectedTopic = HELP_TOPICS.find((t) => t.id === selectedTopicId) || HELP_TOPICS[0];

  return (
    <div id="help-center-view" className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div
        className="p-6 md:p-8 rounded-2xl border transition-all shadow-sm space-y-2"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              TRUNG TÂM HƯỚNG DẪN SỬ DỤNG (22 CHỦ ĐỀ)
            </h2>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Cẩm nang đầy đủ về 21 Creative Controls, Master Context, Song Blueprint, Meaning Layer & Phối khí
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Topics List */}
        <div
          className="p-4 rounded-2xl border space-y-3"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm hướng dẫn..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs border outline-none"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            />
          </div>

          <div className="space-y-1 max-h-[550px] overflow-y-auto pr-1">
            {filteredTopics.map((topic) => {
              const isSelected = topic.id === selectedTopicId;

              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer truncate flex items-center justify-between ${
                    isSelected ? 'ring-1 ring-amber-500 shadow-sm' : 'hover:opacity-80'
                  }`}
                  style={{
                    backgroundColor: isSelected
                      ? 'var(--color-tag-bg)'
                      : 'transparent',
                    color: isSelected ? 'var(--color-tag-text)' : 'var(--color-text)',
                  }}
                >
                  <span className="truncate">{topic.stepNumber}. {topic.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50 ml-1 shrink-0" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content Area */}
        <div
          className="md:col-span-2 p-6 md:p-8 rounded-2xl border transition-all shadow-sm space-y-5"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
            <span className="text-[10px] font-bold uppercase text-amber-500 tracking-wider block mb-1">
              CHUYÊN MỤC #{selectedTopic.stepNumber} • {selectedTopic.titleEn}
            </span>
            <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
              {selectedTopic.title}
            </h3>
            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'var(--color-muted-text)' }}>
              {selectedTopic.summary}
            </p>
          </div>

          {/* Paragraphs */}
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            {selectedTopic.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tips Box */}
          {selectedTopic.tips && selectedTopic.tips.length > 0 && (
            <div
              className="p-4 rounded-xl border space-y-2 text-xs"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
                <Lightbulb className="w-4 h-4" />
                <span>Mẹo Sáng Tác Chuyên Nghiệp:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1" style={{ color: 'var(--color-muted-text)' }}>
                {selectedTopic.tips.map((tip, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
