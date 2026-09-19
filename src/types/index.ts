/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ControlState = 'USER_SELECTED' | 'AI_AUTO' | 'NONE';

export interface CompatibilityMetadata {
  compatibleWith: string[];
  neutralWith?: string[];
  conflictsWith?: string[];
  preferredRange?: string;
  dependencies?: string[];
  notes?: string;
}

export interface ControlOption {
  id: string;
  label: string;
  category?: string;
  description: string;
  compatibility?: CompatibilityMetadata;
}

export interface CreativeControlConfig {
  id: string;
  name: string;
  nameVi: string;
  description: string;
  category: 'Musical' | 'Vocal & Sound' | 'Lyrical & Poetry' | 'Structure & Dynamic' | 'Context & Style';
  options: ControlOption[];
}

export interface ControlValueState {
  state: ControlState;
  value: string | null;
  isLocked: boolean;
  resolvedValue?: string | null;
  resolutionReason?: string;
}

export type ControlsRecord = Record<string, ControlValueState>;

export interface ReferenceArtistSongwriter {
  artist: string;
  songwriter: string;
  song: string;
  album: string;
  era: string;
  notes: string;
}

export interface StoryAnalysis {
  topic: string;
  characters: string;
  relationship: string;
  timeContext: string;
  spaceContext: string;
  keyEvents: string;
  conflict: string;
  primaryEmotion: string;
  secondaryEmotion: string;
  coreMessage: string;
  emotionalShiftPoint: string;
  desiredEnding: string;
  expandedStory?: string;
}

export interface StyleDNA {
  id: string;
  sourceId?: string;
  sourceType?: 'reference' | 'song' | 'project';
  genres?: string[];
  emotionalTone?: string[];
  instrumentation?: string[];
  lyricCharacteristics?: string[];
  structurePreference?: string;
  narrativeStyle?: string;
  imageryDensity?: number; // 1-10
  metaphorDensity?: number; // 1-10
  vocabularyProfile?: string;
  sentenceRhythm?: string;
  hookCharacteristics?: string;
  chorusCharacteristics?: string;
  verseCharacteristics?: string;
  bridgeCharacteristics?: string;
  emotionalArc?: string;
  repetitionStyle?: string;
  languageMixing?: string;
  formality?: string;
  perspective?: string;
  lyricalDirectness?: number; // 1-10
  cinematicLevel?: number; // 1-10
  notes?: string;
}

export interface SectionBlueprint {
  sectionType: string; // e.g. "INTRO", "VERSE 1", "PRE-CHORUS", "CHORUS", "VERSE 2", "BRIDGE", "FINAL CHORUS", "OUTRO"
  label: string; // English label in brackets e.g. "[VERSE 1 — conversational and restrained]"
  narrativePurpose: string;
  emotionalPurpose: string;
  intent: string;
  meaning: string;
  imagery: string;
  vocalDirection: string;
  dynamicLevel: string;
  hookFunction?: string;
}

export interface SongBlueprint {
  title: string;
  overview: string;
  overallArc: string;
  sections: SectionBlueprint[];
}

export interface MeaningSection {
  sectionType: string;
  intent: string;
  longMeaning: string;
  imagerySubtext: string;
  emotionalSubtext: string;
  singableCore: string;
}

export interface MeaningLayer {
  sections: MeaningSection[];
}

export interface SongSection {
  id: string;
  type: string;
  label: string; // e.g. "[VERSE 1 — conversational and restrained]"
  lyrics: string;
  intent: string;
  meaning: string;
  imagery: string;
  vocalDirection: string;
  isLocked: boolean;
}

export interface QualityCheckResult {
  passed: boolean;
  score: number; // 0-100
  items: {
    rule: string;
    status: 'PASS' | 'WARNING' | 'REVISE';
    notes: string;
  }[];
  revisionSuggestions?: string[];
}

export interface SongwritingGuide {
  songConcept: string;
  emotionalDirection: string;
  vocalDirection: string;
  tempo: string;
  verse1Direction: string;
  preChorusDirection: string;
  chorusDirection: string;
  verse2Direction: string;
  bridgeDirection: string;
  finalChorus: string;
  instrumentation: string;
  arrangement: string;
  dynamics: string;
  vocalExpression: string;
  adLibs: string;
  harmony: string;
  backgroundVocal: string;
  instrumentEntryExit: string;
  mixingDirection: string;
  outro: string;
  overallPerformanceDirection: string;
  fullGuideText: string;
}

export interface SongVersion {
  id: string;
  songId: string;
  versionNumber: number;
  title: string;
  lyrics: string;
  sections: SongSection[];
  guide?: SongwritingGuide;
  blueprint?: SongBlueprint;
  meaningLayer?: MeaningLayer;
  controlsSnapshot: ControlsRecord;
  timestamp: string;
  changeNote?: string;
}

export interface Song {
  id: string;
  projectId: string;
  title: string;
  storySnapshot: string;
  blueprint: SongBlueprint;
  meaningLayer: MeaningLayer;
  lyrics: string;
  sections: SongSection[];
  guide: SongwritingGuide;
  controls: ControlsRecord;
  referenceArtist?: ReferenceArtistSongwriter;
  songLength: string;
  styleDNASnapshot?: StyleDNA;
  qualityCheck?: QualityCheckResult;
  versions: SongVersion[];
  currentVersionNumber: number;
  isApproved?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ReferenceSong {
  id: string;
  projectId?: string;
  title: string;
  artist: string;
  genre: string;
  tempo?: string;
  mood?: string;
  year?: string;
  language?: string;
  lyrics?: string;
  audioDescription?: string;
  notes?: string;
  styleDNA?: StyleDNA;
  createdAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  story?: string;
  storyConcept?: string;
  genre?: string;
  mood?: string;
  songsCount?: number;
  referencesCount?: number;
  styleDNA?: StyleDNA;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export type ThemeId =
  | 'midnight-studio'
  | 'dark-music'
  | 'light-studio'
  | 'minimal-white'
  | 'warm-vintage'
  | 'neon-night'
  | 'ocean'
  | 'forest'
  | 'sunset'
  | 'paper-writer'
  | string;

export type FontOption =
  | 'Inter'
  | 'Roboto'
  | 'Noto Sans'
  | 'Noto Sans Vietnamese'
  | 'Poppins'
  | 'Montserrat'
  | 'Open Sans'
  | 'Lato'
  | 'Merriweather'
  | 'Playfair Display'
  | string;

export interface UserSettings {
  id?: string;
  theme?: ThemeId;
  themeId?: ThemeId;
  uiFont?: FontOption;
  fontFamily?: FontOption;
  lyricFont?: FontOption;
  editorFont?: FontOption;
  aiCreativeFreedom?: 'Low' | 'Medium' | 'High';
  clicheProtection?: 'Off' | 'Balanced' | 'Strict';
  imageryLevel?: 'Direct' | 'Balanced' | 'Poetic' | 'Cinematic';
  revisionIntensity?: 'Light' | 'Balanced' | 'Deep';
  contextMemory?: 'Current Song' | 'Current Project' | 'Project + Style DNA';
  geminiModel?: string;
  customApiKey?: string;
  mode?: 'basic' | 'advanced';
  temperature?: number;
  poeticDensity?: number;
  naturalPhrasing?: number;
  storyFidelity?: number;
  guideDepth?: number;
}


export interface GenerationStepStatus {
  step: number;
  totalSteps: number;
  name: string;
  status: 'waiting' | 'in_progress' | 'completed' | 'error';
  detail?: string;
}

export type AgeCategoryId = '3-5' | '6-15' | '15-25' | '25-35' | '35-45' | '45-60' | '60+';

export interface SongIdea {
  id: string;
  title: string;
  ageGroup: string;
  categoryId: AgeCategoryId;
  categoryLabel: string;
  genre: string;
  tempo: string;
  mood: string;
  vocal: string;
  instruments: string;
  shortSummary: string;
  detailedDescription: string; // 15-line comprehensive musical & story specification
  tags: string[];
}
