/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface HelpTopic {
  id: string;
  stepNumber: number;
  title: string;
  titleEn: string;
  summary: string;
  content: string[];
  tips: string[];
}

export const HELP_TOPICS: HelpTopic[] = [
  {
    id: 'project',
    stepNumber: 1,
    title: 'Tạo & Quản lý Project',
    titleEn: 'Create Project',
    summary: 'Cách tạo dự án âm nhạc riêng biệt để lưu trữ bộ nhớ phong cách, ca khúc và tư liệu tham khảo.',
    content: [
      'Mỗi Project đại diện cho một album, EP, nghệ sĩ hoặc một concept âm nhạc đồng nhất.',
      'Project lưu trữ toàn bộ lịch sử sáng tác, Reference Songs, Style DNA và bộ nhớ tiến hóa của dự án.',
      'Khi bạn sáng tác nhiều bài trong cùng một Project, AI sẽ tự động học hỏi Style DNA để duy trì bản sắc mà không sao chép lời cũ.',
    ],
    tips: [
      'Nên đặt tên Project theo concept rõ ràng (ví dụ: "EP Hà Nội Mùa Thu", "Album Tuổi 20").',
      'Có thể chuyển đổi linh hoạt giữa các Project từ thanh Header.',
    ],
  },
  {
    id: 'story',
    stepNumber: 2,
    title: 'Nhập Story & Câu Chuyện Cốt Lõi',
    titleEn: 'Story Input',
    summary: 'Cung cấp ý tưởng, nhân vật, bối cảnh, cảm xúc và thông điệp cho bài hát.',
    content: [
      'Khu vực "BÀI HÁT NÀY NÓI VỀ ĐIỀU GÌ?" là trái tim của hệ thống sáng tác.',
      'Bạn có thể viết tự do từ vài dòng ý tưởng ngắn cho đến một câu chuyện dài đầy đủ chi tiết nhân vật.',
      'Tính năng "AI Mở Rộng Câu Chuyện" giúp bạn phân tích sâu hơn về tâm lý nhân vật và bối cảnh mà vẫn giữ nguyên 100% ý đồ gốc.',
    ],
    tips: [
      'Càng chi tiết về bối cảnh giác quan (âm thanh, thời tiết, đồ vật kỷ niệm), lời bài hát càng chân thực và xúc động.',
    ],
  },
  {
    id: 'reference',
    stepNumber: 3,
    title: 'Reference Song Library',
    titleEn: 'Reference Library',
    summary: 'Khai thác cấu trúc và phong cách từ các bài hát mẫu mà không vi phạm bản quyền.',
    content: [
      'Thư viện Reference cho phép bạn lưu các bài hát yêu thích cùng thông tin nghệ sĩ, thể loại, tâm trạng.',
      'AI sẽ bóc tách các đặc điểm trừu tượng (nhịp điệu câu, mật độ hình ảnh, cách hành xử của Chorus/Bridge) thành Style DNA.',
      'Hệ thống TUYỆT ĐỐI KHÔNG sao chép ca từ hay tạo giai điệu đạo nhái.',
    ],
    tips: ['Thêm 2–3 bài hát có cùng màu sắc cảm xúc để AI định hình Style DNA chính xác nhất.'],
  },
  {
    id: 'style-dna',
    stepNumber: 4,
    title: 'Style DNA & Bóc Tách Phong Cách',
    titleEn: 'Style DNA',
    summary: 'Hệ thống chỉ số phong cách sáng tác độc bản của bạn hoặc nghệ sĩ tham khảo.',
    content: [
      'Style DNA mã hóa các chiều kích: Mật độ hình tượng (Imagery Density), Mật độ ẩn dụ, Nhịp câu, Đặc tính Hook, Vòng cung cảm xúc (Emotional Arc), Mức độ điện ảnh...',
      'Style DNA giúp duy trì "chất riêng" xuyên suốt mà không phụ thuộc vào câu từ cụ thể.',
    ],
    tips: ['Bạn có thể xem biểu đồ Style DNA của từng bài hát hoặc của toàn bộ Project.'],
  },
  {
    id: 'controls',
    stepNumber: 5,
    title: '21 Creative Controls',
    titleEn: '21 Creative Controls',
    summary: 'Bộ 21 nút điều khiển sáng tạo chuyên sâu chuẩn phòng thu âm nhạc.',
    content: [
      'Gồm 21 khía cạnh: Genre, Vocal, Tempo, Emotion, Mood, Phrasing, Language, Poetry Form, Imagery, Storytelling, Structure, Climax, Line Rhythm, Poetic Beauty, Traditional-Modern, Reference Artist, Instruments (20 riêng + 20 bộ phối), Arrangement Style, Hook, Lyric DNA, Overall Goal.',
      'Mỗi mục có đúng 40 lựa chọn được tinh chỉnh kỹ lưỡng.',
    ],
    tips: ['Sử dụng thanh tìm kiếm trong bảng điều khiển để tìm nhanh lựa chọn mong muốn.'],
  },
  {
    id: 'ai-auto',
    stepNumber: 6,
    title: 'Trạng thái AI AUTO & Suy Luận Context',
    titleEn: 'AI AUTO State',
    summary: 'Để AI tự động tính toán giá trị tối ưu dựa trên câu chuyện và thể loại.',
    content: [
      'Khi một mục ở trạng thái AI_AUTO, AI sẽ đọc toàn bộ Master Song Context để suy luận giá trị phù hợp nhất.',
      'AI không chọn ngẫu nhiên mà luôn đưa ra lý do ngắn gọn giải thích vì sao chọn giá trị đó.',
    ],
    tips: ['Bấm nút "AI CẤU HÌNH TOÀN BỘ" để AI gợi ý toàn diện cho tất cả 21 mục.'],
  },
  {
    id: 'none-state',
    stepNumber: 7,
    title: 'Trạng thái NONE (Vô Hiệu Hóa)',
    titleEn: 'NONE State',
    summary: 'Loại bỏ hoàn toàn một yếu tố ra khỏi bài hát một cách có chủ đích.',
    content: [
      'Khi đặt trạng thái NONE, AI bị cấm tiệt việc sử dụng hoặc bổ sung yếu tố đó vào tác phẩm.',
      'Ví dụ: Nếu đặt Instruments = NONE, AI sẽ viết lời cho bài Acapella hoặc thuần thơ mộc mạc.',
    ],
    tips: ['Dùng NONE khi bạn muốn bài hát có tính tối giản cực đại (Minimalism).'],
  },
  {
    id: 'lock-state',
    stepNumber: 8,
    title: 'Trạng thái LOCK (Khóa Tuyệt Đối)',
    titleEn: 'LOCK State',
    summary: 'Bảo vệ lựa chọn của bạn không bị bất kỳ thuật toán AI nào thay đổi.',
    content: [
      'Khi bạn bật biểu tượng Khóa (LOCK) ở một mục, AI sẽ tôn trọng 100% lựa chọn đó.',
      'Các mục bị khóa sẽ làm mốc định hướng cho các mục AI_AUTO còn lại tự điều chỉnh theo.',
    ],
    tips: ['Nên khóa Genre và Emotion trước nếu bạn đã có ý tưởng phối khí rõ ràng.'],
  },
  {
    id: 'ai-scan',
    stepNumber: 9,
    title: 'AI Scan Context Engine',
    titleEn: 'AI Scan Engine',
    summary: 'Quá trình quét toàn diện câu chuyện, bộ nhớ dự án và 21 điều khiển trước khi viết.',
    content: [
      'Hệ thống trực quan hóa quá trình quét qua 10+ trạm kiểm soát.',
      'Master Song Context được tổng hợp từ Story + Memory + DNA + Controls + Compatibility Check.',
    ],
    tips: ['Quan sát màn hình Scan để biết AI đã hiểu đúng ý đồ của bạn hay chưa.'],
  },
  {
    id: 'blueprint',
    stepNumber: 10,
    title: 'Song Blueprint (Bản Thiết Kế Bài Hát)',
    titleEn: 'Song Blueprint',
    summary: 'Quy hoạch cấu trúc, mục đích kể chuyện và dynamic của từng phân đoạn.',
    content: [
      'AI không bao giờ viết lời ngay. Trước tiên, AI tạo ra Bản thiết kế chi tiết từng Section (Verse, Chorus, Bridge...).',
      'Mỗi Section được định nghĩa rõ: Narrative Purpose, Emotional Purpose, Dynamic Level, Vocal Direction.',
    ],
    tips: ['Xem tab Blueprint để hiểu được dụng ý bố cục trước khi đọc lời bài hát.'],
  },
  {
    id: 'meaning-layer',
    stepNumber: 11,
    title: 'Meaning Layer (Lớp Ý Nghĩa Ẩn)',
    titleEn: 'Meaning Layer',
    summary: 'Chuyển hóa "Ý nghĩa sâu sắc dài" thành "Câu hát ngắn gọn dễ nhớ".',
    content: [
      'Nguyên tắc: Intent → Meaning → Imagery → Emotional Subtext → Singable Lyric.',
      'Một tâm sự dài 3 câu có thể được đúc kết thành 1 câu hát đắt giá, giàu sức gợi.',
    ],
    tips: ['Xem tab Meaning Layer để đối chiếu tầng nghĩa sâu bên dưới từng câu hát.'],
  },
  {
    id: 'generate-song',
    stepNumber: 12,
    title: 'Quy Trình Sáng Tác Toàn Diện',
    titleEn: 'Generate Song Pipeline',
    summary: 'Chạy đường ống sáng tác 22 bước khép kín từ AI Scan đến Production Guide.',
    content: [
      'Bấm nút "TẠO BÀI HÁT", hệ thống sẽ kích hoạt toàn bộ bộ não sáng tác.',
      'Tiến trình gồm: Scan → Resolve → Blueprint → Meaning Layer → Title → Lyrics → Quality Check → Guide.',
    ],
    tips: ['Bạn có thể tạm dừng hoặc hủy tiến trình bất kỳ lúc nào.'],
  },
  {
    id: 'section-editor',
    stepNumber: 13,
    title: 'Chỉnh Sửa & Viết Lại Từng Đoạn',
    titleEn: 'Section Editor',
    summary: 'Chỉnh sửa sâu từng Verse hay Chorus mà không ảnh hưởng đến phần còn lại.',
    content: [
      'Mỗi đoạn nhạc đều có nút Edit và Regenerate riêng.',
      'Có các modifier thông minh: Tự nhiên hơn, Thi vị hơn, Xúc động hơn, Đổi hình ảnh, Mở rộng nghĩa, Kéo dài, Rút ngắn.',
    ],
    tips: ['Khóa các đoạn bạn đã ưng ý để AI không thay đổi khi viết lại toàn bài.'],
  },
  {
    id: 'regenerate',
    stepNumber: 14,
    title: 'Tái Tạo & Biến Thể Thông Minh',
    titleEn: 'Regenerate Section',
    summary: 'Sinh ra các phương án lời khác nhau cho cùng một đoạn nhạc.',
    content: [
      'Khi tái tạo một đoạn, AI vẫn bám sát chặt chẽ Blueprint và Meaning Layer của đoạn đó.',
    ],
    tips: ['Thử biến thể "More Natural" nếu cảm thấy lời hát hơi mang tính trừu tượng quá mức.'],
  },
  {
    id: 'versioning',
    stepNumber: 15,
    title: 'Hệ Thống Quản Lý Phiên Bản (Versioning)',
    titleEn: 'Version History',
    summary: 'Lưu trữ tự động mọi phiên bản (v1, v2, v3...) và so sánh Diff trực quan.',
    content: [
      'Mỗi lần tạo mới hoặc sửa lớn, một phiên bản mới được lưu trữ an toàn.',
      'Tính năng So Sánh hiển thị rõ: Thêm mới (Added), Thay đổi (Changed), Đã bỏ (Removed).',
      'Có thể Khôi phục (Restore) hoặc Nhân bản (Duplicate) bất kỳ lúc nào.',
    ],
    tips: ['Không bao giờ lo mất ý tưởng hay lời bài hát cũ.'],
  },
  {
    id: 'project-memory',
    stepNumber: 16,
    title: 'Bộ Nhớ Dự Án (Project Memory)',
    titleEn: 'Project Memory',
    summary: 'AI ghi nhớ phong cách đã định hình qua các bài hát trước để phát triển tiếp nối.',
    content: [
      'Khi bạn hoàn thiện và duyệt một bài hát, Project Memory sẽ cập nhật chỉ số Style DNA chung.',
      'Giúp các bài hát trong cùng Album có sự liên kết chặt chẽ về tinh thần nghệ thuật.',
    ],
    tips: ['Xem thống kê Project Memory trong trang chi tiết Dự Án.'],
  },
  {
    id: 'songwriting-guide',
    stepNumber: 17,
    title: 'Hướng Dẫn Phối & Chất Bài Hát (Production Guide)',
    titleEn: 'Production Guide',
    summary: 'Bản cẩm nang sản xuất 800–900 từ chi tiết cho ca sĩ, nhạc sĩ phối khí và Producer.',
    content: [
      'Được tạo ĐỒNG THỜI với bài hát từ chính Master Song Context.',
      'Phân tích 21 khía cạnh: Vai trò cụ thể từng nhạc cụ (Piano, Sáo trúc, Đàn tranh, Strings...), điểm vào/ra, Vocal Ad-libs, Hòa thanh, Dynamic và Mixing Direction.',
    ],
    tips: ['Copy bản Guide gửi trực tiếp cho Arranger / Sound Engineer của bạn.'],
  },
  {
    id: 'copy-export',
    stepNumber: 18,
    title: 'Sao Chép & Xuất Dữ Liệu',
    titleEn: 'Copy & Export',
    summary: 'Hỗ trợ Copy Full Song (Title + Section Labels + Lyrics), Lyrics Only, Guide và xuất TXT/MD/JSON.',
    content: [
      'Nút "COPY FULL SONG" luôn kèm Tên bài hát ở dòng đầu và đầy đủ nhãn đoạn [INTRO...], [VERSE 1...].',
      'Hỗ trợ xuất định dạng Markdown, File văn bản thuần (TXT) hoặc tệp JSON đầy đủ cấu trúc.',
    ],
    tips: ['Dùng định dạng Markdown để in ấn hoặc trình bày bài hát đẹp mắt.'],
  },
  {
    id: 'gemini-api',
    stepNumber: 19,
    title: 'Cấu Hình Gemini API',
    titleEn: 'Gemini API Settings',
    summary: 'Tích hợp Gemini 3 / 2.5 với proxy bảo mật server-side và kiểm tra kết nối.',
    content: [
      'Hệ thống tự động sử dụng Gemini API bảo mật được cấp từ nền tảng.',
      'Bạn cũng có thể nhập API Key riêng trong Cài đặt nếu muốn.',
      'Có nút "Kiểm Tra Kết Nối" (Test Connection) báo trạng thái tức thì.',
    ],
    tips: ['Key luôn được che chắn (Masked) trên giao diện để bảo vệ quyền riêng tư.'],
  },
  {
    id: 'themes-fonts',
    stepNumber: 20,
    title: '10 Giao Diện Phòng Thu & Font Chữ',
    titleEn: 'Themes & Fonts',
    summary: 'Tùy biến 10 bảng màu Studio và 10 font chữ hiển thị chuyên nghiệp.',
    content: [
      '10 Themes phong cách: Midnight Studio, Dark Music, Light Studio, Minimal White, Warm Vintage, Neon Night, Ocean, Forest, Sunset, Paper Writer.',
      'Tùy chỉnh riêng Font Giao diện, Font Lời bài hát và Font Trình soạn thảo.',
    ],
    tips: ['Chuyển sang "Paper Writer" hoặc "Warm Vintage" để có cảm giác sáng tác thi ca ấm cúng.'],
  },
  {
    id: 'ai-settings',
    stepNumber: 21,
    title: '5 Thiết Lập Trí Tuệ Nhân Tạo',
    titleEn: '5 AI Settings',
    summary: 'Tinh chỉnh độ tự do sáng tạo, mức độ chống sáo rỗng (Anti-Cliché) và mật độ hình ảnh.',
    content: [
      '1. AI Creative Freedom (Thấp, Vừa, Cao)',
      '2. AI Cliché Protection (Tắt, Cân bằng, Nghiêm ngặt)',
      '3. AI Imagery Level (Trực diện, Cân bằng, Thi vị, Điện ảnh)',
      '4. AI Revision Intensity (Nhẹ nhàng, Tiêu chuẩn, Sâu sắc)',
      '5. AI Context Memory (Bài hiện tại, Dự án hiện tại, Dự án + Style DNA)',
    ],
    tips: ['Đặt Cliché Protection ở mức "Strict" để loại bỏ hoàn toàn các cụm từ sáo mòn.'],
  },
  {
    id: 'autosave',
    stepNumber: 22,
    title: 'Tự Động Lưu & Khôi Phục Dữ Liệu',
    titleEn: 'Autosave & Persistence',
    summary: 'Cơ chế lưu trữ Local-first liên tục, không bao giờ mất bài khi tải lại trang.',
    content: [
      'Mọi câu chuyện, lựa chọn 21 controls, bản thảo lời bài hát, hướng dẫn phối khí đều được tự động lưu vào IndexedDB / LocalStorage.',
      'Khi bạn tải lại trình duyệt, toàn bộ trạng thái làm việc sẽ được phục hồi tức thì.',
    ],
    tips: ['Bạn có thể sao lưu dữ liệu ra file JSON từ trang Cài đặt.'],
  },
];
