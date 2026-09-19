/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import {
  ControlsRecord,
  Project,
  ReferenceSong,
  StyleDNA,
  StoryAnalysis,
  SongBlueprint,
  MeaningLayer,
  SongSection,
  UserSettings,
} from '../types';

export const PromptBuilder = {
  buildStoryExpansionPrompt(story: string): string {
    return `Bạn là BẬC THẦY BIÊN KỊCH VÀ PHÂN TÍCH CỐT TRUYỆN ÂM NHẠC (Music Story Dramaturg).
Nhiệm vụ: Mở rộng và làm sâu sắc thêm câu chuyện gốc của người dùng để làm chất liệu sáng tác bài hát.
QUY TẮC BẮT BUỘC: KHÔNG ĐƯỢC làm sai lệch hoặc thay đổi ý nghĩa cốt lõi của người dùng. Hãy bổ sung các chiều kích giác quan (thị giác, thính giác, xúc giác), chi tiết không gian thời gian và chiều sâu tâm lý nhân vật.

CÂU CHUYỆN GỐC TỪ NGƯỜI DÙNG:
"""
${story}
"""

Hãy trả về định dạng JSON thuần túy (không kèm markdown thừa) với cấu trúc sau:
{
  "topic": "Chủ đề chính",
  "characters": "Nhân vật và đại từ xưng hô",
  "relationship": "Mối quan hệ giữa các nhân vật",
  "timeContext": "Thời điểm / Mùa / Dòng thời gian",
  "spaceContext": "Không gian / Địa điểm / Bối cảnh",
  "keyEvents": "Các sự kiện then chốt",
  "conflict": "Xung đột nội tâm hoặc ngoại cảnh",
  "primaryEmotion": "Cảm xúc cốt lõi",
  "secondaryEmotion": "Cảm xúc phụ / Sắc thái bổ trợ",
  "coreMessage": "Thông điệp đọng lại",
  "emotionalShiftPoint": "Điểm chuyển biến cảm xúc (bước ngoặt)",
  "desiredEnding": "Cái kết / Dư âm mong muốn",
  "expandedStory": "Đoạn văn mở rộng hoàn chỉnh (khoảng 150-250 từ) giàu hình ảnh và chiều sâu cảm xúc"
}`;
  },

  buildReferenceAnalysisPrompt(ref: ReferenceSong): string {
    return `Bạn là CHUYÊN GIA PHÂN TÍCH CẤU TRÚC VÀ PHONG CÁCH ÂM NHẠC (Music Style DNA Deconstructer).
Nhiệm vụ: Phân tích bài hát tham khảo thành các chỉ số STYLE DNA trừu tượng.
QUY TẮC TỐI THƯỢNG: TUYỆT ĐỐI KHÔNG sao chép lời bài hát hay tạo biến thể gần giống. Chỉ trích xuất ĐẶC TÍNH SÁNG TÁC TRỪU TƯỢNG (cấu trúc, nhịp thở, mật độ hình ảnh, cách hành xử của hook/chorus).

THÔNG TIN BÀI THAM KHẢO:
- Tên bài: ${ref.title}
- Nghệ sĩ: ${ref.artist}
- Thể loại: ${ref.genre}
- Tâm trạng: ${ref.mood}
- Năm: ${ref.year || 'N/A'}
- Ghi chú: ${ref.notes}

Hãy trả về JSON với cấu trúc:
{
  "narrativeStyle": "Mô tả phong cách tự sự (ví dụ: tự sự ngôi thứ nhất, tả cảnh ngụ tình...)",
  "imageryDensity": 7, // Thang điểm 1 đến 10
  "metaphorDensity": 6, // Thang điểm 1 đến 10
  "vocabularyProfile": "Đặc trưng trường từ vựng (ví dụ: giàu từ ngữ về mưa, ngõ phố, thời gian)",
  "sentenceRhythm": "Nhịp thở câu hát và cách ngắt câu",
  "hookCharacteristics": "Đặc điểm câu hook (ngắn, lặp, câu hỏi...)",
  "chorusCharacteristics": "Cách phát triển và bùng nổ của điệp khúc",
  "verseCharacteristics": "Cách dẫn dắt của phiên khúc",
  "bridgeCharacteristics": "Cách chuyển đoạn và tạo góc nhìn mới",
  "emotionalArc": "Đường cong cảm xúc xuyên suốt",
  "repetitionStyle": "Cách sử dụng điệp từ/điệp ngữ",
  "languageMixing": "Phong cách ngôn ngữ",
  "formality": "Mức độ thân mật / trang trọng",
  "perspective": "Góc nhìn trần thuật",
  "lyricalDirectness": 6, // 1-10 (1 = siêu trừu tượng, 10 = trực diện)
  "cinematicLevel": 8 // 1-10
}`;
  },

  buildControlResolutionPrompt(
    story: string,
    controls: ControlsRecord,
    project?: Project,
    settings?: UserSettings
  ): string {
    const autoControls: string[] = [];
    const lockedOrUserControls: Record<string, any> = {};
    const noneControls: string[] = [];

    Object.entries(controls).forEach(([id, val]) => {
      if (val.state === 'NONE') {
        noneControls.push(id);
      } else if (val.state === 'USER_SELECTED' || val.isLocked) {
        lockedOrUserControls[id] = {
          value: val.value,
          isLocked: val.isLocked,
        };
      } else {
        autoControls.push(id);
      }
    });

    return `Bạn là BỘ NÃO SUY LUẬN ÂM NHẠC (AI Songwriter Resolution Engine).
Nhiệm vụ: Đọc kỹ Story và các điều khiển đã cố định, sau đó tự động suy luận và quyết định giá trị tối ưu cho các mục AI_AUTO.

NGUYÊN TẮC:
1. KHÔNG ĐƯỢC THAY ĐỔI các mục USER_SELECTED hoặc LOCKED: ${JSON.stringify(lockedOrUserControls, null, 2)}
2. KHÔNG ĐƯỢC SỬ DỤNG các mục NONE: ${JSON.stringify(noneControls)}
3. Với mỗi mục AI_AUTO, hãy chọn một giá trị chuẩn xác và cung cấp lý do ngắn gọn (1-2 câu tiếng Việt) gắn liền với Story và Genre/Emotion.

CÂU CHUYỆN BÀI HÁT:
"""
${story}
"""

DỰ ÁN: ${project?.name || 'Độc lập'} - ${project?.description || ''}

CÁC MỤC CẦN SUY LUẬN (AI_AUTO):
${autoControls.join(', ')}

Hãy trả về JSON:
{
  "resolutions": {
    "genre": { "value": "Pop Ballad", "reason": "Phù hợp với câu chuyện chia tay hoài niệm và không gian mùa thu sâu lắng." },
    ... (cho tất cả các mục AI_AUTO)
  }
}`;
  },

  buildBlueprintPrompt(
    masterContext: any
  ): string {
    return `Bạn là KIẾN TRÚC SƯ CẤU TRÚC CA KHÚC (Songwriting Blueprint Architect).
Nhiệm vụ: Lập BẢN THIẾT KẾ BÀI HÁT (Song Blueprint) chi tiết trước khi viết lời.
Mỗi phân đoạn phải có mục đích tự sự, mục đích cảm xúc, ý đồ ngầm, hình ảnh đại diện và nhãn đoạn bằng TIẾNG ANH trong ngoặc vuông [SECTION — instruction].

MASTER CONTEXT:
${JSON.stringify(masterContext, null, 2)}

Hãy trả về JSON với cấu trúc:
{
  "title": "Tên bài hát dự kiến",
  "overview": "Tổng quan kiến trúc bài hát",
  "overallArc": "Vòng cung phát triển cảm xúc từ đầu đến kết bài",
  "sections": [
    {
      "sectionType": "INTRO",
      "label": "[INTRO — soft acoustic guitar and distant ambient rain]",
      "narrativePurpose": "Tạo không gian và dẫn dắt người nghe vào ký ức",
      "emotionalPurpose": "Bâng khuâng, tĩnh lặng",
      "intent": "Mở đầu một cách chậm rãi, thân mật",
      "meaning": "Không gian quán vắng một chiều thu",
      "imagery": "Hàng cây ướt mưa, tách trà nguội",
      "vocalDirection": "Không lời hoặc vocalise thì thầm",
      "dynamicLevel": "pp (Rất êm dịu)",
      "hookFunction": "Ambient Intro"
    },
    {
      "sectionType": "VERSE 1",
      "label": "[VERSE 1 — conversational and restrained]",
      "narrativePurpose": "Giới thiệu nhân vật, bối cảnh và cảm giác bước đi trên phố cũ",
      "emotionalPurpose": "Man mác, kiềm chế",
      "intent": "Kể chuyện tự nhiên bằng hình ảnh cụ thể",
      "meaning": "Nhìn thấy quán quen và chiếc ghế cũ",
      "imagery": "Bóng lá rơi, góc phố thân quen",
      "vocalDirection": "Vocal mộc, tự sự gần gũi",
      "dynamicLevel": "p (Nhẹ nhàng)",
      "hookFunction": "Dẫn nhập"
    },
    ... (đủ các đoạn theo Structure đã chọn: PRE-CHORUS, CHORUS, VERSE 2, BRIDGE, FINAL CHORUS, OUTRO)
  ]
}`;
  },

  buildMeaningLayerPrompt(
    blueprint: SongBlueprint,
    story: string
  ): string {
    return `Bạn là CHUYÊN GIA LỚP Ý NGHĨA CA TỪ (Lyrical Meaning Layer Engine).
Triết lý cốt lõi: "Ý NGHĨA CÓ THỂ DÀI — CÂU HÁT CÓ THỂ NGẮN".
Chuyển hóa suy nghĩ nội tâm sâu sắc, triết lý hoặc ký ức dài thành lõi hát ngắn gọn, xúc tích, giàu sức gợi.

CÂU CHUYỆN:
${story}

BẢN THIẾT KẾ (BLUEPRINT):
${JSON.stringify(blueprint, null, 2)}

Hãy xây dựng Meaning Layer cho từng đoạn trong blueprint. Trả về JSON:
{
  "sections": [
    {
      "sectionType": "VERSE 1",
      "intent": "Kể về sự đổi thay của thời gian",
      "longMeaning": "Một người đứng trước quán cà phê cũ nhiều năm trước từng cùng người thương ngồi lại. Quán vẫn còn đây, chiếc bàn quen vẫn đó, nhưng thời gian đã trôi qua và người năm ấy đã có cuộc sống riêng.",
      "imagerySubtext": "Tách trà vơi, chiếc ghế trống đối diện, tà áo quen trong ký ức",
      "emotionalSubtext": "Chút tiếc nuối thanh xuân nhưng không hề oán trách",
      "singableCore": "Quán cũ còn đây mà người năm ấy đã xa"
    },
    ... (cho tất cả các đoạn)
  ]
}`;
  },

  buildLyricGenerationPrompt(
    masterContext: any,
    blueprint: SongBlueprint,
    meaningLayer: MeaningLayer,
    settings?: UserSettings
  ): string {
    return `Bạn là NHÀ THƠ VÀ NHẠC SĨ CA KHÚC ĐỈNH CAO (Master Songwriter & Lyricist).
Nhiệm vụ: Viết trọn vẹn LỜI BÀI HÁT (Lyrics) dựa trên MASTER CONTEXT, BLUEPRINT và MEANING LAYER.

QUY TẮC BẮT BUỘC:
1. TÊN BÀI HÁT (TITLE): Phải nằm ở dòng đầu tiên, không thể thiếu.
2. TẤT CẢ SECTION LABELS / INSTRUCTION PHẢI BẰNG TIẾNG ANH VÀ TRONG NGOẶC VUÔNG.
   Ví dụ:
   [INTRO — soft piano, intimate vocal]
   [VERSE 1 — conversational and restrained]
   [PRE-CHORUS — building emotional tension]
   [CHORUS — soaring vocal, high emotional lift]
   [VERSE 2 — detailed storytelling with subtle rhythm change]
   [BRIDGE — stripped down, philosophical perspective]
   [FINAL CHORUS — full dynamic climax and vocal release]
   [OUTRO — fading melody and lingering acoustic guitar]
3. LỜI HÁT:
   - Viết bằng ngôn ngữ đã chỉ định trong Master Context (mặc định: Tiếng Việt thi vị, tự nhiên, sâu lắng).
   - Áp dụng nguyên tắc "SHOW, DON'T TELL". Cân bằng giữa cảm xúc trực diện + bối cảnh + đồ vật + hành động + chi tiết giác quan.
   - Tránh sáo rỗng (anti-cliché), không gượng ép gieo vần vô nghĩa, không nhồi nhét ẩn dụ khó hiểu.
   - Nhịp điệu và số chữ phải dễ hát, tự nhiên theo ngữ điệu.
4. ĐỘ DÀI: Tuân thủ độ dài khoảng ${masterContext.songLength || '300–500 words'}.

MASTER CONTEXT:
${JSON.stringify(masterContext, null, 2)}

BLUEPRINT:
${JSON.stringify(blueprint, null, 2)}

MEANING LAYER:
${JSON.stringify(meaningLayer, null, 2)}

Hãy xuất ra nội dung bài hát hoàn chỉnh (Title ở trên cùng, tiếp theo là các đoạn với nhãn tiếng Anh trong ngoặc vuông và lời hát bên dưới):`;
  },

  buildProductionGuidePrompt(
    songTitle: string,
    lyrics: string,
    masterContext: any
  ): string {
    return `You are a World-Class Music Director & Master Audio Producer.
Task: Write a concise, professional PRODUCTION & ARRANGEMENT GUIDE for the song "${songTitle}".

CRITICAL MANDATORY RULES:
1. LANGUAGE: MUST BE WRITTEN 100% ENTIRELY IN ENGLISH.
2. LENGTH LIMIT: STRICT MAXIMUM OF 990 CHARACTERS (including spaces). DO NOT EXCEED 990 CHARACTERS UNDER ANY CIRCUMSTANCES.
3. Be punchy, actionable, and studio-ready.

SONG CONTEXT & METRICS:
- Title: "${songTitle}"
- Genre: ${masterContext.genre}
- Tempo: ${masterContext.tempo}
- Vocal Style: ${masterContext.vocal}
- Mood / Emotion: ${masterContext.emotion} (${masterContext.mood})
- Key Instruments: ${masterContext.instruments}
- Arrangement: ${masterContext.arrangementStyle}
- Climax: ${masterContext.climax}
- Hook: ${masterContext.hook}

LYRICS SUMMARY:
"""
${lyrics.slice(0, 300)}...
"""

FORMAT TO FOLLOW (concise bullet points in English, keep under 950 characters total):
[PRODUCTION & ARRANGEMENT GUIDE: ${songTitle}]
• Style & Tempo: [Genre], [Tempo], [Feel]
• Core Instrumentation: [Specific role of each main instrument, avoiding clutter]
• Dynamic Arc: Intro (pp) -> Verse (p) -> Pre-Chorus (mp build) -> Chorus (f full energy) -> Bridge (stripped-back reflection) -> Final Chorus (ff climax) -> Outro (fade)
• Vocal Delivery & Harmonies: [Phrasing nuance, vocal tone, 2-3 part harmonies on chorus, ad-libs placement]
• Mixing & Space: [Reverb/delay depth, stereo panning width, vocal center placement]
• Performance Advice: [Key mindset and emotive delivery for the vocalist & band]

Output ONLY the production guide in English, strictly under 990 characters:`;
  },

  buildSectionModificationPrompt(
    section: SongSection,
    modifier: string,
    songContext: any
  ): string {
    return `Bạn là NHẠC SĨ BIÊN TẬP CA TỪ (Lyrical Section Editor).
Nhiệm vụ: Viết lại phân đoạn "${section.label}" theo yêu cầu điều chỉnh: "${modifier}".

THÔNG TIN ĐOẠN HIỆN TẠI:
- Nhãn đoạn: ${section.label}
- Lời hiện tại:
"""
${section.lyrics}
"""
- Ý định (Intent): ${section.intent}
- Ý nghĩa (Meaning): ${section.meaning}
- Bối cảnh bài hát: Thể loại ${songContext.genre}, Cảm xúc ${songContext.emotion}, Giọng ${songContext.vocal}.

YÊU CẦU:
- Vẫn giữ nguyên nhãn đoạn tiếng Anh: ${section.label}
- Viết lại phần lời mới xuất sắc, mượt mà, cảm xúc theo đúng modifier "${modifier}".
- Chỉ trả về lời mới của phân đoạn này (kèm nhãn đoạn ở đầu).`;
  },
};
