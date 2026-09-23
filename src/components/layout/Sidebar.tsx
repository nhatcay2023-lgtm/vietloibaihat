/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import {
  LayoutDashboard,
  Wand2,
  FolderKanban,
  Music,
  Library,
  Dna,
  BookOpen,
  Settings,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  songsCount: number;
  referencesCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onNavigate,
  songsCount,
  referencesCount,
}) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Trang Chủ',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'song-ideas',
      label: 'Ý Tưởng Mẫu',
      icon: Sparkles,
      badge: '200 Bài',
      highlight: false,
    },
    {
      id: 'create',
      label: 'Tạo Bài Hát',
      icon: Wand2,
      badge: '21 Controls',
      highlight: true,
    },
    {
      id: 'projects',
      label: 'Dự Án (Projects)',
      icon: FolderKanban,
      badge: null,
    },
    {
      id: 'songs',
      label: 'Kho Bài Hát',
      icon: Music,
      badge: songsCount ? `${songsCount}` : null,
    },
    {
      id: 'references',
      label: 'Reference Library',
      icon: Library,
      badge: referencesCount ? `${referencesCount}` : null,
    },
    {
      id: 'style-dna',
      label: 'Style DNA',
      icon: Dna,
      badge: 'AI Memory',
    },
    {
      id: 'help',
      label: 'Hướng Dẫn Sử Dụng',
      icon: BookOpen,
      badge: '22 Mục',
    },
    {
      id: 'settings',
      label: 'Cài Đặt Hệ Thống',
      icon: Settings,
      badge: null,
    },
  ];

  return (
    <aside
      id="app-sidebar"
      className="w-64 border-r flex flex-col justify-between hidden md:flex shrink-0 transition-colors"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="p-4 space-y-1.5">
        <div className="px-3 py-2 mb-2">
          <p className="text-[11px] font-bold tracking-wider uppercase" style={{ color: 'var(--color-muted-text)' }}>
            STUDIO WORKSPACE
          </p>
        </div>

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                isActive ? 'shadow-sm font-bold' : 'hover:opacity-80'
              }`}
              style={{
                backgroundColor: isActive ? 'var(--color-accent)' : 'transparent',
                color: isActive ? 'var(--color-accent-contrast, #ffffff)' : 'var(--color-text)',
              }}
            >
              <div className="flex items-center space-x-3">
                <Icon
                  className="w-4 h-4 transition-transform group-hover:scale-110"
                  style={{ color: isActive ? 'var(--color-accent-contrast, #ffffff)' : 'var(--color-accent)' }}
                />
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: isActive
                      ? 'rgba(0, 0, 0, 0.2)'
                      : 'var(--color-tag-bg)',
                    color: isActive ? 'var(--color-accent-contrast, #ffffff)' : 'var(--color-tag-text)',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Info Box */}
      <div className="p-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div
          className="p-3.5 rounded-xl border space-y-2 text-xs"
          style={{
            backgroundColor: 'var(--color-secondary-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold" style={{ color: 'var(--color-text)' }}>
              Songwriting Brain v3.0
            </span>
          </div>
          <p className="text-[11px] leading-relaxed" style={{ color: 'var(--color-muted-text)' }}>
            Hệ thống tuân thủ quy tắc 3 trạng thái (USER / AI / NONE) + LOCK và chu trình Master Context.
          </p>
        </div>
      </div>
    </aside>
  );
};
