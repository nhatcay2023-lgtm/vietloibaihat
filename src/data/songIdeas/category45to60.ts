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
    id: 'idea_45_60_01',
    title: 'Chén Trà Tri Kỷ Tuổi Năm Mươi',
    genre: 'Vietnamese Trữ Tình / Acoustic Folk',
    tempo: '68 BPM',
    mood: 'Thanh cao, hoài niệm, sâu sắc',
    vocal: 'Giọng nam trung ấm áp, truyền cảm',
    instruments: 'Đàn Tranh, Sáo Trúc, Acoustic Nylon Guitar, Tiếng Rót Nước',
    summary: 'Hai người bạn già hàn huyên bên chén trà mạn, ôn lại một thời đạn bom khốn khó và mỉm cười cùng năm tháng.',
    tags: ['Tri kỷ', 'Tuổi 50', 'Trà đạo', 'Tình bạn già'],
    lines: [
      '1. Cốt truyện: Đôi bạn thân từ thuở thanh niên gặp lại ở tuổi ngũ tuần, ngồi bên bàn cờ tướng và ấm trà thơm.',
      '2. Nhân vật: Hai người bạn tri kỷ tóc đã hoa râm, cùng nhìn nhau hiểu trọn nỗi lòng.',
      '3. Khởi đầu: Tiếng nước sôi reo tí tách và hương trà lài phảng phất trong buổi chiều thu tĩnh mịch.',
      '4. Bước chuyển: Nhớ lại những năm tháng tuổi trẻ xông pha, cùng chia nhau điếu thuốc, củ khoai thời gian khó.',
      '5. Điệp khúc: "Chén trà tri kỷ cạn rồi lại vơi, dẫu cho năm tháng đổi thay tình bạn xưa vẫn vẹn nguyên một tấm lòng."',
      '6. Phát triển: Giờ đây con cái đã lớn khôn, danh lợi như mây khói, chỉ có tình bằng hữu là sáng mãi.',
      '7. Lắng đọng: Một nụ cười ý vị thay cho ngàn lời nói, cùng ngắm nhìn lá vàng rơi ngoài thềm xưa.',
      '8. Cao trào & Kết: Tiếng sáo trúc vút lên thanh thoát như trút bỏ mọi vướng bận trần gian.',
      '9. Phong cách hòa âm: Âm hưởng nhạc trữ tình dân gian Việt Nam, mộc mạc và thanh tao.',
      '10. Cảm xúc chủ đạo: Ấm áp tình người, hoài niệm trong sáng, thanh thản và trân trọng tình tri kỷ.',
      '11. Vocal & Nhả chữ: Khoan thai, thong dong, phát âm tròn vành rõ chữ mang cốt cách tao nhã.',
      '12. Nhạc cụ trung tâm: Đàn Tranh gẩy từng khúc nhạc tao nhã kết hợp tiếng sáo trúc réo rắt.',
      '13. Ý nghĩa: Tôn vinh tình bạn tri kỷ vượt qua thử thách của thời gian và danh lợi thế tục.',
      '14. Câu Hook đắt giá: "Rót chén trà thơm mừng ngày hạnh ngộ, tri kỷ nửa đời quý tựa ngàn vàng!"',
      '15. Không gian hình ảnh: Hiên nhà cổ kính rợp bóng giàn hoa giấy, bàn cờ tướng gỗ và ấm trà gốm Bát Tràng.'
    ]
  },
  {
    id: 'idea_45_60_02',
    title: 'Nhớ Lối Cũ Quê Hương',
    genre: 'Quê Hương Trữ Tình / Bolero Sang',
    tempo: '70 BPM',
    mood: 'Da diết, tình cảm, hướng về nguồn cội',
    vocal: 'Giọng ca nữ/nam ngọt ngào, đậm chất quê hương',
    instruments: 'Đàn Bầu, Guitar phím lõm, Violon trữ tình, Dàn dây',
    summary: 'Nỗi lòng của người con xa xứ ở tuổi trung niên tìm về dòng sông tuổi thơ, mái đình xưa và lời ru của mẹ.',
    tags: ['Quê hương', 'Nguồn cội', 'Mái đình', 'Nỗi nhớ'],
    lines: [
      '1. Cốt truyện: Sau mấy mươi năm bôn ba phố thị, người trung niên bước chân trở về con đường làng rợp bóng tre xưa.',
      '2. Nhân vật: Người con tha hương tìm về nguồn cội nơi chôn nhau cắt rốn.',
      '3. Khởi đầu: Tiếng đàn Bầu nỉ non ngân nga gợi nhớ tiếng võng trưa hè mẹ ru thuở ấu thơ.',
      '4. Bước chuyển: Bờ đê xưa vẫn đó, dòng sông quê vẫn êm đềm trôi nhưng mẹ cha nay đã về với tổ tiên.',
      '5. Điệp khúc: "Quê hương ơi con đã trở về đây, xin cúi đầu hôn lên từng tấc đất ngọt ngào phù sa."',
      '6. Phát triển: Thắp nén hương thơm lên bàn thờ gia tiên, tạ lỗi vì bao năm tháng mải mê mưu sinh nơi đất khách.',
      '7. Lắng đọng: Nghe tiếng chuông chùa làng ngân nga trong ráng chiều đỏ ối, lòng nhẹ nhõm như được gột rửa.',
      '8. Cao trào & Kết: Khúc hát dân ca dâng trào cảm xúc thiêng liêng về cội nguồn dân tộc bất diệt.',
      '9. Phong cách hòa âm: Trữ tình quê hương sâu lắng, kết hợp nhạc cụ truyền thống Việt Nam với dàn dây hiện đại.',
      '10. Cảm xúc chủ đạo: Xúc động nghẹn ngào, thành kính, gắn bó tha thiết với đất mẹ quê hương.',
      '11. Vocal & Nhả chữ: Ngọt ngào, đượm chất dân ca, luyến láy tinh tế mang hồn cốt dân tộc.',
      '12. Nhạc cụ trung tâm: Đàn Bầu ngân rung da diết hòa quyện cùng tiếng đàn Guitar phím lõm.',
      '13. Ý nghĩa: Thức tỉnh tình yêu cội nguồn, nhắc nhở con người luôn nhớ về gốc gác tổ tiên dẫu ở phương trời nào.',
      '14. Câu Hook đắt giá: "Dẫu đi trọn cả cuộc đời, không đâu ấm áp bằng quê hương mình!"',
      '15. Không gian hình ảnh: Bến nước con đò chiều buông nắng, khói lam chiều bảng lảng vờn quanh mái rạ đơn sơ.'
    ]
  }
];

const titles45to60 = [
  'Khi Con Cái Rời Xa Mái Ấm', 'Nhìn Lại Những Thăng Trầm Sự Nghiệp', 'Vườn Xanh Tuổi Xế Chiều',
  'Thăm Lại Chiến Trường Xưa', 'Tình Nghĩa Vợ Chồng Nửa Đời Gắn Bó', 'Tiếng Chim Hót Buổi Bình Minh',
  'Gặp Lại Thầy Cô Sau Bốn Mươi Năm', 'Ngẫm Sự Đời Bên Tách Cà Phê', 'Trở Về Mái Nhà Xưa Của Cha Mẹ',
  'Giữ Gìn Sức Khỏe Cho Ngày Mai', 'Lời Dặn Dò Con Cháu Trước Khi Đi Xa', 'Ngắm Dòng Sông Chảy Về Biển Lớn',
  'Tâm Nguyện Cho Đời Cho Người', 'Đôi Mắt Mẹ Già Chờ Con', 'Chiếc Áo Len Đan Tặng Cháu',
  'Một Thời Đạn Bom Một Thời Hòa Bình', 'Thanh Thản Trước Mọi Khen Chê', 'Tìm Lại Bản Ngã Giữa Đời Thường',
  'Hội Ngộ Đồng Đội Năm Xưa', 'Khúc Ca Tạ Ơn Cuộc Đời', 'Ngôi Nhà Mơ Ước Ở Vùng Quê',
  'Tháng Ngày Bình Yên Bên Bạn Đời', 'Di Sản Tinh Thần Để Lại'
];

export const IDEAS_45_TO_60: SongIdea[] = [
  ...rawIdeas.map(r => ({
    id: r.id,
    title: r.title,
    ageGroup: '45 - 60 tuổi',
    categoryId: '45-60' as const,
    categoryLabel: 'Trung Niên & Tri Kỷ (45 - 60 tuổi)',
    genre: r.genre,
    tempo: r.tempo,
    mood: r.mood,
    vocal: r.vocal,
    instruments: r.instruments,
    shortSummary: r.summary,
    tags: r.tags,
    detailedDescription: r.lines.join('\n')
  })),
  ...titles45to60.map((t, idx) => {
    const num = idx + 3;
    const idStr = num < 10 ? `0${num}` : `${num}`;
    return {
      id: `idea_45_60_${idStr}`,
      title: t,
      ageGroup: '45 - 60 tuổi',
      categoryId: '45-60' as const,
      categoryLabel: 'Trung Niên & Tri Kỷ (45 - 60 tuổi)',
      genre: 'Vietnamese Trữ Tình / Bolero / Folk Ballad',
      tempo: '70 BPM',
      mood: 'Trầm ấm, chiêm nghiệm, bao dung, hướng nguồn',
      vocal: 'Giọng ca gạo cội, dày dặn, thấm đẫm trải nghiệm',
      instruments: 'Acoustic Guitar, Đàn Bầu, Sáo Trúc, Piano, Dàn Dây',
      shortSummary: `Khám phá câu chuyện "${t}" về tuổi trung niên 45-60, tri kỷ chén trà, con cái trưởng thành và lòng hướng về nguồn cội.`,
      tags: ['Trung niên', 'Tri kỷ', 'Gia đình', 'Nguồn cội'],
      detailedDescription: [
        `1. Cốt truyện: Tái hiện sâu sắc bức tranh cuộc sống "${t}" ở lứa tuổi trung niên từ 45 đến 60 tuổi.`,
        `2. Nhân vật: Con người từng trải, phong thái ung dung, trái tim đôn hậu và bao dung với vạn vật.`,
        `3. Khởi đầu: Không gian hoài niệm của làng quê, mái nhà xưa hoặc khu vườn tĩnh lặng lúc hoàng hôn.`,
        `4. Bước chuyển: Lắng nghe sự chuyển dịch của thời gian, con cái khôn lớn bay đi khắp muôn phương.`,
        `5. Điệp khúc: "Đi qua bão táp nửa đời người, nay giữ lấy một chữ An để mỉm cười thanh thản đón ngày sau."`,
        `6. Phát triển: Ôn lại những kỷ niệm đẹp thuở hoa niên và chiêm nghiệm về lẽ được mất ở trần gian.`,
        `7. Lắng đọng: Lời chúc phúc chân thành gửi gắm đến thế hệ con cháu và những người bạn đồng hành.`,
        `8. Cao trào & Kết: Hòa thanh vang vọng sâu lắng rồi tan dần vào tiếng chuông chùa ngân nga buổi chiều tà.`,
        `9. Phong cách hòa âm: Trữ tình sâu lắng, kết hợp nhạc cụ dân tộc Việt Nam với hòa âm thính phòng trang nhã.`,
        `10. Cảm xúc chủ đạo: Thanh thản, từ bi, biết ơn cuộc đời và hướng về những giá trị vĩnh cửu.`,
        `11. Vocal & Nhả chữ: Thong dong, truyền cảm, nhả chữ đậm đà phong vị văn hóa Việt Nam.`,
        `12. Nhạc cụ trung tâm: Đàn Bầu và sáo trúc hòa quyện cùng tiếng đàn Guitar gỗ trầm ấm.`,
        `13. Ý nghĩa: Gìn giữ đạo hiếu, tình nghĩa tri kỷ và chuẩn bị tâm thế ung dung cho chặng đường phía trước.`,
        `14. Câu Hook đắt giá: "${t} - nét đẹp thâm trầm, sâu lắng của tuổi trung niên!"`,
        `15. Không gian hình ảnh: Hiên nhà ngát hương hoa bưởi, chén trà sen nghi ngút khói và ánh nắng chiều nhuộm vàng sân gạch.`
      ].join('\n')
    };
  })
];
