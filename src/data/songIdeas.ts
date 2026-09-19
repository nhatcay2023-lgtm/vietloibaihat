/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { SongIdea, AgeCategoryId } from '../types';
import { IDEAS_3_TO_5 } from './songIdeas/category3to5';
import { IDEAS_6_TO_15 } from './songIdeas/category6to15';
import { IDEAS_15_TO_25 } from './songIdeas/category15to25';
import { IDEAS_25_TO_35 } from './songIdeas/category25to35';
import { IDEAS_35_TO_45 } from './songIdeas/category35to45';
import { IDEAS_45_TO_60 } from './songIdeas/category45to60';
import { IDEAS_60_PLUS } from './songIdeas/category60plus';

export interface AgeCategoryMeta {
  id: AgeCategoryId;
  label: string;
  ageRange: string;
  description: string;
  icon: string;
  badgeColor: string;
  count: number;
}

export const AGE_CATEGORIES_META: AgeCategoryMeta[] = [
  {
    id: '3-5',
    label: 'Thiếu Nhi (3 - 5 tuổi)',
    ageRange: '3 - 5 tuổi',
    description: 'Thế giới ngộ nghĩnh, mầm non, động vật đáng yêu, gia đình nhỏ và thói quen sinh hoạt sạch sẽ.',
    icon: 'Baby',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    count: IDEAS_3_TO_5.length, // 30
  },
  {
    id: '6-15',
    label: 'Học Đường (6 - 15 tuổi)',
    ageRange: '6 - 15 tuổi',
    description: 'Kỷ niệm mái trường, thầy cô, bạn bè, ve sầu mùa hạ, ước mơ tuổi học trò và chiếc khăn quàng đỏ.',
    icon: 'GraduationCap',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    count: IDEAS_6_TO_15.length, // 30
  },
  {
    id: '15-25',
    label: 'Tình Yêu & Thanh Xuân (15 - 25 tuổi)',
    ageRange: '15 - 25 tuổi',
    description: 'Rung động đầu đời, tình yêu tuổi trẻ, nhiệt huyết giảng đường, chia tay mùa mưa và tìm lại bản ngã.',
    icon: 'Heart',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    count: IDEAS_15_TO_25.length, // 30
  },
  {
    id: '25-35',
    label: 'Gia Đình & Lập Nghiệp (25 - 35 tuổi)',
    ageRange: '25 - 35 tuổi',
    description: 'Khởi nghiệp, gánh nặng mưu sinh, mua tổ ấm đầu tiên, con chào đời và nghĩa vợ chồng son sắt.',
    icon: 'Home',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    count: IDEAS_25_TO_35.length, // 30
  },
  {
    id: '35-45',
    label: 'Trưởng Thành & Chiêm Nghiệm (35 - 45 tuổi)',
    ageRange: '35 - 45 tuổi',
    description: 'Lưng chừng đời bình thản, nhìn con lớn khôn, học cách buông bỏ, tha thứ và yêu sự tĩnh lặng.',
    icon: 'Compass',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    count: IDEAS_35_TO_45.length, // 30
  },
  {
    id: '45-60',
    label: 'Trung Niên & Tri Kỷ (45 - 60 tuổi)',
    ageRange: '45 - 60 tuổi',
    description: 'Chén trà tri kỷ, hoài niệm quê hương, con cái đi xa lập nghiệp, gìn giữ chữ Tâm an nhiên.',
    icon: 'Coffee',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    count: IDEAS_45_TO_60.length, // 25
  },
  {
    id: '60+',
    label: 'Tuổi Già & Xế Chiều (60+ tuổi)',
    ageRange: '60+ tuổi',
    description: 'Nắm tay nhau đến đầu bạc, ngắm hoàng hôn an nhiên, tình già thủy chung và để lại di sản cho đàn cháu.',
    icon: 'SunDim',
    badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    count: IDEAS_60_PLUS.length, // 25
  },
];

export const ALL_SONG_IDEAS: SongIdea[] = [
  ...IDEAS_3_TO_5,
  ...IDEAS_6_TO_15,
  ...IDEAS_15_TO_25,
  ...IDEAS_25_TO_35,
  ...IDEAS_35_TO_45,
  ...IDEAS_45_TO_60,
  ...IDEAS_60_PLUS,
];

export function getIdeasByCategory(catId: AgeCategoryId | 'all'): SongIdea[] {
  if (catId === 'all') return ALL_SONG_IDEAS;
  return ALL_SONG_IDEAS.filter((i) => i.categoryId === catId);
}

export function searchSongIdeas(
  query: string,
  catId: AgeCategoryId | 'all' = 'all'
): SongIdea[] {
  const base = getIdeasByCategory(catId);
  if (!query.trim()) return base;
  const q = query.toLowerCase().trim();
  return base.filter(
    (i) =>
      i.title.toLowerCase().includes(q) ||
      i.shortSummary.toLowerCase().includes(q) ||
      i.genre.toLowerCase().includes(q) ||
      i.mood.toLowerCase().includes(q) ||
      i.tags.some((t) => t.toLowerCase().includes(q))
  );
}
