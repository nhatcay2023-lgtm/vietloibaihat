/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import {
  Music2,
  FolderOpen,
  Settings,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Palette,
  Layers,
} from 'lucide-react';
import { Project, UserSettings } from '../../types';

interface HeaderProps {
  activeProject: Project | null;
  projects: Project[];
  onSelectProject: (id: string) => void;
  onNewProject: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  settings: UserSettings;
  apiConnected: boolean;
  onToggleThemeModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeProject,
  projects,
  onSelectProject,
  onNewProject,
  onNavigate,
  currentPage,
  settings,
  apiConnected,
}) => {
  return (
    <header
      id="app-header"
      className="h-16 border-b px-4 md:px-6 flex items-center justify-between sticky top-0 z-30 backdrop-blur-md transition-colors"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Brand & Active Project */}
      <div className="flex items-center space-x-3 md:space-x-6">
        <button
          id="btn-header-brand"
          onClick={() => onNavigate('create')}
          className="flex items-center space-x-2.5 text-left group"
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"
            style={{
              backgroundColor: 'var(--color-accent)',
              color: '#ffffff',
            }}
          >
            <Music2 className="w-5 h-5 animate-pulse" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-base font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              AI SONGWRITER STUDIO
            </h1>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              BỘ NÃO SÁNG TÁC NHẠC THÔNG MINH
            </p>
          </div>
        </button>

        {/* Project Selector Dropdown */}
        <div className="flex items-center pl-2 md:pl-4 border-l" style={{ borderColor: 'var(--color-border)' }}>
          <FolderOpen className="w-4 h-4 mr-2 hidden md:inline" style={{ color: 'var(--color-accent)' }} />
          <div className="relative">
            <select
              id="select-active-project"
              value={activeProject?.id || ''}
              onChange={(e) => {
                if (e.target.value === '__new__') {
                  onNewProject();
                } else {
                  onSelectProject(e.target.value);
                }
              }}
              className="text-xs md:text-sm font-medium rounded-lg px-2.5 py-1.5 pr-8 border outline-none cursor-pointer appearance-none transition-all shadow-sm"
              style={{
                backgroundColor: 'var(--color-secondary-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  📁 {p.name} ({p.songsCount || 0} bài)
                </option>
              ))}
              <option value="__new__">+ Tạo Project Mới...</option>
            </select>
          </div>
        </div>
      </div>

      {/* Right Action Icons & Status */}
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* Gemini API Status Badge */}
        <button
          id="btn-gemini-status"
          onClick={() => onNavigate('settings')}
          className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors hover:opacity-90"
          style={{
            backgroundColor: apiConnected ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
            borderColor: apiConnected ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)',
            color: apiConnected ? '#10b981' : '#f59e0b',
          }}
          title="Trạng thái Gemini API"
        >
          {apiConnected ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          ) : (
            <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
          )}
          <span className="hidden sm:inline">
            {apiConnected ? 'Gemini 3 Connected' : 'Gemini Ready'}
          </span>
        </button>

        {/* Mode Toggle Chip (Basic vs Advanced) */}
        <button
          id="btn-switch-studio-mode"
          onClick={() => onNavigate('create')}
          className="hidden md:flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-semibold border transition-all"
          style={{
            backgroundColor: 'var(--color-secondary-surface)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
          }}
        >
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>21 Controls Studio</span>
        </button>

        {/* Help Center */}
        <button
          id="btn-nav-help"
          onClick={() => onNavigate('help')}
          className="p-2 rounded-lg border transition-colors"
          style={{
            backgroundColor: currentPage === 'help' ? 'var(--color-accent)' : 'var(--color-surface)',
            color: currentPage === 'help' ? '#ffffff' : 'var(--color-text)',
            borderColor: 'var(--color-border)',
          }}
          title="Hướng dẫn sử dụng (22 chủ đề)"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Settings */}
        <button
          id="btn-nav-settings"
          onClick={() => onNavigate('settings')}
          className="p-2 rounded-lg border transition-colors"
          style={{
            backgroundColor: currentPage === 'settings' ? 'var(--color-accent)' : 'var(--color-surface)',
            color: currentPage === 'settings' ? '#ffffff' : 'var(--color-text)',
            borderColor: 'var(--color-border)',
          }}
          title="Cài đặt Theme, Font, Gemini API"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
