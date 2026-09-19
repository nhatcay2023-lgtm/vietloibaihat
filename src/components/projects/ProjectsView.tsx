/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import {
  FolderKanban,
  Plus,
  Trash2,
  Edit2,
  Check,
  Music,
  Dna,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Project, StyleDNA } from '../../types';

interface ProjectsViewProps {
  projects: Project[];
  activeProject: Project | null;
  onSelectProject: (id: string) => void;
  onCreateProject: (project: Partial<Project>) => void;
  onDeleteProject: (id: string) => void;
  onUpdateProject: (project: Project) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  projects,
  activeProject,
  onSelectProject,
  onCreateProject,
  onDeleteProject,
  onUpdateProject,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [newProjectConcept, setNewProjectConcept] = useState('');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;

    onCreateProject({
      name: newProjectName.trim(),
      description: newProjectDesc.trim(),
      storyConcept: newProjectConcept.trim(),
    });

    setNewProjectName('');
    setNewProjectDesc('');
    setNewProjectConcept('');
    setIsModalOpen(false);
  };

  return (
    <div id="projects-view" className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div
        className="p-6 md:p-8 rounded-2xl border transition-all shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <FolderKanban className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-text)' }}>
              QUẢN LÝ DỰ ÁN (PROJECTS)
            </h2>
            <p className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
              Mỗi Project là một không gian độc lập với Style DNA, bộ nhớ bài hát và ý tưởng riêng
            </p>
          </div>
        </div>

        <button
          id="btn-open-new-project-modal"
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 rounded-xl text-xs font-bold shadow-md flex items-center space-x-2 transition-all cursor-pointer"
          style={{
            backgroundColor: 'var(--color-accent)',
            color: '#ffffff',
          }}
        >
          <Plus className="w-4 h-4" />
          <span>Tạo Project Mới</span>
        </button>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((proj) => {
          const isActive = activeProject?.id === proj.id;

          return (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              className={`p-5 rounded-2xl border transition-all space-y-3 relative ${
                isActive ? 'ring-2 ring-amber-500/50 shadow-md' : 'hover:opacity-95'
              }`}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: isActive ? 'var(--color-accent)' : 'var(--color-border)',
              }}
            >
              {/* Active Project Ribbon */}
              {isActive && (
                <div className="absolute top-4 right-4 flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Check className="w-3 h-3" />
                  <span>Đang Chọn</span>
                </div>
              )}

              <div className="space-y-1">
                <h3 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
                  {proj.name}
                </h3>
                <p className="text-xs line-clamp-2" style={{ color: 'var(--color-muted-text)' }}>
                  {proj.description || 'Không có mô tả chi tiết.'}
                </p>
              </div>

              {/* Concept Snippet */}
              {proj.storyConcept && (
                <div
                  className="p-2.5 rounded-lg text-[11px] border line-clamp-2"
                  style={{
                    backgroundColor: 'var(--color-secondary-surface)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-muted-text)',
                  }}
                >
                  <span className="font-semibold text-amber-400">Concept:</span> {proj.storyConcept}
                </div>
              )}

              {/* Stats info */}
              <div className="flex items-center justify-between text-xs pt-2 border-t" style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted-text)' }}>
                <span className="flex items-center space-x-1">
                  <Music className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{proj.songsCount || 0} bài hát</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{new Date(proj.updatedAt).toLocaleDateString('vi-VN')}</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 pt-2">
                {!isActive && (
                  <button
                    type="button"
                    onClick={() => onSelectProject(proj.id)}
                    className="flex-1 py-1.5 rounded-lg text-xs font-semibold border text-center transition-colors cursor-pointer hover:opacity-80"
                    style={{
                      backgroundColor: 'var(--color-secondary-surface)',
                      borderColor: 'var(--color-border)',
                      color: 'var(--color-text)',
                    }}
                  >
                    Chọn Project Này
                  </button>
                )}

                {projects.length > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (confirm(`Bạn có chắc muốn xóa project "${proj.name}"?`)) {
                        onDeleteProject(proj.id);
                      }
                    }}
                    className="p-1.5 rounded-lg border text-red-400 hover:bg-red-500/10 cursor-pointer"
                    style={{ borderColor: 'var(--color-border)' }}
                    title="Xóa project"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* New Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-in fade-in duration-200">
          <div
            className="w-full max-w-lg rounded-2xl border p-6 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="flex items-center justify-between border-b pb-3" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
                TẠO PROJECT MỚI
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

            <form onSubmit={handleCreate} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
                  Tên Project *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Album Mùa Thu 2026, EP Acoustic Hà Nội..."
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs border outline-none"
                  style={{
                    backgroundColor: 'var(--color-secondary-surface)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
                  Mô Tả Dự Án
                </label>
                <input
                  type="text"
                  placeholder="Ví dụ: Tuyển tập ca khúc tự sự acoustic mang âm hưởng indie ballad..."
                  value={newProjectDesc}
                  onChange={(e) => setNewProjectDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs border outline-none"
                  style={{
                    backgroundColor: 'var(--color-secondary-surface)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text)',
                  }}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold block" style={{ color: 'var(--color-text)' }}>
                  Concept & Định Hướng Nghệ Thuật
                </label>
                <textarea
                  rows={3}
                  placeholder="Định hướng âm nhạc, ca từ, tâm lý ca khúc cho toàn bộ dự án..."
                  value={newProjectConcept}
                  onChange={(e) => setNewProjectConcept(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs border outline-none font-sans"
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
                  className="px-5 py-2 rounded-xl text-xs font-bold shadow-md cursor-pointer"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: '#ffffff',
                  }}
                >
                  Tạo Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
