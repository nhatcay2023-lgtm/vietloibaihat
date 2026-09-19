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
    id: 'idea_6_15_01',
    title: 'Tiếng Trống Trường Giục Giã',
    genre: 'Upbeat School Pop',
    tempo: '116 BPM',
    mood: 'Háo hức, rộn ràng, tự hào',
    vocal: 'Hợp ca học sinh nam nữ trong sáng',
    instruments: 'Snare drum, Piano, Brass, Acoustic Guitar',
    summary: 'Âm vang tiếng trống tựu trường mở ra năm học mới rực rỡ ước mơ và tình bạn thân thương.',
    tags: ['Tựu trường', 'Tiếng trống', 'Khởi đầu', 'Thầy cô'],
    lines: [
      '1. Cốt truyện: Ngày khai giảng mùa thu, tiếng trống trường vang lên thôi thúc bước chân học trò bước vào năm học mới.',
      '2. Nhân vật: Em học sinh khăn quàng đỏ rực rỡ và bạn bè cùng trang lứa.',
      '3. Khởi đầu: Tiếng gió thu thổi nhẹ qua hàng phượng vĩ già, tà áo trắng tinh khôi tề tựu dưới sân cờ.',
      '4. Bước chuyển: Lời căn dặn ân cần của thầy hiệu trưởng và ánh mắt hy vọng của thầy cô giáo.',
      '5. Điệp khúc: "Tùng tùng tùng tiếng trống trường ngân vang, giục giã ước mơ bay cao tới những chân trời tri thức."',
      '6. Phát triển: Từng trang sách mới thơm mùi mực, những giờ thảo luận sôi nổi và bài toán khó cùng giải.',
      '7. Lắng đọng: Nhớ ơn thầy cô đã tận tụy nâng bước từng thế hệ học trò trưởng thành.',
      '8. Cao trào & Kết: Hợp xướng học sinh đồng thanh cất cao khúc ca quyết tâm đạt thành tích xuất sắc.',
      '9. Phong cách hòa âm: Pop học đường tươi sáng, tiếng trống trường giòn tan làm điểm nhấn chủ đạo.',
      '10. Cảm xúc chủ đạo: Tràn đầy nhiệt huyết, háo hức khám phá chân trời tri thức mới.',
      '11. Vocal & Nhả chữ: Trong trẻo, dõng dạc, giàu niềm tin và năng lượng tuổi học trò.',
      '12. Nhạc cụ trung tâm: Trống quân hành kết hợp tiếng đàn Piano rải nhịp tưng bừng.',
      '13. Ý nghĩa: Tôn vinh giá trị của giáo dục, tình thầy trò và tinh thần hiếu học của học sinh Việt Nam.',
      '14. Câu Hook đắt giá: "Tiếng trống trường giục giã ước mơ bay xa, trang sách hồng rạng rỡ tuổi hoa niên!"',
      '15. Không gian hình ảnh: Sân trường rợp bóng cây bàng lá xanh, cờ đỏ sao vàng tung bay trong gió thu.'
    ]
  },
  {
    id: 'idea_6_15_02',
    title: 'Chiếc Khăn Quàng Đỏ Thắm',
    genre: 'Youth Anthem / Marching Pop',
    tempo: '118 BPM',
    mood: 'Tự hào, trang nghiêm, phấn khởi',
    vocal: 'Đội Thiếu niên Tiền phong hợp xướng',
    instruments: 'Kèn Trumpet, Snare drum, Strings hào sảng',
    summary: 'Khoảnh khắc thiêng liêng khi em được kết nạp Đội, tự hào mang trên vai chiếc khăn quàng đỏ thắm.',
    tags: ['Đội viên', 'Khăn quàng đỏ', 'Tự hào', 'Trách nhiệm'],
    lines: [
      '1. Cốt truyện: Buổi lễ kết nạp Đội trang nghiêm, em vinh dự được thầy Tổng phụ trách thắt chiếc khăn quàng đỏ lên vai.',
      '2. Nhân vật: Đội viên mới gương mẫu và các anh chị phụ trách.',
      '3. Khởi đầu: Đứng nghiêm trang dưới cờ Tổ quốc, bàn tay nhỏ giơ cao chào Đội.',
      '4. Bước chuyển: Màu khăn đỏ thắm như một phần lá cờ Tổ quốc nhắc nhở em luôn chăm ngoan.',
      '5. Điệp khúc: "Khăn quàng đỏ thắm trên vai em, bay trong nắng sớm nhắc em học hành chăm chỉ, xứng danh cháu ngoan Bác Hồ."',
      '6. Phát triển: Làm nghìn việc tốt, giúp đỡ bạn bè cùng tiến bộ, giữ gìn vệ sinh trường lớp.',
      '7. Lắng đọng: Lời hứa danh dự của người đội viên trước thầy cô và bè bạn.',
      '8. Cao trào & Kết: Tiếng kèn đồng ngân vang dõng dạc trong tiếng vỗ tay rền vang của toàn trường.',
      '9. Phong cách hòa âm: Nhạc nghi thức Đội kết hợp Pop giao hưởng hiện đại, hào hùng.',
      '10. Cảm xúc chủ đạo: Tự hào dân tộc, ý thức trách nhiệm và lòng yêu quê hương đất nước.',
      '11. Vocal & Nhả chữ: Rõ ràng, dứt khoát, mang tinh thần kiên định và trong sáng.',
      '12. Nhạc cụ trung tâm: Kèn Trumpet dõng dạc và bộ gõ hành tiến nhịp nhàng.',
      '13. Ý nghĩa: Bồi đắp lý tưởng sống đẹp, lòng yêu nước và ý thức rèn luyện đạo đức cho thiếu niên.',
      '14. Câu Hook đắt giá: "Màu khăn quàng thắm mãi tuổi thơ em, vươn cánh bay tới tương lai rạng ngời!"',
      '15. Không gian hình ảnh: Sân trường trang nghiêm, hàng ngàn cánh tay búp măng giơ cao chào cờ Tổ quốc.'
    ]
  },
  {
    id: 'idea_6_15_03',
    title: 'Cây Bàng Góc Sân Trường',
    genre: 'Nostalgic Acoustic Pop',
    tempo: '82 BPM',
    mood: 'Bồi hồi, thân thương, hoài niệm',
    vocal: 'Giọng hát tuổi teen truyền cảm',
    instruments: 'Acoustic Guitar, Piano mộc, Cello nhẹ nhàng',
    summary: 'Nhân chứng thời gian qua bốn mùa xuân hạ thu đông chứng kiến bao thế hệ học trò trưởng thành.',
    tags: ['Cây bàng', 'Bốn mùa', 'Kỷ niệm', 'Sân trường'],
    lines: [
      '1. Cốt truyện: Cây bàng già góc sân lặng lẽ thay lá qua bốn mùa, cất giữ bao tiếng cười và bí mật tuổi học trò.',
      '2. Nhân vật: Cây bàng cổ thụ và nhóm bạn thân dưới tán lá.',
      '3. Khởi đầu: Mùa đông trơ trụi cành khẳng khiu, rồi mùa xuân đâm chồi búp non như ngọn nến xanh.',
      '4. Bước chuyển: Mùa hè lá xòe rộng như chiếc ô khổng lồ che bóng mát cho giờ ra chơi rộn rã.',
      '5. Điệp khúc: "Cây bàng ơi đứng đó qua bao mùa, che mát tuổi thơ chúng em lớn khôn từng ngày theo năm tháng."',
      '6. Phát triển: Mùa thu lá bàng chuyển sang sắc đỏ tía, rụng xuống thành những chiếc quạt màu kỳ diệu.',
      '7. Lắng đọng: Những dòng chữ khắc vội tên bạn thân và những kỷ niệm không bao giờ phai mờ.',
      '8. Cao trào & Kết: Tiếng chim chuyền cành cất lên câu hát vĩnh cửu của tình bạn học đường.',
      '9. Phong cách hòa âm: Ballad học trò nhẹ nhàng, giai điệu mượt mà sâu lắng.',
      '10. Cảm xúc chủ đạo: Lưu luyến, trân trọng những điều bình dị gắn liền với tuổi hoa niên.',
      '11. Vocal & Nhả chữ: Tự sự, ấm áp, sâu sắc như lời tâm tình với người bạn tri kỷ già.',
      '12. Nhạc cụ trung tâm: Đàn Acoustic Guitar mộc kết hợp tiếng Piano trầm bổng.',
      '13. Ý nghĩa: Nhắc nhở học sinh luôn trân quý những kỷ niệm học đường và cội nguồn tuổi thơ.',
      '14. Câu Hook đắt giá: "Dưới bóng bàng xưa tuổi thơ êm đềm, khắc ghi mãi mãi bao nhiêu kỷ niệm đẹp!"',
      '15. Không gian hình ảnh: Tán bàng xanh ngắt đan xen những chiếc lá đỏ rực rỡ trên nền trời thu trong vắt.'
    ]
  },
  {
    id: 'idea_6_15_04',
    title: 'Người Lái Đò Thầm Lặng',
    genre: 'Emotional Ballad / Tình Thầy Trò',
    tempo: '75 BPM',
    mood: 'Tri ân, xúc động, kính trọng',
    vocal: 'Giọng ca học sinh sâu lắng, tình cảm',
    instruments: 'Grand Piano, Strings Ensemble, Flute da diết',
    summary: 'Lời tri ân sâu sắc gửi đến người thầy cô giáo đã tận tụy đưa bao chuyến đò tri thức qua sông.',
    tags: ['Tri ân', 'Thầy cô', '20/11', 'Biết ơn'],
    lines: [
      '1. Cốt truyện: Hình ảnh người thầy với mái tóc điểm bạc bên trang giáo án đêm khuya, nâng bước học trò vào đời.',
      '2. Nhân vật: Người thầy cô giáo tận tụy và người học trò trưởng thành trở về thăm trường xưa.',
      '3. Khởi đầu: Bụi phấn rơi trắng bảng đen, giọng thầy ấm áp giảng từng bài học làm người.',
      '4. Bước chuyển: Những lời răn dạy nghiêm khắc nhưng chan chứa tình yêu thương bao la như cha mẹ.',
      '5. Điệp khúc: "Thầy là người lái đò thầm lặng chở chúng em qua sông tri thức bao la, dẫu tháng năm tóc thầy phai bạc."',
      '6. Phát triển: Học trò bay đi muôn phương dựng xây đất nước, thầy vẫn ở lại bến đò xưa đón thế hệ mới.',
      '7. Lắng đọng: Đóa hoa điểm mười tươi thắm dâng tặng thầy cô với tất cả lòng kính yêu vô hạn.',
      '8. Cao trào & Kết: Dàn dây bùng nổ trong khúc hát tri ân nghẹn ngào tình thầy trò thiêng liêng.',
      '9. Phong cách hòa âm: Pop Ballad thính phòng sang trọng, đầy tính truyền cảm và lay động tâm can.',
      '10. Cảm xúc chủ đạo: Xúc động, kính trọng, lòng biết ơn sâu sắc khắc ghi mãi trong tim.',
      '11. Vocal & Nhả chữ: Đầy đặn cảm xúc, ngân dài da diết ở các câu hát tôn vinh người thầy.',
      '12. Nhạc cụ trung tâm: Đàn Grand Piano làm nền hòa quyện cùng dàn nhạc dây vĩ cầm du dương.',
      '13. Ý nghĩa: Tôn sư trọng đạo, đạo lý muôn đời của dân tộc Việt Nam gửi gắm tới thầy cô giáo.',
      '14. Câu Hook đắt giá: "Bến đò tri thức thầy đưa bao người, ơn thầy cô mãi ngàn đời không quên!"',
      '15. Không gian hình ảnh: Bàn giáo viên với lọ hoa hồng nhung, ánh đèn bàn soi sáng mái đầu bạc của thầy.'
    ]
  },
  {
    id: 'idea_6_15_05',
    title: 'Mùa Mực Tím Và Lưu Bút',
    genre: 'Teen Pop Ballad',
    tempo: '80 BPM',
    mood: 'Bâng khuâng, tiếc nuối, trong sáng',
    vocal: 'Song ca nam nữ tuổi học trò',
    instruments: 'Piano, Acoustic Guitar, Wind chimes, Cello',
    summary: 'Những dòng lưu bút mực tím chuyền tay nhau ngày chia tay lớp 9 trước ngưỡng cửa cấp ba.',
    tags: ['Lưu bút', 'Mực tím', 'Chia tay', 'Cấp hai'],
    lines: [
      '1. Cốt truyện: Cuối năm lớp 9, cuốn sổ lưu bút chuyền tay nhau ép cánh phượng hồng và những lời chúc thi đậu.',
      '2. Nhân vật: Đôi bạn cùng bàn sắp phải chia xa mỗi người một ngôi trường mới.',
      '3. Khởi đầu: Nét chữ nắn nót mực tím trên trang giấy trắng tinh thơm mùi kỷ niệm.',
      '4. Bước chuyển: Những giọt nước mắt vội lau, những cái ôm siết chặt dặn nhau không được quên nhau.',
      '5. Điệp khúc: "Trang lưu bút viết dòng chữ thân thương, ép cánh phượng hồng gửi lại mùa hạ ngây ngô năm ấy."',
      '6. Phát triển: Nhớ những lần cùng nhau giải bài tập nhóm, những buổi trực nhật đầy ắp tiếng cười đùa.',
      '7. Lắng đọng: Giờ chia tay đã điểm, tiếng ve râm ran ngoài cửa sổ như lời hát tiễn biệt.',
      '8. Cao trào & Kết: Lời hẹn ước ngày gặp lại khi cả hai đã chạm tới ước mơ của chính mình.',
      '9. Phong cách hòa âm: Ballad học đường ngọt ngào, giàu chất thơ và sự bâng khuâng tuổi mới lớn.',
      '10. Cảm xúc chủ đạo: Man mác buồn, lưu luyến nhưng đầy ắp niềm tin và hy vọng về tương lai.',
      '11. Vocal & Nhả chữ: Tình cảm, tha thiết, tiếng thở nhẹ nhàng như lời thì thầm chia tay.',
      '12. Nhạc cụ trung tâm: Đàn Piano du dương phối hợp cùng tiếng đàn Cello trầm buồn dịu êm.',
      '13. Ý nghĩa: Trân trọng những năm tháng học trò trong sáng và tình bạn chân thành thuở thiếu thời.',
      '14. Câu Hook đắt giá: "Lưu bút chuyền tay giữ trọn nụ cười, mai này cách xa nhớ mãi về nhau!"',
      '15. Không gian hình ảnh: Cuốn sổ bọc bìa hoa khô, cánh phượng vĩ ép khô đỏ thắm bên khung cửa sổ lớp học vắng.'
    ]
  }
];

// Helper to fill the remaining up to 30 items
const titles6to15 = [
  'Chiếc Xe Đạp Đến Trường', 'Bài Toán Khó Và Nụ Cười Bạn Thân', 'Mùa Hè Của Ve Sầu', 'Ước Mơ Bay Vào Không Gian',
  'Đội Trưởng Bóng Đá Nhí', 'Góc Phố Giờ Tan Trường', 'Lời Xin Lỗi Bạn Cùng Bàn', 'Hội Trại Thiếu Nhi Vui Nhộn',
  'Ngày Đầu Tiên Vào Lớp Sáu', 'Tiếng Đàn Guitar Trong Giờ Ra Chơi', 'Cuộc Thi Rung Chuông Vàng', 'Chiếc Ba Lô Nặng Trĩu Ước Mơ',
  'Ngôi Nhà Trên Cây Của Nhóm Bạn', 'Chuyến Đi Cắm Trại Đầu Tiên', 'Học Sinh Giỏi Hay Học Trò Ngoan', 'Mùa Thi Căng Thẳng',
  'Bạn Thân Khác Giới Tuổi 14', 'Cơn Mưa Rào Rửa Sạch Sân Trường', 'Hộp Bút Màu Và Ước Mơ Kiến Trúc', 'Tiếng Hát Dưới Cờ Đầu Tuần',
  'Bức Thư Gửi Tương Lai Tuổi 20', 'Chuyến Xe Buýt Số Bảy Đi Học', 'Tấm Huy Chương Thể Thao Đầu Đời', 'Ngọn Đèn Bàn Đêm Ôn Bài',
  'Hẹn Gặp Lại Tuổi Học Trò'
];

export const IDEAS_6_TO_15: SongIdea[] = [
  ...rawIdeas.map(r => ({
    id: r.id,
    title: r.title,
    ageGroup: '6 - 15 tuổi',
    categoryId: '6-15' as const,
    categoryLabel: 'Học Đường (6 - 15 tuổi)',
    genre: r.genre,
    tempo: r.tempo,
    mood: r.mood,
    vocal: r.vocal,
    instruments: r.instruments,
    shortSummary: r.summary,
    tags: r.tags,
    detailedDescription: r.lines.join('\n')
  })),
  ...titles6to15.map((t, idx) => {
    const num = idx + 6;
    const idStr = num < 10 ? `0${num}` : `${num}`;
    return {
      id: `idea_6_15_${idStr}`,
      title: t,
      ageGroup: '6 - 15 tuổi',
      categoryId: '6-15' as const,
      categoryLabel: 'Học Đường (6 - 15 tuổi)',
      genre: 'School Pop / Acoustic Ballad',
      tempo: '105 BPM',
      mood: 'Hồn nhiên, rộn ràng, giàu khát vọng',
      vocal: 'Giọng hát học sinh nam/nữ trong trẻo',
      instruments: 'Acoustic Guitar, Piano, Snare Drum, Strings',
      shortSummary: `Khám phá câu chuyện "${t}" đầy ắp kỷ niệm đẹp tuổi học trò, tình bạn thân thiết và ước mơ tươi sáng.`,
      tags: ['Học đường', 'Tuổi thơ', 'Ước mơ', 'Bạn bè'],
      detailedDescription: [
        `1. Cốt truyện: Câu chuyện "${t}" khắc họa chân thực những khoảnh khắc đáng nhớ của lứa tuổi học sinh 6-15 tuổi.`,
        `2. Nhân vật: Những cô cậu học trò tinh nghịch, giàu ước mơ và luôn kề vai sát cánh bên nhau.`,
        `3. Khởi đầu: Tiếng chuông báo hiệu giờ học bắt đầu, ánh nắng sớm rọi qua tán bàng xanh mướt.`,
        `4. Bước chuyển: Những khó khăn, thử thách trong học tập và rèn luyện được vượt qua nhờ tình bạn.`,
        `5. Điệp khúc: "Tuổi học trò đẹp tựa ngàn ánh sao, dẫu mai xa cách vẫn nhớ về mái trường xưa thân yêu."`,
        `6. Phát triển: Cùng nhau chia sẻ từng mẩu bánh mì, từng trang vở ghi chép và những bí mật nhỏ.`,
        `7. Lắng đọng: Lời căn dặn của thầy cô và ước vọng bay cao vươn tới những vì sao tương lai.`,
        `8. Cao trào & Kết: Nhịp trống dồn vang cùng khúc hát hợp ca vang dội của cả khối lớp.`,
        `9. Phong cách hòa âm: Pop học đường tươi sáng, giai điệu bắt tai, tiết tấu rộn rã đầy sức sống.`,
        `10. Cảm xúc chủ đạo: Hân hoan, trong sáng, nuôi dưỡng hoài bão và tình bạn học đường chân thành.`,
        `11. Vocal & Nhả chữ: Rõ ràng, giàu cảm xúc tự nhiên, phát âm chuẩn mực và tràn đầy năng lượng.`,
        `12. Nhạc cụ trung tâm: Đàn Acoustic Guitar mộc mạc hòa cùng tiếng đàn Piano tươi vui.`,
        `13. Ý nghĩa: Tôn vinh vẻ đẹp trong sáng của tuổi học đường và lòng biết ơn mái trường, thầy cô.`,
        `14. Câu Hook đắt giá: "${t} - ghi dấu thanh xuân tuổi thơ tuyệt vời nhất của chúng mình!"`,
        `15. Không gian hình ảnh: Sân trường rợp bóng cây xanh, hành lang ngập tràn tiếng cười đùa rộn rã.`
      ].join('\n')
    };
  })
];
