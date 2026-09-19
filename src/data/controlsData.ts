/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { CreativeControlConfig } from '../types';

export const CREATIVE_CONTROLS: CreativeControlConfig[] = [
  {
    id: 'genre',
    name: 'Genre / Music Style',
    nameVi: '01. Thể Loại & Phong Cách Âm Nhạc',
    description: 'Định hình cốt lõi âm thanh, cấu trúc hòa thanh và nhịp điệu bài hát.',
    category: 'Musical',
    options: [
      'Pop', 'Pop Ballad', 'Ballad', 'Rock', 'Pop Rock', 'Rap', 'Hip Hop', 'R&B',
      'Soul', 'Blues', 'Jazz', 'Funk', 'EDM', 'Electronic', 'Dance', 'House',
      'Deep House', 'Lo-fi', 'Indie', 'Indie Pop', 'Alternative', 'Acoustic',
      'Folk', 'Country', 'Bolero', 'Vietnamese Trữ Tình', 'Vietnamese Folk',
      'Contemporary Folk', 'World Music', 'Latin', 'Reggae', 'Reggaeton',
      'Trap', 'Drill', 'Synthwave', 'Ambient', 'Cinematic', 'Remix',
      'Experimental', 'Fusion'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Phong cách thể loại ${opt}`,
      compatibility: {
        compatibleWith: ['Piano', 'Acoustic Guitar', 'Strings', 'Drums'],
      }
    }))
  },
  {
    id: 'vocal',
    name: 'Vocal Type',
    nameVi: '02. Chất Giọng & Tuyến Vocal',
    description: 'Chất giọng thể hiện, âm vực, sắc thái biểu cảm và hình thức biểu diễn.',
    category: 'Vocal & Sound',
    options: [
      'Male Low', 'Male Mid-Low', 'Male Mid', 'Male Mid-High', 'Male High',
      'Female Low', 'Female Mid-Low', 'Female Mid', 'Female Mid-High', 'Female High',
      'Male Soft', 'Male Powerful', 'Male Emotional', 'Male Breathy', 'Male Warm',
      'Female Soft', 'Female Powerful', 'Female Emotional', 'Female Breathy', 'Female Warm',
      'Whisper Vocal', 'Intimate Vocal', 'Conversational Vocal', 'Airy Vocal',
      'Bright Vocal', 'Dark Vocal', 'Raw Vocal', 'Dramatic Vocal',
      'Storytelling Vocal', 'Melodic Vocal', 'Rap Vocal', 'Spoken Vocal',
      'Duet', 'Male + Female Duet', 'Group Vocal', 'Choir',
      'Layered Vocal', 'Lead + Backing Vocal', 'Hybrid Vocal', 'Custom Vocal'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Định hướng giọng hát: ${opt}`,
    }))
  },
  {
    id: 'tempo',
    name: 'Tempo / BPM',
    nameVi: '03. Tốc Độ & Nhịp Điệu (Tempo)',
    description: 'Tốc độ nhịp tim của ca khúc, cảm giác di chuyển và không gian thời gian.',
    category: 'Musical',
    options: [
      '55–60 BPM', '60–65 BPM', '65–70 BPM', '70–75 BPM', '75–80 BPM',
      '80–85 BPM', '85–90 BPM', '90–95 BPM', '95–100 BPM', '100–105 BPM',
      '105–110 BPM', '110–115 BPM', '115–120 BPM', '120–125 BPM', '125–130 BPM',
      '130–135 BPM', '135–140 BPM', '140–145 BPM', '145–150 BPM', '150–160 BPM',
      'Very Slow', 'Slow', 'Slow-Medium', 'Medium', 'Medium-Fast',
      'Fast', 'Very Fast', 'Rubato', 'Flexible Tempo', 'Half-Time Feel',
      'Double-Time Feel', 'Laid Back', 'Driving', 'Floating', 'Pulse-Based',
      'Groove-Based', 'Ballad Tempo', 'Dance Tempo', 'Cinematic Tempo', 'Custom BPM'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Thiết lập nhịp độ: ${opt}`,
    }))
  },
  {
    id: 'emotion',
    name: 'Emotion',
    nameVi: '04. Cảm Xúc Chủ Đạo (Emotion)',
    description: 'Trạng thái cảm xúc cốt lõi dẫn dắt toàn bộ ca từ và hòa âm.',
    category: 'Context & Style',
    options: [
      'Love', 'Joy', 'Sadness', 'Deep Sadness', 'Nostalgia', 'Longing',
      'Regret', 'Loneliness', 'Hope', 'Healing', 'Warmth', 'Tenderness',
      'Romance', 'Heartbreak', 'Separation', 'Waiting', 'Reunion', 'Gratitude',
      'Reflection', 'Contemplation', 'Yearning', 'Desire', 'Freedom', 'Youth',
      'Growing Up', 'Memory', 'Homecoming', 'Loss', 'Forgiveness', 'Acceptance',
      'Resilience', 'Dreaming', 'Peace', 'Bittersweet', 'Passion', 'Fear',
      'Uncertainty', 'Comfort', 'Devotion', 'Release'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Màu sắc cảm xúc: ${opt}`,
    }))
  },
  {
    id: 'mood',
    name: 'Mood / Atmosphere',
    nameVi: '05. Không Khí & Tâm Trạng (Mood)',
    description: 'Bầu không khí bao trùm không gian bài hát (thời tiết, ánh sáng, nhiệt độ).',
    category: 'Context & Style',
    options: [
      'Warm', 'Cold', 'Dark', 'Bright', 'Dreamy', 'Nostalgic', 'Cinematic',
      'Intimate', 'Minimal', 'Epic', 'Mysterious', 'Hopeful', 'Melancholic',
      'Romantic', 'Raw', 'Organic', 'Urban', 'Vintage', 'Modern', 'Night',
      'Morning', 'Rainy', 'Summer', 'Autumn', 'Winter', 'Dawn', 'Sunset',
      'Late Night', 'Quiet', 'Restless', 'Floating', 'Heavy', 'Airy',
      'Earthy', 'Spiritual', 'Reflective', 'Comforting', 'Distant', 'Close', 'Atmospheric'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Không khí bài hát: ${opt}`,
    }))
  },
  {
    id: 'phrasing',
    name: 'Vocal Phrasing / Nhấn Nhá',
    nameVi: '06. Ngắt Câu & Nhấn Nhá (Phrasing)',
    description: 'Cách nhả chữ, buông câu, khoảng nghỉ hơi và tạo điểm nhấn âm nhạc.',
    category: 'Vocal & Sound',
    options: [
      'Soft', 'Gentle', 'Breathy', 'Whispered', 'Conversational', 'Natural',
      'Legato', 'Staccato', 'Long Notes', 'Short Notes', 'Syllabic', 'Melismatic',
      'Delayed Entry', 'Early Entry', 'Pause Heavy', 'Word Emphasis',
      'Ending Emphasis', 'Opening Emphasis', 'Dynamic', 'Restrained',
      'Emotional', 'Intimate', 'Dramatic', 'Floating', 'Rhythmic',
      'Syncopated', 'Speech-like', 'Storytelling', 'Antiphonal',
      'Call and Response', 'Layered', 'Stacked', 'Harmonic', 'Wide',
      'Close', 'Raw', 'Airy', 'Warm', 'Powerful', 'Subtle'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Kỹ thuật nhả chữ: ${opt}`,
    }))
  },
  {
    id: 'language',
    name: 'Language',
    nameVi: '07. Ngôn Ngữ & Phong Cách Lời',
    description: 'Ngôn ngữ chính, pha trộn từ ngữ, mức độ thi ca hoặc đời thường.',
    category: 'Lyrical & Poetry',
    options: [
      'Vietnamese', 'English', 'Vietnamese + English', 'Vietnamese + English Hook',
      'Vietnamese + English Ad-lib', 'English Hook Only', 'English Bridge',
      'English Outro', 'English Intro', 'English Phrase Accent', 'Bilingual Chorus',
      'Bilingual Verse', 'Vietnamese Main + English Keywords', 'Vietnamese Main + English Ad-libs',
      'Vietnamese Main + English Hook', 'Minimal English', 'Modern Vietnamese',
      'Poetic Vietnamese', 'Conversational Vietnamese', 'Traditional Vietnamese',
      'Contemporary Vietnamese', 'Formal Vietnamese', 'Informal Vietnamese',
      'Regional Flavor', 'Neutral Vietnamese', 'Literary Vietnamese',
      'Everyday Vietnamese', 'Youth Vietnamese', 'Vintage Vietnamese', 'Hybrid Lyric',
      'Spoken Vietnamese', 'Rap Vietnamese', 'Melodic Vietnamese',
      'Vietnamese + Global Pop Phrasing', 'Vietnamese Cinematic', 'Vietnamese Acoustic',
      'Vietnamese Folk', 'Vietnamese Electronic', 'Vietnamese Contemporary', 'Custom'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Ngôn ngữ và ngữ thái: ${opt}`,
    }))
  },
  {
    id: 'poetryForm',
    name: 'Poetry Form',
    nameVi: '08. Thể Thơ & Cấu Trúc Vần',
    description: 'Khuôn khổ gieo vần, số chữ mỗi câu hoặc tự do biến thể theo nhạc điệu.',
    category: 'Lyrical & Poetry',
    options: [
      'Lục bát', 'Song thất lục bát', 'Ngũ ngôn', 'Thất ngôn', 'Tứ tuyệt',
      'Thơ 4 chữ', 'Thơ 5 chữ', 'Thơ 6 chữ', 'Thơ 7 chữ', 'Thơ 8 chữ',
      'Thơ tự do', 'Thơ biến thể', 'Modern Poetry', 'Prose Poetry', 'Spoken Poetry',
      'Conversational Poetry', 'Literary Poetry', 'Hybrid Poetry', 'Rhyme-driven',
      'Rhythm-driven', 'Free-form Lyric', 'Narrative Poetry', 'Image-driven Poetry',
      'Story Poetry', 'Minimal Poetry', 'Cinematic Poetry', 'Romantic Poetry',
      'Dramatic Poetry', 'Reflective Poetry', 'Confessional Poetry', 'Diary Poetry',
      'Letter Poetry', 'Song-like Poetry', 'Folk Poetry', 'Contemporary Folk Poetry',
      'Modern Lục Bát', 'Loose Lục Bát', 'Internal Rhyme Poetry', 'Mixed Meter', 'Custom'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Thể thức thơ: ${opt}`,
    }))
  },
  {
    id: 'imagery',
    name: 'Imagery / Metaphor',
    nameVi: '09. Hình Tượng & Ẩn Dụ (Imagery)',
    description: 'Mật độ hình ảnh thị giác, giác quan, cảnh vật hay đồ vật ẩn chứa ý nghĩa.',
    category: 'Lyrical & Poetry',
    options: [
      'Direct', 'Mostly Direct', 'Balanced', 'Light Imagery', 'Moderate Imagery',
      'Rich Imagery', 'Poetic', 'Highly Poetic', 'Cinematic', 'Literary',
      'Symbolic', 'Nature-based', 'Urban', 'Domestic', 'Memory-based',
      'Weather-based', 'Light-based', 'Sound-based', 'Object-based', 'Place-based',
      'Body Language', 'Sensory', 'Visual', 'Auditory', 'Tactile',
      'Contrast', 'Metaphorical', 'Minimal Metaphor', 'Layered Metaphor',
      'Subtle Symbolism', 'Recurring Motif', 'Narrative Imagery', 'Film-like',
      'Dreamlike', 'Realistic', 'Surreal', 'Organic', 'Intimate', 'Evocative', 'Mixed'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Mức độ hình ảnh: ${opt}`,
    }))
  },
  {
    id: 'storytelling',
    name: 'Storytelling Method',
    nameVi: '10. Phương Pháp Kể Chuyện',
    description: 'Ngôi kể, dòng thời gian, lối tự sự hoặc độc thoại nội tâm.',
    category: 'Context & Style',
    options: [
      'First Person', 'Second Person', 'Third Person', 'Direct Narrative', 'Flashback',
      'Present Time', 'Past Time', 'Future Reflection', 'Linear', 'Nonlinear',
      'Circular', 'Diary', 'Letter', 'Confession', 'Monologue', 'Dialogue',
      'Conversation', 'Memory', 'Journey', 'Homecoming', 'Coming of Age',
      'Love Story', 'Breakup Story', 'Reunion', 'Character Story', 'Place-based',
      'Object-based', 'Scene-based', 'Cinematic', 'Documentary-like', 'Poetic Narrative',
      'Fragmented', 'Dream Sequence', 'Before/After', 'Parallel Story', 'Dual Perspective',
      'Call and Response', 'Internal Monologue', 'External Observation', 'Hybrid'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Lối kể chuyện: ${opt}`,
    }))
  },
  {
    id: 'structure',
    name: 'Song Structure',
    nameVi: '11. Cấu Trúc Đoạn Bài Hát',
    description: 'Trình tự các đoạn Verse, Chorus, Pre-Chorus, Bridge, Hook và Outro.',
    category: 'Structure & Dynamic',
    options: [
      'Intro → Verse 1 → Pre-Chorus → Chorus → Verse 2 → Pre-Chorus → Chorus → Bridge → Final Chorus → Outro',
      'Verse → Chorus → Verse → Chorus → Bridge → Chorus',
      'Intro → Verse → Chorus → Verse → Chorus → Outro',
      'Verse-first', 'Chorus-first', 'Hook-first', 'Bridge-first', 'Story-first',
      'Verse-heavy', 'Chorus-heavy', 'Minimal Structure', 'Acoustic Structure',
      'Piano Ballad Structure', 'Cinematic Build', 'Slow Build', 'Big Final Chorus',
      'Double Chorus', 'Post-Chorus Structure', 'Rap Verse + Melodic Chorus',
      'Melodic Verse + Rap Chorus', 'Duet Structure', 'Call-Response Structure',
      'Male Verse + Female Chorus', 'Female Verse + Male Chorus', 'Alternating Duet',
      'Narrative Song', 'Linear Story Structure', 'Nonlinear Story Structure',
      'Circular Story Structure', 'Live Performance Structure', 'Radio Structure',
      'Short-form Structure', 'Extended Structure', 'Album Track Structure',
      'Film Song Structure', 'TV Song Structure', 'Experimental Structure',
      'Hybrid Structure', 'Custom Structure', 'AABA Structure', 'ABAB Structure', 'Strophic Form'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Mô hình cấu trúc: ${opt}`,
    }))
  },
  {
    id: 'climax',
    name: 'Climax / Cao Trào',
    nameVi: '12. Điểm Cao Trào & Giải Tỏa',
    description: 'Vị trí bùng nổ cảm xúc, mức độ năng lượng và cách build cao trào.',
    category: 'Structure & Dynamic',
    options: [
      'No Climax', 'Very Subtle', 'Subtle', 'Slow Build', 'Gradual Build',
      'Medium Build', 'Strong Build', 'Late Build', 'Early Climax', 'Mid-song Climax',
      'Final Climax', 'Double Climax', 'Chorus Climax', 'Bridge Climax',
      'Final Chorus Climax', 'Instrumental Climax', 'Vocal Climax', 'Harmonic Climax',
      'Dynamic Climax', 'Emotional Climax', 'Cinematic Climax', 'Explosive',
      'Powerful', 'Intimate Climax', 'Quiet Climax', 'Bittersweet Climax',
      'Hopeful Climax', 'Dark Climax', 'Release Climax', 'Delayed Release',
      'False Climax', 'Layered Climax', 'Ascending', 'Descending', 'Wave-like',
      'Progressive', 'Minimal-to-Full', 'Full-to-Minimal', 'Hybrid', 'Custom'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Định hướng cao trào: ${opt}`,
    }))
  },
  {
    id: 'lineRhythm',
    name: 'Line Rhythm / Sentence Length',
    nameVi: '13. Nhịp Câu & Độ Dài Câu Hát',
    description: 'Độ dài câu hát, nhịp ngắt, khoảng cách hơi thở và tỷ lệ vần nội/ngoại.',
    category: 'Lyrical & Poetry',
    options: [
      'Very Short', 'Short', 'Medium', 'Long', 'Very Long', 'Mixed',
      'Conversational', 'Poetic', 'Rapid', 'Slow', 'Sparse', 'Dense',
      'Breath-heavy', 'Pause-heavy', 'Syllable-heavy', 'Hook-oriented',
      'Story-oriented', 'Rhythmic', 'Free', 'Syncopated', 'Flowing',
      'Broken', 'Fragmented', 'Long-short Contrast', 'Short-long Contrast',
      'Call-response', 'Question-answer', 'Internal Rhyme', 'End Rhyme',
      'Near Rhyme', 'No Rhyme', 'Loose Rhyme', 'Dense Rhyme', 'Minimal Rhyme',
      'Speech-like', 'Melodic', 'Rap-like', 'Cinematic', 'Natural', 'Hybrid'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Nhịp điệu câu: ${opt}`,
    }))
  },
  {
    id: 'poeticBeauty',
    name: 'Poetic Beauty / Ornamentation',
    nameVi: '14. Mức Độ Thơ & Trau Chuốt Lời',
    description: 'Mức độ tự nhiên so với trau chuốt mỹ từ (Show, Don\'t Tell; không sáo rỗng).',
    category: 'Lyrical & Poetry',
    options: [
      'Very Natural', 'Natural', 'Simple', 'Warm', 'Subtle Poetic', 'Poetic',
      'Lyrical', 'Elegant', 'Romantic', 'Literary', 'Cinematic', 'Dreamy',
      'Decorative', 'Rich', 'Highly Imagistic', 'Symbolic', 'Metaphorical',
      'Minimalist', 'Modern', 'Vintage', 'Nostalgic', 'Mature', 'Youthful',
      'Intimate', 'Raw', 'Organic', 'Earthy', 'Urban', 'Spoken',
      'Conversational', 'Storytelling', 'Emotional', 'Restrained', 'Expressive',
      'Abstract', 'Concrete', 'Sensory', 'Visual', 'Mixed', 'Custom'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Mức độ gọt giũa thi vị: ${opt}`,
    }))
  },
  {
    id: 'traditionalModern',
    name: 'Traditional ↔ Modern',
    nameVi: '15. Tỷ Lệ Truyền Thống ↔ Hiện Đại',
    description: 'Cân bằng giữa âm hưởng dân gian, ngũ cung truyền thống và pop/electronic hiện đại.',
    category: 'Context & Style',
    options: [
      'Very Traditional', 'Traditional', 'Traditional Leaning', 'Folk', 'Folk Contemporary',
      'Vietnamese Folk', 'Vietnamese Contemporary', 'Classic', 'Classic Modern',
      'Vintage', 'Retro', 'Modern Classic', 'Modern', 'Contemporary', 'Current',
      'Urban', 'Modern Pop', 'Global Pop', 'Electronic Modern', 'Experimental',
      'Fusion', 'Traditional + Pop', 'Traditional + Rock', 'Traditional + EDM',
      'Traditional + Acoustic', 'Traditional + Cinematic', 'Folk + Electronic',
      'Folk + Indie', 'Bolero + Modern', 'Bolero + Pop', 'Acoustic + Modern',
      'Orchestral + Modern', 'Asian + Modern', 'Vietnamese + Global', 'Organic + Modern',
      'Minimal Modern', 'Alternative Modern', 'Experimental Modern', 'Hybrid', 'Custom'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Tỉ lệ giao thoa: ${opt}`,
    }))
  },
  {
    id: 'referenceArtist',
    name: 'Reference Artist / Songwriter',
    nameVi: '16. Nghệ Sĩ / Tác Giả Tham Khảo',
    description: 'Phân tích đặc điểm sáng tác trừu tượng (nhịp câu, density, hook) — KHÔNG sao chép.',
    category: 'Context & Style',
    options: [
      'Trịnh Công Sơn Style (Philosophy & Metaphor)', 'Phạm Duy Style (Folk & Complex Melody)',
      'Việt Anh Style (Romantic Ballad & Pure Emotion)', 'Đức Trí Style (Refined Ballad & Melodic Climax)',
      'Vũ Style (Indie Melancholy & Intimate Acoustic)', 'Tiên Cookie Style (Catchy Hook & Everyday Emotion)',
      'Hứa Kim Tuyền Style (Story-driven & Cinematic Pop)', 'Phan Mạnh Quỳnh Style (Conversational & Folk Narrative)',
      'Đen Vâu Style (Reflective Rap & Earthy Poetry)', 'Kai Đinh Style (Gentle Nostalgia & Sweet Sadness)',
      'Taylor Swift Style (Narrative Details & Bridge Climax)', 'Ed Sheeran Style (Acoustic Loop & Relatable Story)',
      'Lauv Style (Modern Bedroom Pop & Vulnerable Intimacy)', 'Billie Eilish Style (Whisper Vocal & Minimal Dark)',
      'Adele Style (Powerful Emotional Climax & Raw Soul)', 'Coldplay Style (Epic Anthemic & Soaring Chorus)',
      'Lana Del Rey Style (Vintage Cinematic & Nostalgic Glamour)', 'FINNEAS Style (Unconventional Texture & Layered Sound)',
      'Chainsmokers Style (Nostalgic EDM & Story Hook)', 'Max Martin Style (Ultimate Melodic Math & Catchy Chorus)',
      'Norah Jones Style (Warm Acoustic Jazz & Intimate Room)', 'John Mayer Style (Blues Guitar & Lyrical Wisdom)',
      'Keshi Style (Lo-fi R&B & Falsetto Longing)', 'LANY Style (80s Synth Dream & Heartbreak Pop)',
      'Troye Sivan Style (Euphoric Dance & Vulnerable Youth)', 'Lorde Style (Sharp Art-Pop & Youth Observation)',
      'The Weeknd Style (Dark Synthwave & Midnight Melodrama)', 'Sam Smith Style (Gospel Soul & Deep Vulnerability)',
      'Bruno Mars Style (Vintage Funk Soul & Flawless Groove)', 'Hoàng Dũng Style (Lyrical Poetry & Emotional Balance)',
      'Vũ Cát Tường Style (Deep R&B Ballad & Dynamic Range)', 'Thùy Chi Style (Pure Crystal Tone & High Flying)',
      'Trần Tiến Style (Dusty Folk Rock & Raw Life Story)', 'Lê Minh Sơn Style (Passionate Folk & Fiery Percussion)',
      'Bảo Chấn Style (Saigon Nostalgia & Gentle Rain)', 'Nguyễn Hải Phong Style (Rhythmic Pop Rock & Punchy Concept)',
      'Khắc Hưng Style (Catchy Modern Pop & Rich Arrangement)', 'Ngọt Band Style (Indie Rock & Philosophical Metaphor)',
      'Cá Hồi Hoang Style (Alternative Rock & Open Highway)', 'Custom Reference Artist'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Đặc tính trừu tượng tham khảo: ${opt}`,
    }))
  },
  {
    id: 'instruments',
    name: 'Instruments',
    nameVi: '17. Nhạc Cụ & Phối Khí (20 Riêng + 20 Bộ Phối)',
    description: 'Chính xác 20 nhạc cụ độc tấu hoặc 20 bộ hòa thanh kết hợp.',
    category: 'Vocal & Sound',
    options: [
      // 20 individual instruments
      'Piano', 'Acoustic Guitar', 'Electric Guitar', 'Bass', 'Drums',
      'Percussion', 'Cajon', 'Violin', 'Viola', 'Cello',
      'Double Bass', 'Flute', 'Sáo trúc', 'Đàn tranh', 'Đàn bầu',
      'Đàn nguyệt', 'Đàn tỳ bà', 'Saxophone', 'Trumpet', 'Synth',
      // 20 combined sets
      'Piano + Strings', 'Acoustic Guitar + Piano', 'Piano + Cello', 'Acoustic Guitar + Cajon',
      'Piano + Violin + Cello', 'Guitar + Bass + Drums', 'Piano + Pad + Strings',
      'Synth + 808 + Electronic Drums', 'Sáo trúc + Đàn tranh', 'Đàn bầu + Strings',
      'Đàn nguyệt + Acoustic Guitar', 'Sáo trúc + Piano + Strings', 'Đàn tranh + Piano + Cello',
      'Vietnamese Traditional Ensemble', 'Acoustic Pop Ensemble', 'Cinematic Orchestra',
      'EDM Electronic Stack', 'Lo-fi Instrument Set', 'Rock Band', 'Traditional + Electronic Hybrid'
    ].map((opt, idx) => ({
      id: opt,
      label: `${idx < 20 ? '[Đơn]' : '[Bộ phối]'} ${opt}`,
      category: idx < 20 ? 'Single Instrument' : 'Combined Ensemble',
      description: idx < 20 ? `Nhạc cụ chủ đạo: ${opt}` : `Bộ phối kết hợp: ${opt}`,
    }))
  },
  {
    id: 'arrangementStyle',
    name: 'Arrangement Style',
    nameVi: '18. Phong Cách Hòa Âm & Phối Khí',
    description: 'Cách xếp lớp nhạc cụ, không gian âm trường, độ dày mỏng của bản hòa âm.',
    category: 'Musical',
    options: [
      'Acoustic', 'Minimal', 'Full Band', 'Orchestral', 'Cinematic', 'Electronic',
      'Hybrid', 'Traditional', 'Vietnamese Traditional', 'Modern Vietnamese',
      'Lo-fi', 'Ambient', 'Live Band', 'Studio Pop', 'Bedroom Pop', 'Indie',
      'Rock Band', 'EDM', 'House', 'Deep House', 'Acoustic Ballad',
      'Piano Ballad', 'String Ballad', 'Guitar Ballad', 'Cinematic Pop',
      'Dark Pop', 'Dream Pop', 'Alternative', 'Folk', 'Folk Pop', 'Bolero',
      'Contemporary Bolero', 'R&B', 'Soul', 'Hip Hop', 'Trap', 'Rap',
      'Fusion', 'Experimental', 'Custom'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Phong cách hòa âm: ${opt}`,
    }))
  },
  {
    id: 'hook',
    name: 'Hook Characteristic',
    nameVi: '19. Đặc Điểm Hook / Điệp Khúc',
    description: 'Điểm neo tai nghe, câu hát ngắn nhớ lâu, giai điệu hoặc từ khóa trọng tâm.',
    category: 'Structure & Dynamic',
    options: [
      'Short Hook', 'Long Hook', 'Repeated Hook', 'Melodic Hook', 'Lyrical Hook',
      'Emotional Hook', 'Question Hook', 'Answer Hook', 'Image Hook', 'Object Hook',
      'Phrase Hook', 'Word Hook', 'Title Hook', 'Chorus Hook', 'Pre-Chorus Hook',
      'Post-Chorus Hook', 'Call-response', 'Conversational', 'Cinematic', 'Poetic',
      'Minimal', 'Catchy', 'Subtle', 'Deep', 'Nostalgic', 'Romantic', 'Sad',
      'Hopeful', 'Bittersweet', 'Unexpected', 'Contrast', 'Reversal', 'Story Hook',
      'Character Hook', 'Place Hook', 'Memory Hook', 'Sensory Hook', 'Rhythmic',
      'Melodic', 'Hybrid'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Đặc tính câu hook: ${opt}`,
    }))
  },
  {
    id: 'lyricDNA',
    name: 'Lyric DNA',
    nameVi: '20. Chất Liệu Ca Từ (Lyric DNA)',
    description: 'Chất liệu ngôn ngữ gốc rễ, mức độ cảm xúc, sự mộc mạc hay chiều sâu triết lý.',
    category: 'Lyrical & Poetry',
    options: [
      'Everyday', 'Mature', 'Youthful', 'Simple', 'Poetic', 'Deep', 'Narrative',
      'Cinematic', 'Nostalgic', 'Romantic', 'Melancholic', 'Conversational',
      'Literary', 'Minimal', 'Imagistic', 'Metaphorical', 'Symbolic', 'Sensory',
      'Visual', 'Auditory', 'Warm', 'Raw', 'Organic', 'Urban', 'Traditional',
      'Modern', 'Vintage', 'Intimate', 'Confessional', 'Reflective', 'Story-driven',
      'Emotion-driven', 'Hook-driven', 'Character-driven', 'Scene-driven',
      'Memory-driven', 'Nature-driven', 'Object-driven', 'Hybrid', 'Custom'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `DNA chất liệu lời: ${opt}`,
    }))
  },
  {
    id: 'overallGoal',
    name: 'Overall Song Goal',
    nameVi: '21. Mục Đích & Sứ Mệnh Ca Khúc',
    description: 'Định hướng thưởng thức, hoàn cảnh nghe, không gian biểu diễn hoặc mục đích cảm xúc.',
    category: 'Context & Style',
    options: [
      'Love Song', 'Breakup Song', 'Healing Song', 'Nostalgic Song', 'Storytelling Song',
      'Emotional Song', 'Radio Friendly', 'Hook Driven', 'Cinematic', 'Live Performance',
      'Acoustic Performance', 'Concert Song', 'Personal Song', 'Wedding Song',
      'Children’s Song', 'Inspirational', 'Motivational', 'Reflective', 'Homecoming',
      'Youth', 'Coming of Age', 'Family', 'Friendship', 'Longing', 'Memory',
      'Hope', 'Sadness', 'Celebration', 'Dance', 'Relaxation', 'Night Song',
      'Road Song', 'Film Song', 'TV Song', 'Short-form Friendly', 'Album Track',
      'Opening Track', 'Closing Track', 'Experimental', 'Custom'
    ].map((opt) => ({
      id: opt,
      label: opt,
      description: `Mục tiêu bài hát: ${opt}`,
    }))
  },
];

export const SONG_LENGTH_OPTIONS = [
  '100–200 words',
  '200–300 words',
  '300–400 words',
  '400–500 words',
  '500–600 words',
  '600–700 words',
  '700–800 words',
  '800–900 words',
  '900–1000 words',
  '1000+ words',
  'AI AUTO',
];

export const DEFAULT_CONTROLS_RECORD = CREATIVE_CONTROLS.reduce((acc, ctrl) => {
  acc[ctrl.id] = {
    state: 'AI_AUTO',
    value: null,
    isLocked: false,
  };
  return acc;
}, {} as Record<string, { state: 'USER_SELECTED' | 'AI_AUTO' | 'NONE'; value: string | null; isLocked: boolean }>);

export const DEFAULT_CONTROLS = DEFAULT_CONTROLS_RECORD;

