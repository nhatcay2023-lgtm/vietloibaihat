/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { ThemeId, FontOption } from '../types';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  nameVi: string;
  category: 'dark' | 'light';
  colors: {
    background: string;
    surface: string;
    secondarySurface: string;
    text: string;
    mutedText: string;
    accent: string;
    accentHover: string;
    border: string;
    cardBg: string;
    tagBg: string;
    tagText: string;
  };
}

export const STUDIO_THEMES: ThemeConfig[] = [
  {
    id: 'midnight-studio',
    name: 'Midnight Studio',
    nameVi: 'Studio Nửa Đêm',
    category: 'dark',
    colors: {
      background: '#0d1117',
      surface: '#161b22',
      secondarySurface: '#21262d',
      text: '#f0f6fc',
      mutedText: '#8b949e',
      accent: '#f59e0b',
      accentHover: '#d97706',
      border: '#30363d',
      cardBg: '#161b22',
      tagBg: '#21262d',
      tagText: '#f59e0b',
    },
  },
  {
    id: 'dark-music',
    name: 'Dark Music',
    nameVi: 'Hộp Đêm Nhạc Số',
    category: 'dark',
    colors: {
      background: '#121214',
      surface: '#18181b',
      secondarySurface: '#27272a',
      text: '#fafafa',
      mutedText: '#a1a1aa',
      accent: '#ec4899',
      accentHover: '#db2777',
      border: '#3f3f46',
      cardBg: '#18181b',
      tagBg: '#27272a',
      tagText: '#f472b6',
    },
  },
  {
    id: 'light-studio',
    name: 'Light Studio',
    nameVi: 'Studio Ánh Sáng',
    category: 'light',
    colors: {
      background: '#f8fafc',
      surface: '#ffffff',
      secondarySurface: '#f1f5f9',
      text: '#0f172a',
      mutedText: '#64748b',
      accent: '#2563eb',
      accentHover: '#1d4ed8',
      border: '#e2e8f0',
      cardBg: '#ffffff',
      tagBg: '#eff6ff',
      tagText: '#1d4ed8',
    },
  },
  {
    id: 'minimal-white',
    name: 'Minimal White',
    nameVi: 'Trắng Tối Giản',
    category: 'light',
    colors: {
      background: '#fafafa',
      surface: '#ffffff',
      secondarySurface: '#f4f4f5',
      text: '#18181b',
      mutedText: '#71717a',
      accent: '#18181b',
      accentHover: '#27272a',
      border: '#e4e4e7',
      cardBg: '#ffffff',
      tagBg: '#f4f4f5',
      tagText: '#18181b',
    },
  },
  {
    id: 'warm-vintage',
    name: 'Warm Vintage',
    nameVi: 'Cổ Điển Ấm Áp',
    category: 'dark',
    colors: {
      background: '#1c1917',
      surface: '#292524',
      secondarySurface: '#44403c',
      text: '#fafaf9',
      mutedText: '#a8a29e',
      accent: '#ea580c',
      accentHover: '#c2410c',
      border: '#57534e',
      cardBg: '#292524',
      tagBg: '#44403c',
      tagText: '#fb923c',
    },
  },
  {
    id: 'neon-night',
    name: 'Neon Night',
    nameVi: 'Đêm Neon Synth',
    category: 'dark',
    colors: {
      background: '#0a0a14',
      surface: '#121124',
      secondarySurface: '#1e1c3a',
      text: '#f8fafc',
      mutedText: '#94a3b8',
      accent: '#06b6d4',
      accentHover: '#0891b2',
      border: '#2e2b58',
      cardBg: '#121124',
      tagBg: '#1e1c3a',
      tagText: '#22d3ee',
    },
  },
  {
    id: 'ocean',
    name: 'Ocean',
    nameVi: 'Đại Dương Xanh',
    category: 'dark',
    colors: {
      background: '#0b192c',
      surface: '#1e3e62',
      secondarySurface: '#00000033',
      text: '#f1f6f9',
      mutedText: '#9ba4b5',
      accent: '#00adb5',
      accentHover: '#008388',
      border: '#395b64',
      cardBg: '#1e3e62',
      tagBg: '#142c47',
      tagText: '#00adb5',
    },
  },
  {
    id: 'forest',
    name: 'Forest',
    nameVi: 'Rừng Xanh Bình Yên',
    category: 'dark',
    colors: {
      background: '#0f1715',
      surface: '#182421',
      secondarySurface: '#243531',
      text: '#edf5f3',
      mutedText: '#8fa8a1',
      accent: '#10b981',
      accentHover: '#059669',
      border: '#2e433e',
      cardBg: '#182421',
      tagBg: '#243531',
      tagText: '#34d399',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    nameVi: 'Hoàng Hôn Lãng Mạn',
    category: 'dark',
    colors: {
      background: '#191118',
      surface: '#271725',
      secondarySurface: '#3b2238',
      text: '#fdf2f8',
      mutedText: '#b08ea7',
      accent: '#f43f5e',
      accentHover: '#e11d48',
      border: '#522f4e',
      cardBg: '#271725',
      tagBg: '#3b2238',
      tagText: '#fb7185',
    },
  },
  {
    id: 'paper-writer',
    name: 'Paper Writer',
    nameVi: 'Trang Giấy Nhạc Sĩ',
    category: 'light',
    colors: {
      background: '#fdfbf7',
      surface: '#f5efe6',
      secondarySurface: '#eae0d2',
      text: '#2c2523',
      mutedText: '#786c65',
      accent: '#8c502b',
      accentHover: '#6e3c1d',
      border: '#dacfc2',
      cardBg: '#f5efe6',
      tagBg: '#eae0d2',
      tagText: '#8c502b',
    },
  },
];

export const THEMES = STUDIO_THEMES.map((t) => ({
  ...t,
  previewBg: t.colors.background,
  previewAccent: t.colors.accent,
  previewText: t.colors.text,
}));

export const AVAILABLE_FONTS: { id: FontOption; name: string; style: string }[] = [
  { id: 'Inter', name: 'Inter (Hiện đại, Sắc nét)', style: "'Inter', sans-serif" },
  { id: 'Roboto', name: 'Roboto (Cân bằng, Chuẩn mực)', style: "'Roboto', sans-serif" },
  { id: 'Noto Sans', name: 'Noto Sans (Rõ ràng, Quốc tế)', style: "'Noto Sans', sans-serif" },
  { id: 'Noto Sans Vietnamese', name: 'Noto Sans VN (Dấu tiếng Việt đẹp)', style: "'Noto Sans', sans-serif" },
  { id: 'Poppins', name: 'Poppins (Trẻ trung, Tròn trịa)', style: "'Poppins', sans-serif" },
  { id: 'Montserrat', name: 'Montserrat (Phóng khoáng, Đẳng cấp)', style: "'Montserrat', sans-serif" },
  { id: 'Open Sans', name: 'Open Sans (Dễ đọc, Thân thiện)', style: "'Open Sans', sans-serif" },
  { id: 'Lato', name: 'Lato (Mềm mại, Tự nhiên)', style: "'Lato', sans-serif" },
  { id: 'Merriweather', name: 'Merriweather (Có chân, Cổ điển)', style: "'Merriweather', serif" },
  { id: 'Playfair Display', name: 'Playfair Display (Nghệ thuật, Thơ ca)', style: "'Playfair Display', serif" },
];

export const FONTS = AVAILABLE_FONTS.map((f) => ({
  ...f,
  family: f.id,
}));


