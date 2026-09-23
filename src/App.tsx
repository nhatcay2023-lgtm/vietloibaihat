/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import {
  Wand2,
  Sparkles,
  RefreshCw,
  FolderOpen,
  Music,
  ArrowRight,
  Sliders,
  Layers,
  HelpCircle,
  Settings as SettingsIcon,
  LayoutDashboard,
  Library,
  Dna,
  BookOpen,
} from 'lucide-react';
import { THEMES, applyAppTheme } from './data/themes';
import { DEFAULT_CONTROLS } from './data/controlsData';
import {
  Project,
  Song,
  ReferenceSong,
  UserSettings,
  ControlsRecord,
  ControlState,
  StoryAnalysis,
  GenerationStepStatus,
  SongIdea,
} from './types';
import { StorageService } from './services/storageService';
import { GeminiService } from './services/geminiService';
import { AiPipelineService } from './services/aiPipelineService';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { StoryInputPanel } from './components/story/StoryInputPanel';
import { CreativeControlsPanel } from './components/controls/CreativeControlsPanel';
import { BasicModePanel } from './components/controls/BasicModePanel';
import { SongOutputView } from './components/song/SongOutputView';
import { AiScanVisualizer } from './components/pipeline/AiScanVisualizer';
import { DashboardView } from './components/dashboard/DashboardView';
import { SongIdeasExplorer } from './components/dashboard/SongIdeasExplorer';
import { ProjectsView } from './components/projects/ProjectsView';
import { SongsListView } from './components/songs/SongsListView';
import { ReferenceLibraryView } from './components/references/ReferenceLibraryView';
import { StyleDnaView } from './components/style/StyleDnaView';
import { HelpCenterView } from './components/help/HelpCenterView';
import { SettingsView } from './components/settings/SettingsView';

export default function App() {
  // Navigation
  const [currentPage, setCurrentPage] = useState<string>('create');

  // Persistence State
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProjectId, setActiveProjectId] = useState<string>('');
  const [songs, setSongs] = useState<Song[]>([]);
  const [references, setReferences] = useState<ReferenceSong[]>([]);
  const [settings, setSettings] = useState<UserSettings>(StorageService.getSettings());

  // Creative Studio Working State
  const [story, setStory] = useState<string>('');
  const [songLength, setSongLength] = useState<string>('300–400 từ (4–5 phút)');
  const [studioMode, setStudioMode] = useState<'advanced' | 'basic'>('advanced');
  const [controls, setControls] = useState<ControlsRecord>(DEFAULT_CONTROLS);
  const [activeSong, setActiveSong] = useState<Song | null>(null);
  const [storyAnalysis, setStoryAnalysis] = useState<StoryAnalysis | null>(null);

  // Status & Progress State
  const [apiConnected, setApiConnected] = useState<boolean>(true);
  const [isExpandingStory, setIsExpandingStory] = useState<boolean>(false);
  const [isResolvingControls, setIsResolvingControls] = useState<boolean>(false);
  const [isGeneratingSong, setIsGeneratingSong] = useState<boolean>(false);
  const [isModifyingSection, setIsModifyingSection] = useState<boolean>(false);
  const [generationProgress, setGenerationProgress] = useState<GenerationStepStatus | null>(null);

  // Initialize Data
  useEffect(() => {
    const loadedProjects = StorageService.getProjects();
    const loadedSongs = StorageService.getSongs();
    const loadedRefs = StorageService.getReferences();
    const loadedSettings = StorageService.getSettings();
    const activeId = StorageService.getActiveProjectId();

    setProjects(loadedProjects);
    setSongs(loadedSongs);
    setReferences(loadedRefs);
    setSettings(loadedSettings);
    setActiveProjectId(activeId);

    // If there's an existing song in this project, load the most recent one
    const projectSongs = loadedSongs.filter((s) => s.projectId === activeId);
    if (projectSongs.length > 0) {
      setActiveSong(projectSongs[0]);
      setStory(projectSongs[0].storySnapshot || '');
    }

    // Check Gemini API health
    GeminiService.testConnection().then((res) => {
      setApiConnected(res.connected);
    });
  }, []);

  // Apply Theme & Font dynamically
  useEffect(() => {
    applyAppTheme(settings.themeId || settings.theme, settings.fontFamily || settings.uiFont);
  }, [settings.themeId, settings.theme, settings.fontFamily, settings.uiFont]);


  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0] || null;

  // Handle Control State changes
  const handleControlStateChange = (id: string, state: ControlState, value?: string | null) => {
    setControls((prev) => {
      const current = prev[id] || { state: 'AI_AUTO', value: null, isLocked: false };
      return {
        ...prev,
        [id]: {
          ...current,
          state,
          value: value !== undefined ? value : current.value,
        },
      };
    });
  };

  const handleToggleControlLock = (id: string) => {
    setControls((prev) => {
      const current = prev[id] || { state: 'AI_AUTO', value: null, isLocked: false };
      return {
        ...prev,
        [id]: {
          ...current,
          isLocked: !current.isLocked,
        },
      };
    });
  };

  // AI Actions
  const handleExpandStory = async () => {
    if (!story.trim()) return;
    setIsExpandingStory(true);
    try {
      const analysis = await AiPipelineService.expandStory(story);
      setStoryAnalysis(analysis);
    } catch (e: any) {
      console.error('Error expanding story:', e);
    } finally {
      setIsExpandingStory(false);
    }
  };

  const handleConfigureAllByAi = async () => {
    setIsResolvingControls(true);
    try {
      const resolved = await AiPipelineService.resolveAllControls(
        story,
        controls,
        activeProject || undefined,
        settings
      );
      setControls(resolved);
    } catch (e: any) {
      console.error('Error resolving controls:', e);
    } finally {
      setIsResolvingControls(false);
    }
  };

  const handleGenerateFullSong = async () => {
    let currentStory = story.trim();
    if (!currentStory) {
      currentStory =
        'Một người trở về góc quán cà phê cũ trên phố Hoàng Diệu vào một buổi chiều thu mưa bay. Nhìn thấy chiếc ghế trống đối diện, nhớ lại lần đầu hẹn hò năm 18 tuổi. Giờ cả hai đã có cuộc sống riêng, chỉ còn lại sự biết ơn và bâng khuâng cho một thời thanh xuân đẹp.';
      setStory(currentStory);
    }

    setIsGeneratingSong(true);
    try {
      const newSong = await AiPipelineService.runFullSongGeneration(
        activeProjectId,
        currentStory,
        controls,
        songLength,
        (progress) => {
          setGenerationProgress(progress);
        }
      );

      setActiveSong(newSong);
      setSongs((prev) => [newSong, ...prev.filter((s) => s.id !== newSong.id)]);
      // Refresh project count
      setProjects(StorageService.getProjects());

      // Smoothly scroll to song output view
      setTimeout(() => {
        const songElem = document.getElementById('song-output-view');
        if (songElem) {
          songElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 350);
    } catch (e: any) {
      console.error('Error in song generation pipeline:', e);
      alert(`Lỗi sáng tác bài hát: ${e.message || 'Vui lòng kiểm tra lại kết nối AI'}`);
    } finally {
      setIsGeneratingSong(false);
      setGenerationProgress(null);
    }
  };

  const handleModifySection = async (sectionId: string, modifier: string) => {
    if (!activeSong) return;
    setIsModifyingSection(true);
    try {
      const updated = await AiPipelineService.modifySection(activeSong, sectionId, modifier);
      setActiveSong(updated);
      setSongs((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
    } catch (e: any) {
      console.error('Error modifying section:', e);
      alert(`Lỗi chỉnh sửa đoạn: ${e.message}`);
    } finally {
      setIsModifyingSection(false);
    }
  };

  const handleSelectSongIdea = async (idea: SongIdea) => {
    // 1. Set the story content to the 15-line detailed description
    setStory(idea.detailedDescription);

    // 2. Pre-fill and lock creative controls based on the idea
    setControls((prev) => ({
      ...prev,
      genre: { state: 'USER_SELECTED', value: idea.genre, isLocked: true },
      tempo: { state: 'USER_SELECTED', value: idea.tempo, isLocked: true },
      vocalStyle: { state: 'USER_SELECTED', value: idea.vocal, isLocked: true },
      leadInstruments: { state: 'USER_SELECTED', value: idea.instruments, isLocked: true },
      primaryEmotion: { state: 'USER_SELECTED', value: idea.mood, isLocked: true },
    }));

    // 3. Switch to 'create' page
    setCurrentPage('create');

    // 4. Automatically trigger Story Expansion
    setTimeout(async () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const storyElem = document.getElementById('story-input-panel');
      if (storyElem) {
        storyElem.scrollIntoView({ behavior: 'smooth' });
      }

      setIsExpandingStory(true);
      try {
        const analysis = await AiPipelineService.expandStory(idea.detailedDescription);
        setStoryAnalysis(analysis);
      } catch (err) {
        console.error('Auto expanding story for idea error:', err);
      } finally {
        setIsExpandingStory(false);
      }
    }, 250);
  };

  return (
    <div
      id="app-root"
      className="min-h-screen flex flex-col transition-colors duration-200"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text)',
      }}
    >
      {/* Top Header */}
      <Header
        activeProject={activeProject}
        projects={projects}
        onSelectProject={(id) => {
          setActiveProjectId(id);
          StorageService.setActiveProjectId(id);
          const projectSongs = songs.filter((s) => s.projectId === id);
          if (projectSongs.length > 0) {
            setActiveSong(projectSongs[0]);
          } else {
            setActiveSong(null);
          }
        }}
        onNewProject={() => setCurrentPage('projects')}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        settings={settings}
        apiConnected={apiConnected}
      />

      {/* Main Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigation */}
        <Sidebar
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          songsCount={songs.length}
          referencesCount={references.length}
        />

        {/* Page Content Workspace */}
        <main id="main-content-area" className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
          {/* 1. DASHBOARD */}
          {currentPage === 'dashboard' && (
            <DashboardView
              activeProject={activeProject}
              projects={projects}
              songs={songs}
              references={references}
              onNavigate={setCurrentPage}
              onSelectSong={(s) => {
                setActiveSong(s);
                setActiveProjectId(s.projectId);
                setStory(s.storySnapshot || '');
                setControls(s.controls);
              }}
              onSelectSongIdea={handleSelectSongIdea}
            />
          )}

          {/* 1.5 SONG IDEAS (200 SAMPLES) */}
          {currentPage === 'song-ideas' && (
            <div className="max-w-6xl mx-auto space-y-6">
              <SongIdeasExplorer onSelectAndStart={handleSelectSongIdea} />
            </div>
          )}

          {/* 2. CREATE / SONGWRITING STUDIO (21 CONTROLS) */}
          {currentPage === 'create' && (
            <div className="space-y-6 max-w-6xl mx-auto">
              {/* Story Input */}
              <StoryInputPanel
                story={story}
                onChangeStory={setStory}
                songLength={songLength}
                onChangeSongLength={setSongLength}
                onExpandStory={handleExpandStory}
                isExpanding={isExpandingStory}
                storyAnalysis={storyAnalysis}
              />

              {/* Mode Switch Bar: 21 Controls vs Basic Mode */}
              <div
                className="p-3 rounded-2xl border flex flex-wrap items-center justify-between gap-2"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setStudioMode('advanced')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      studioMode === 'advanced' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: studioMode === 'advanced' ? 'var(--color-accent)' : 'transparent',
                      color: studioMode === 'advanced' ? 'var(--color-accent-contrast, #ffffff)' : 'var(--color-text)',
                    }}
                  >
                    21 Controls Studio (Chuyên Sâu)
                  </button>

                  <button
                    type="button"
                    onClick={() => setStudioMode('basic')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      studioMode === 'basic' ? 'shadow-sm' : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: studioMode === 'basic' ? 'var(--color-accent)' : 'transparent',
                      color: studioMode === 'basic' ? 'var(--color-accent-contrast, #ffffff)' : 'var(--color-text)',
                    }}
                  >
                    Basic Studio (Rút Gọn 6 Mục)
                  </button>
                </div>

                <div className="text-xs" style={{ color: 'var(--color-muted-text)' }}>
                  Dự án: <span className="font-bold text-amber-400">{activeProject?.name}</span>
                </div>
              </div>

              {/* Controls Panel */}
              {studioMode === 'advanced' ? (
                <CreativeControlsPanel
                  controls={controls}
                  onChangeControlState={handleControlStateChange}
                  onToggleLock={handleToggleControlLock}
                  onConfigureAllByAi={handleConfigureAllByAi}
                  isResolving={isResolvingControls}
                />
              ) : (
                <BasicModePanel
                  controls={controls}
                  onChangeControlState={handleControlStateChange}
                  onConfigureAllByAi={handleConfigureAllByAi}
                  isResolving={isResolvingControls}
                  onSwitchToAdvanced={() => setStudioMode('advanced')}
                />
              )}

              {/* MASTER GENERATE BUTTON */}
              <div
                className="p-6 rounded-2xl border text-center space-y-3 shadow-lg"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="max-w-xl mx-auto space-y-1">
                  <h3 className="text-lg font-extrabold tracking-tight" style={{ color: 'var(--color-text)' }}>
                    BỘ NÃO SÁNG TÁC ĐÃ SẴN SÀNG
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--color-muted-text)' }}>
                    Nhấn nút bên dưới để AI vận hành chu trình 8 chặng: Quét Story, Tự động hóa các mục AI_AUTO, Lập Blueprint, Viết ca từ thi vị và Tạo cẩm nang phối khí ~850 từ.
                  </p>
                </div>

                <button
                  id="btn-master-generate-song"
                  type="button"
                  onClick={handleGenerateFullSong}
                  disabled={isGeneratingSong}
                  className="px-8 py-4 rounded-2xl text-sm md:text-base font-extrabold shadow-2xl inline-flex items-center space-x-3 transition-all transform hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'var(--color-accent-contrast, #ffffff)',
                  }}
                >
                  <Wand2 className={`w-5 h-5 ${isGeneratingSong ? 'animate-spin' : ''}`} />
                  <span>
                    {isGeneratingSong ? 'Đang Vận Hành 8 Chặng Sáng Tác...' : 'SÁNG TÁC BÀI HÁT HOÀN CHỈNH'}
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </button>

                {!story.trim() && (
                  <p className="text-xs font-medium text-amber-400/90 pt-1">
                    💡 Bạn có thể nhấn trực tiếp để AI tự động áp dụng cốt truyện mẫu và tạo bài hát ngay!
                  </p>
                )}
              </div>

              {/* SONG OUTPUT VIEW */}
              {activeSong && (
                <SongOutputView
                  song={activeSong}
                  onUpdateSong={(updated) => {
                    setActiveSong(updated);
                    StorageService.saveSong(updated);
                    setSongs((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
                  }}
                  onModifySection={handleModifySection}
                  isModifyingSection={isModifyingSection}
                />
              )}
            </div>
          )}

          {/* 3. PROJECTS */}
          {currentPage === 'projects' && (
            <ProjectsView
              projects={projects}
              activeProject={activeProject}
              onSelectProject={(id) => {
                setActiveProjectId(id);
                StorageService.setActiveProjectId(id);
                const pSongs = songs.filter((s) => s.projectId === id);
                if (pSongs.length > 0) setActiveSong(pSongs[0]);
              }}
              onCreateProject={(projData) => {
                const newP: Project = {
                  id: `proj_${Date.now()}`,
                  name: projData.name || 'Dự án mới',
                  description: projData.description || '',
                  storyConcept: projData.storyConcept || '',
                  songsCount: 0,
                  styleDNA: {
                    id: `dna_${Date.now()}`,
                    sourceId: `proj_${Date.now()}`,
                    sourceType: 'project',
                    genres: ['Pop Ballad'],
                    emotionalTone: ['Nostalgic', 'Melancholic'],
                    instrumentation: ['Piano', 'Strings', 'Guitar'],
                    lyricCharacteristics: ['Sensory', 'Poetic', 'Show don\'t tell'],
                    structurePreference: 'Intro -> Verse -> Pre -> Chorus -> Bridge -> Final Chorus',
                  },
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString(),
                };
                const updated = [newP, ...projects];
                setProjects(updated);
                StorageService.saveProjects(updated);
                setActiveProjectId(newP.id);
                StorageService.setActiveProjectId(newP.id);
              }}
              onDeleteProject={(id) => {
                const updated = projects.filter((p) => p.id !== id);
                setProjects(updated);
                StorageService.saveProjects(updated);
                if (activeProjectId === id && updated[0]) {
                  setActiveProjectId(updated[0].id);
                  StorageService.setActiveProjectId(updated[0].id);
                }
              }}
              onUpdateProject={(p) => {
                const updated = projects.map((item) => (item.id === p.id ? p : item));
                setProjects(updated);
                StorageService.saveProjects(updated);
              }}
            />
          )}

          {/* 4. SONGS LIST */}
          {currentPage === 'songs' && (
            <SongsListView
              songs={songs}
              projects={projects}
              onSelectSong={(s) => {
                setActiveSong(s);
                setActiveProjectId(s.projectId);
                setStory(s.storySnapshot || '');
                setControls(s.controls);
              }}
              onDeleteSong={(id) => {
                StorageService.deleteSong(id);
                setSongs(StorageService.getSongs());
                if (activeSong?.id === id) setActiveSong(null);
              }}
              onNavigate={setCurrentPage}
            />
          )}

          {/* 5. REFERENCE LIBRARY */}
          {currentPage === 'references' && (
            <ReferenceLibraryView
              references={references}
              projects={projects}
              activeProject={activeProject}
              onAddReference={(ref) => {
                const updated = [ref, ...references];
                setReferences(updated);
                StorageService.saveReferences(updated);
              }}
              onDeleteReference={(id) => {
                const updated = references.filter((r) => r.id !== id);
                setReferences(updated);
                StorageService.saveReferences(updated);
              }}
              onUpdateReference={(ref) => {
                const updated = references.map((r) => (r.id === ref.id ? ref : r));
                setReferences(updated);
                StorageService.saveReferences(updated);
              }}
            />
          )}

          {/* 6. STYLE DNA */}
          {currentPage === 'style-dna' && (
            <StyleDnaView activeProject={activeProject} references={references} />
          )}

          {/* 7. HELP CENTER */}
          {currentPage === 'help' && <HelpCenterView />}

          {/* 8. SETTINGS */}
          {currentPage === 'settings' && (
            <SettingsView
              settings={settings}
              onUpdateSettings={(newVals) => {
                const updated = { ...settings, ...newVals };
                setSettings(updated);
                StorageService.saveSettings(updated);
                if (newVals.themeId || newVals.theme || newVals.fontFamily || newVals.uiFont) {
                  applyAppTheme(
                    newVals.themeId || newVals.theme || updated.themeId || updated.theme,
                    newVals.fontFamily || newVals.uiFont || updated.fontFamily || updated.uiFont
                  );
                }
              }}
              onResetDefaults={() => {
                const def = {
                  customApiKey: '',
                  geminiModel: 'gemini-3.8-flash',
                  themeId: 'midnight-studio',
                  theme: 'midnight-studio',
                  fontFamily: 'Inter',
                  uiFont: 'Inter',
                  temperature: 0.7,
                  poeticDensity: 4,
                  naturalPhrasing: 4,
                  storyFidelity: 5,
                  guideDepth: 5,
                };
                setSettings(def);
                StorageService.saveSettings(def);
                applyAppTheme('midnight-studio', 'Inter');
              }}
            />
          )}
        </main>
      </div>

      {/* AI Context Scan & Generation Progress Stepper Modal */}
      <AiScanVisualizer
        isOpen={isGeneratingSong}
        progress={generationProgress}
        controls={controls}
      />

      {/* Mobile Bottom Navigation Bar */}
      <nav
        id="mobile-bottom-nav"
        className="md:hidden h-16 border-t flex items-center justify-around px-2 sticky bottom-0 z-40 backdrop-blur-lg"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
      >
        {[
          { id: 'dashboard', label: 'Trang chủ', icon: LayoutDashboard },
          { id: 'create', label: 'Tạo bài hát', icon: Wand2 },
          { id: 'songs', label: 'Bài hát', icon: Music },
          { id: 'help', label: 'Hướng dẫn', icon: BookOpen },
          { id: 'settings', label: 'Cài đặt', icon: SettingsIcon },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 text-[10px] font-semibold transition-all ${
                isActive ? 'text-amber-400' : 'opacity-60'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
