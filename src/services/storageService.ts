/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  Project,
  Song,
  ReferenceSong,
  UserSettings,
  SongVersion,
  ControlsRecord,
} from '../types';
import { DEFAULT_CONTROLS_RECORD } from '../data/controlsData';

const STORAGE_KEYS = {
  PROJECTS: 'ais_song_projects_v1',
  SONGS: 'ais_song_songs_v1',
  REFERENCES: 'ais_song_references_v1',
  SETTINGS: 'ais_song_settings_v1',
  ACTIVE_PROJECT_ID: 'ais_song_active_project_id_v1',
  DRAFT_STORY: 'ais_song_draft_story_v1',
  DRAFT_CONTROLS: 'ais_song_draft_controls_v1',
  DRAFT_SONG_LENGTH: 'ais_song_draft_song_length_v1',
  DRAFT_REF_ARTIST: 'ais_song_draft_ref_artist_v1',
};

const DEFAULT_SETTINGS: UserSettings = {
  id: 'default',
  theme: 'midnight-studio',
  uiFont: 'Inter',
  lyricFont: 'Merriweather',
  editorFont: 'Roboto',
  aiCreativeFreedom: 'Medium',
  clicheProtection: 'Strict',
  imageryLevel: 'Poetic',
  revisionIntensity: 'Balanced',
  contextMemory: 'Project + Style DNA',
  geminiModel: 'gemini-3.8-flash',
  mode: 'advanced',
};

const INITIAL_PROJECT: Project = {
  id: 'proj_hanoi_autumn',
  name: 'EP Ký Ức Phố Cũ',
  description: 'Dự án các ca khúc Pop Ballad & Indie Acoustic mang âm hưởng hoài niệm, phố mùa thu và những ký ức thanh xuân.',
  story: 'Một người trở về con phố cũ sau nhiều năm xa cách, đứng trước quán cà phê quen thuộc và nhận ra mọi thứ vẫn như xưa, chỉ có người cùng đi năm ấy không còn bên cạnh.',
  genre: 'Pop Ballad',
  mood: 'Nostalgic',
  songsCount: 1,
  referencesCount: 2,
  styleDNA: {
    id: 'dna_proj_1',
    sourceType: 'project',
    narrativeStyle: 'Tự sự ngôi thứ nhất, đan xen hồi tưởng và hiện tại',
    imageryDensity: 7,
    metaphorDensity: 6,
    vocabularyProfile: 'Giàu cảm giác hoài niệm, hình ảnh thời gian, mùa thu, phố cổ',
    sentenceRhythm: 'Nhịp thở vừa phải, ngắt nghỉ giàu cảm xúc',
    hookCharacteristics: 'Gợi nhớ, lặp lại câu hỏi tự vấn',
    chorusCharacteristics: 'Bùng nổ cảm xúc hoài niệm, bè cao',
    verseCharacteristics: 'Chậm rãi, đặc tả chi tiết cảnh vật',
    bridgeCharacteristics: 'Lắng đọng triết lý về sự chấp nhận',
    emotionalArc: 'Mở đầu bâng khuâng -> Căng thẳng hồi ức -> Giải tỏa và chấp nhận',
    repetitionStyle: 'Điệp từ ngữ mang tính biểu tượng',
    languageMixing: 'Thuần Việt giàu thi vị',
    formality: 'Thân mật, tự sự',
    perspective: 'Ngôi thứ nhất (Anh / Em)',
    lyricalDirectness: 6,
    cinematicLevel: 8,
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const INITIAL_REFERENCES: ReferenceSong[] = [
  {
    id: 'ref_1',
    projectId: 'proj_hanoi_autumn',
    title: 'Hà Nội Mùa Vắng Những Cơn Mưa',
    artist: 'Trương Quý Hải / Cẩm Vân',
    genre: 'Vietnamese Trữ Tình',
    mood: 'Nostalgic',
    year: '1993',
    language: 'Vietnamese',
    notes: 'Lời hát giàu hình tượng mùa thu, hoa sữa, ngói cổ, cách ngắt nhịp chậm rãi sâu lắng.',
    styleDNA: {
      id: 'dna_ref_1',
      narrativeStyle: 'Tự sự hoài niệm',
      imageryDensity: 8,
      metaphorDensity: 6,
      vocabularyProfile: 'Mùa thu, phố, mưa, cây bàng, hoa sữa',
      sentenceRhythm: 'Chậm, ngân vang',
      hookCharacteristics: 'Điệp từ gợi nhớ',
      chorusCharacteristics: 'Trải dài, nâng cao độ',
      verseCharacteristics: 'Tả cảnh ngụ tình',
      bridgeCharacteristics: 'Lắng đọng',
      emotionalArc: 'Man mác -> Nỗi nhớ da diết',
      repetitionStyle: 'Điệp từ mở đầu',
      languageMixing: 'Thuần Việt',
      formality: 'Trang trọng, thi ca',
      perspective: 'Ngôi thứ nhất',
      lyricalDirectness: 5,
      cinematicLevel: 9,
    },
    createdAt: new Date().toISOString(),
  },
  {
    id: 'ref_2',
    projectId: 'proj_hanoi_autumn',
    title: 'Bước Qua Mùa Cô Đơn',
    artist: 'Vũ',
    genre: 'Indie Pop Ballad',
    mood: 'Melancholic',
    year: '2020',
    language: 'Vietnamese',
    notes: 'Câu từ mộc mạc, gần gũi nhưng giàu hình ảnh, nhịp thở tự nhiên, hook ngắn dễ nhớ.',
    styleDNA: {
      id: 'dna_ref_2',
      narrativeStyle: 'Độc thoại nội tâm',
      imageryDensity: 6,
      metaphorDensity: 5,
      vocabularyProfile: 'Đời thường, thanh xuân, bước qua, mùa đông, cô đơn',
      sentenceRhythm: 'Tự nhiên như lời nói',
      hookCharacteristics: 'Giai điệu lặp, ca từ ngắn',
      chorusCharacteristics: 'Dâng trào mộc mạc',
      verseCharacteristics: 'Tự sự thì thầm',
      bridgeCharacteristics: 'Tăng dynamic nhẹ',
      emotionalArc: 'Lặng lẽ -> Chạm đáy cô đơn -> Nhẹ nhõm',
      repetitionStyle: 'Điệp cấu trúc câu',
      languageMixing: 'Hiện đại',
      formality: 'Thân mật',
      perspective: 'Ngôi thứ nhất',
      lyricalDirectness: 7,
      cinematicLevel: 7,
    },
    createdAt: new Date().toISOString(),
  },
];

export const StorageService = {
  getSettings(): UserSettings {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return stored ? { ...DEFAULT_SETTINGS, ...JSON.parse(stored) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  },

  saveSettings(settings: UserSettings): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings', e);
    }
  },

  getProjects(): Project[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (stored) {
        return JSON.parse(stored);
      }
      const initial = [INITIAL_PROJECT];
      this.saveProjects(initial);
      return initial;
    } catch {
      return [INITIAL_PROJECT];
    }
  },

  saveProjects(projects: Project[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error('Failed to save projects', e);
    }
  },

  getActiveProjectId(): string {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ACTIVE_PROJECT_ID);
      return stored || INITIAL_PROJECT.id;
    } catch {
      return INITIAL_PROJECT.id;
    }
  },

  setActiveProjectId(id: string): void {
    try {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_PROJECT_ID, id);
    } catch (e) {
      console.error('Failed to set active project id', e);
    }
  },

  getSongs(): Song[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SONGS);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  },

  saveSongs(songs: Song[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SONGS, JSON.stringify(songs));
    } catch (e) {
      console.error('Failed to save songs', e);
    }
  },

  saveSong(song: Song): void {
    const songs = this.getSongs();
    const index = songs.findIndex((s) => s.id === song.id);
    if (index >= 0) {
      songs[index] = { ...song, updatedAt: new Date().toISOString() };
    } else {
      songs.unshift(song);
    }
    this.saveSongs(songs);

    // Update project song count
    const projects = this.getProjects();
    const project = projects.find((p) => p.id === song.projectId);
    if (project) {
      project.songsCount = songs.filter((s) => s.projectId === project.id).length;
      project.updatedAt = new Date().toISOString();
      this.saveProjects(projects);
    }
  },

  deleteSong(id: string): void {
    const songs = this.getSongs().filter((s) => s.id !== id);
    this.saveSongs(songs);
  },

  getReferences(): ReferenceSong[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.REFERENCES);
      if (stored) return JSON.parse(stored);
      this.saveReferences(INITIAL_REFERENCES);
      return INITIAL_REFERENCES;
    } catch {
      return INITIAL_REFERENCES;
    }
  },

  saveReferences(refs: ReferenceSong[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.REFERENCES, JSON.stringify(refs));
    } catch (e) {
      console.error('Failed to save references', e);
    }
  },

  addReference(ref: ReferenceSong): void {
    const refs = this.getReferences();
    refs.unshift(ref);
    this.saveReferences(refs);

    const projects = this.getProjects();
    const project = projects.find((p) => p.id === ref.projectId);
    if (project) {
      project.referencesCount = refs.filter((r) => r.projectId === project.id).length;
      project.updatedAt = new Date().toISOString();
      this.saveProjects(projects);
    }
  },

  deleteReference(id: string): void {
    const refs = this.getReferences().filter((r) => r.id !== id);
    this.saveReferences(refs);
  },

  getDraftStory(): string {
    try {
      return (
        localStorage.getItem(STORAGE_KEYS.DRAFT_STORY) ||
        'Một người bước đi dưới hàng cây mùa thu Hà Nội, nhìn lá vàng rơi trên con phố Hoàng Diệu. Chợt nhớ lại mùa thu năm mười tám tuổi, lần đầu tiên cùng một người dạo bước nơi đây. Giờ phố vẫn vậy, thu vẫn về, chỉ có hai người đã đi về hai phương trời khác biệt. Cảm giác bâng khuâng, nhẹ nhàng, không oán trách mà biết ơn vì đã từng có một thanh xuân đẹp đẽ.'
      );
    } catch {
      return '';
    }
  },

  saveDraftStory(story: string): void {
    try {
      localStorage.setItem(STORAGE_KEYS.DRAFT_STORY, story);
    } catch (e) {
      console.error('Failed to save draft story', e);
    }
  },

  getDraftControls(): ControlsRecord {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.DRAFT_CONTROLS);
      if (stored) {
        return JSON.parse(stored);
      }
      return DEFAULT_CONTROLS_RECORD;
    } catch {
      return DEFAULT_CONTROLS_RECORD;
    }
  },

  saveDraftControls(controls: ControlsRecord): void {
    try {
      localStorage.setItem(STORAGE_KEYS.DRAFT_CONTROLS, JSON.stringify(controls));
    } catch (e) {
      console.error('Failed to save draft controls', e);
    }
  },

  getDraftSongLength(): string {
    try {
      return localStorage.getItem(STORAGE_KEYS.DRAFT_SONG_LENGTH) || '300–400 words';
    } catch {
      return '300–400 words';
    }
  },

  saveDraftSongLength(len: string): void {
    try {
      localStorage.setItem(STORAGE_KEYS.DRAFT_SONG_LENGTH, len);
    } catch (e) {
      console.error('Failed to save draft song length', e);
    }
  },
};
