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
    accentContrast?: string;
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
      accentContrast: '#000000',
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
      accentContrast: '#ffffff',
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
      accentContrast: '#ffffff',
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
      accentContrast: '#ffffff',
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
      accentContrast: '#ffffff',
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
      accentContrast: '#000000',
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
      surface: '#132b47',
      secondarySurface: '#1d3b5e',
      text: '#f1f6f9',
      mutedText: '#9ba4b5',
      accent: '#00adb5',
      accentHover: '#008388',
      accentContrast: '#000000',
      border: '#2c4a6f',
      cardBg: '#132b47',
      tagBg: '#1d3b5e',
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
      accentContrast: '#000000',
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
      accentContrast: '#ffffff',
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
      accentContrast: '#ffffff',
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

/**
 * Apply theme variables, color-scheme, dark/light classes, and font to DOM
 */
export function applyAppTheme(themeIdOrName?: string, fontName?: string): ThemeConfig {
  const theme = THEMES.find((t) => t.id === themeIdOrName || t.name.toLowerCase() === themeIdOrName?.toLowerCase()) || THEMES[0];
  const root = document.documentElement;

  // Set HTML dark/light class and data-theme
  root.classList.remove('dark', 'light');
  root.classList.add(theme.category);
  root.setAttribute('data-theme', theme.id);
  root.style.colorScheme = theme.category;

  const c = theme.colors;
  const accentContrast = c.accentContrast || (theme.category === 'light' ? '#ffffff' : '#000000');

  // Define both kebab-case and camelCase variables so any component works
  const colorMap: Record<string, string> = {
    '--color-background': c.background,
    '--color-surface': c.surface,
    '--color-secondary-surface': c.secondarySurface,
    '--color-secondarySurface': c.secondarySurface,
    '--color-text': c.text,
    '--color-muted-text': c.mutedText,
    '--color-mutedText': c.mutedText,
    '--color-accent': c.accent,
    '--color-accent-hover': c.accentHover,
    '--color-accentHover': c.accentHover,
    '--color-accent-contrast': accentContrast,
    '--color-accentContrast': accentContrast,
    '--color-border': c.border,
    '--color-card-bg': c.cardBg,
    '--color-cardBg': c.cardBg,
    '--color-tag-bg': c.tagBg,
    '--color-tagBg': c.tagBg,
    '--color-tag-text': c.tagText,
    '--color-tagText': c.tagText,
  };

  Object.entries(colorMap).forEach(([prop, val]) => {
    root.style.setProperty(prop, val);
  });

  // Apply to body and root div
  document.body.style.backgroundColor = c.background;
  document.body.style.color = c.text;

  const appRoot = document.getElementById('app-root');
  if (appRoot) {
    appRoot.style.backgroundColor = c.background;
    appRoot.style.color = c.text;
  }

  // Font applying
  const activeFont = fontName || 'Inter';
  const foundFont = AVAILABLE_FONTS.find((f) => f.id === activeFont || f.name.includes(activeFont));
  const fontStyle = foundFont ? foundFont.style : `'${activeFont}', sans-serif`;
  root.style.setProperty('--font-primary', fontStyle);
  document.body.style.fontFamily = fontStyle;
  if (appRoot) {
    appRoot.style.fontFamily = fontStyle;
  }

  return theme;
}


