/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { SongIdea } from '../../types';

const rawIdeas: Array<{
  id: string;
  title: string;
  genre: string;
  tempo: string;
  mood: string;
  vocal: string;
  instruments: string;
  summary: string;
  lines: string[];
  tags: string[];
}> = [
  {
    id: 'idea_15_25_01',
    title: 'Rung Động Mùa Mưa Đầu Tiên',
    genre: 'Indie Pop Ballad',
    tempo: '78 BPM',
    mood: 'Ngọt ngào, bỡ ngỡ, lãng mạn',
    vocal: 'Giọng nam/nữ trầm ấm, thì thầm',
    instruments: 'Acoustic Guitar, Rhodes Piano, Ambient Reverb Pad',
    summary: 'Rung cảm đầu đời khi đứng chung chiếc ô dưới hiên quán cà phê nhỏ trú cơn mưa rào bất chợt.',
    tags: ['Tình đầu', 'Mùa mưa', 'Rung động', 'Tuổi 18'],
    lines: [
      '1. Cốt truyện: Hai người bạn cùng lớp trú mưa dưới mái hiên cũ, ngượng ngùng khi chạm nhẹ bàn tay dưới ô.',
      '2. Nhân vật: Chàng trai 18 tuổi nhút nhát và cô bạn gái có nụ cười tỏa nắng.',
      '3. Khởi đầu: Tiếng mưa rào xối xả trên mái tôn, mùi đất ẩm bốc lên quyện với mùi hoa sữa đầu mùa.',
      '4. Bước chuyển: Tim đập rộn ràng khi khoảng cách hai người thu hẹp lại, câu chuyện ngập ngừng đứt quãng.',
      '5. Điệp khúc: "Cơn mưa rào vô tình mang em đến gần bên, tim anh lỡ nhịp rung động mối tình đầu ngây ngô."',
      '6. Phát triển: Những tin nhắn vụng về thâu đêm, chiếc tai nghe chia đôi một bài hát indie nhẹ nhàng.',
      '7. Lắng đọng: Ước gì cơn mưa kéo dài mãi để được đứng cạnh nhau thêm một chút nữa.',
      '8. Cao trào & Kết: Mưa tạnh, ánh cầu vồng xuất hiện cùng lời hẹn hò đầu tiên bẽn lẽn được thốt ra.',
      '9. Phong cách hòa âm: Indie Ballad ấm áp, âm thanh Rhodes Piano mượt mà tạo không gian hoài niệm.',
      '10. Cảm xúc chủ đạo: Xao xuyến, ngọt ngào, cảm giác rung động tinh khôi nhất của tuổi trẻ.',
      '11. Vocal & Nhả chữ: Thì thầm, hơi thở tự nhiên, luyến láy nhẹ nhàng như lời tự sự nội tâm.',
      '12. Nhạc cụ trung tâm: Đàn Acoustic Guitar gảy từng hợp âm 7 dịu êm và tiếng mưa rơi mờ ảo.',
      '13. Ý nghĩa: Lưu giữ vẻ đẹp trong veo của mối tình đầu, kỷ niệm đẹp nhất đời người.',
      '14. Câu Hook đắt giá: "Rung động đầu tiên dưới cơn mưa năm ấy, hóa thành chấp niệm dịu dàng suốt thanh xuân!"',
      '15. Không gian hình ảnh: Quán cà phê đèn vàng mờ, giọt nước mưa chảy tràn trên ô kính phản chiếu bóng hai người.'
    ]
  },
  {
    id: 'idea_15_25_02',
    title: 'Thanh Xuân Ở Giảng Đường',
    genre: 'Youth Pop Rock',
    tempo: '120 BPM',
    mood: 'Nhiệt huyết, tự do, đam mê',
    vocal: 'Giọng ca trẻ trung, bùng nổ năng lượng',
    instruments: 'Electric Guitar, Drum Kit, Synth Lead, Bass',
    summary: 'Những năm tháng đại học rực rỡ với đam mê tuổi trẻ, đồ án tốt nghiệp và những người bạn cùng phòng.',
    tags: ['Sinh viên', 'Giảng đường', 'Đam mê', 'Tuổi 20'],
    lines: [
      '1. Cốt truyện: Ký ức về thời sinh viên trong căn phòng trọ nhỏ, mì gói đêm khuya và ước mơ cháy bỏng đổi thay cuộc đời.',
      '2. Nhân vật: Nhóm sinh viên trẻ đầy nhiệt huyết và khát vọng lập thân.',
      '3. Khởi đầu: Tiếng xe buýt sớm đến trường và tiếng chuông báo thức rộn rã lúc 6 giờ sáng.',
      '4. Bước chuyển: Những đêm thức trắng chạy deadline, những thất bại đầu đời nhưng không hề nản chí.',
      '5. Điệp khúc: "Thanh xuân rực rỡ dưới giảng đường thân yêu, ta cùng cháy hết mình cho đam mê và hoài bão lớn."',
      '6. Phát triển: Chuyến đi phượt xuyên đêm săn mây, cây đàn guitar bập bùng bên đống lửa trại.',
      '7. Lắng đọng: Nhìn lại hành trình đã qua, biết ơn những người bạn đã đồng hành vượt qua gian khó.',
      '8. Cao trào & Kết: Tiếng trống bùng nổ, mũ cử nhân tung bay lên trời xanh trong ngày lễ tốt nghiệp.',
      '9. Phong cách hòa âm: Pop Rock sôi động, tiết tấu dồn dập, giai điệu bắt tai truyền cảm hứng.',
      '10. Cảm xúc chủ đạo: Tự tin, nhiệt huyết, khát khao khẳng định giá trị bản thân.',
      '11. Vocal & Nhả chữ: Khỏe khoắn, phóng khoáng, lên những nốt cao nội lực đầy năng lượng.',
      '12. Nhạc cụ trung tâm: Đàn Electric Guitar riff sôi nổi và dàn trống rock uy lực.',
      '13. Ý nghĩa: Cổ vũ tinh thần dám nghĩ dám làm, sống hết mình với lý tưởng thanh xuân.',
      '14. Câu Hook đắt giá: "Tuổi hai mươi rực rỡ không bao giờ hối tiếc, ta viết tiếp câu chuyện của cuộc đời mình!"',
      '15. Không gian hình ảnh: Hội trường lớn rực rỡ ánh đèn, những nụ cười rạng rỡ và tấm bằng tốt nghiệp cầm trên tay.'
    ]
  }
];

const titles15to25 = [
  'Gửi Người Tôi Từng Yêu Năm 17 Tuổi', 'Chuyến Xe Buýt Cuối Cùng Của Ngày', 'Cà Phê Sữa Đá Và Phố Đêm',
  'Hẹn Em Ở Mùa Hoa Dã Quỳ', 'Bức Thư Tình Viết Dở', 'Khoảng Cách Hai Thành Phố',
  'Lời Chưa Nói Sau Lưng Em', 'Trưởng Thành Là Khi Biết Khóc Một Mình', 'Nốt Nhạc Độc Thoại Trong Đêm',
  'Đi Phượt Cùng Tuổi Trẻ', 'Thất Tình Giữa Sài Gòn Hoa Lệ', 'Mối Tình Sinh Viên Ngọt Ngào',
  'Ước Mơ Vươn Ra Biển Lớn', 'Gặp Lại Nhau Sau Bốn Năm Đại Học', 'Chiếc Vòng Tay Đôi Bằng Bạc',
  'Gió Đổi Mùa Trên Cầu Long Biên', 'Ngày Em Bước Sang Một Thành Phố Khác', 'Ngắm Hoàng Hôn Hồ Tây',
  'Thanh Âm Phố Cổ Chiều Thu', 'Độc Thân Nhưng Không Cô Đơn', 'Áp Lực Phỏng Vấn Xin Việc Đầu Tiên',
  'Tình Yêu Qua Màn Hình Điện Thoại', 'Tạm Biệt Thời Ngây Thơ', 'Bài Hát Viết Riêng Cho Em',
  'Giai Điệu Tuổi Hai Mươi Ba', 'Đoạn Tuyến Rẽ Của Tuổi Trẻ', 'Trở Về Sau Những Vấp Ngã',
  'Ánh Mắt Đầu Tiên Ta Chạm Nhau'
];

export const IDEAS_15_TO_25: SongIdea[] = [
  ...rawIdeas.map(r => ({
    id: r.id,
    title: r.title,
    ageGroup: '15 - 25 tuổi',
    categoryId: '15-25' as const,
    categoryLabel: 'Tình Yêu & Thanh Xuân (15 - 25 tuổi)',
    genre: r.genre,
    tempo: r.tempo,
    mood: r.mood,
    vocal: r.vocal,
    instruments: r.instruments,
    shortSummary: r.summary,
    tags: r.tags,
    detailedDescription: r.lines.join('\n')
  })),
  ...titles15to25.map((t, idx) => {
    const num = idx + 3;
    const idStr = num < 10 ? `0${num}` : `${num}`;
    return {
      id: `idea_15_25_${idStr}`,
      title: t,
      ageGroup: '15 - 25 tuổi',
      categoryId: '15-25' as const,
      categoryLabel: 'Tình Yêu & Thanh Xuân (15 - 25 tuổi)',
      genre: 'V-Pop Ballad / R&B Chill',
      tempo: '76 BPM',
      mood: 'Lãng mạn, day dứt, sâu lắng, nhiệt huyết',
      vocal: 'Giọng ca trẻ trung, giàu kỹ thuật và biểu cảm',
      instruments: 'Acoustic Guitar, Piano, Synth Pad, R&B Drum Loop',
      shortSummary: `Khám phá câu chuyện "${t}" về tình yêu tuổi trẻ, những rung động đầu đời và hành trình tự khám phá bản thân.`,
      tags: ['Tình yêu', 'Thanh xuân', 'Tuổi trẻ', 'Cảm xúc'],
      detailedDescription: [
        `1. Cốt truyện: Khắc họa trọn vẹn chủ đề "${t}" của tuổi thanh xuân từ 15 đến 25 tuổi với muôn vàn sắc thái.`,
        `2. Nhân vật: Người trẻ mang trong mình trái tim nồng nhiệt, khát khao yêu và được yêu.`,
        `3. Khởi đầu: Không gian quen thuộc của góc phố, quán quen hoặc giảng đường gợi mở dòng ký ức.`,
        `4. Bước chuyển: Sự giằng xé giữa tình yêu, ước mơ sự nghiệp và những biến cố đầu đời.`,
        `5. Điệp khúc: "Thanh xuân dẫu có muộn màng hay vội vã, ta vẫn biết ơn vì đã gặp được nhau giữa biển người."`,
        `6. Phát triển: Từng mảnh ghép kỷ niệm hiện về rõ nét qua từng con đường, bài hát và ánh mắt trao nhau.`,
        `7. Lắng đọng: Lặng lẽ nhận ra trưởng thành là khi biết mỉm cười chấp nhận mọi lựa chọn của số phận.`,
        `8. Cao trào & Kết: Giọng hát bùng nổ lên cao trào trước khi dịu lại với giai điệu êm đềm sâu lắng.`,
        `9. Phong cách hòa âm: Hiện đại, kết hợp hài hòa giữa Pop Ballad cảm xúc và chất R&B mượt mà.`,
        `10. Cảm xúc chủ đạo: Vừa nồng nàn say đắm, vừa man mác nuối tiếc nhưng luôn tràn ngập niềm tin.`,
        `11. Vocal & Nhả chữ: Rõ lời, xử lý hơi thở tinh tế, luyến láy hiện đại chạm đến trái tim người nghe.`,
        `12. Nhạc cụ trung tâm: Đàn Piano acoustic kết hợp tiếng đàn Guitar rải nhịp nhàng.`,
        `13. Ý nghĩa: Tôn vinh vẻ đẹp của tình yêu chân thành và sức sống mãnh liệt của tuổi trẻ.`,
        `14. Câu Hook đắt giá: "${t} - ghi lại khoảnh khắc thanh xuân đẹp nhất đời người!"`,
        `15. Không gian hình ảnh: Con phố đêm ngập ánh đèn vàng lấp lánh, làn gió thu se lạnh thổi qua mái tóc.`
      ].join('\n')
    };
  })
];
