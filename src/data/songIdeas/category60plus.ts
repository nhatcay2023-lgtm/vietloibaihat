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
    id: 'idea_60_plus_01',
    title: 'Nắm Tay Nhau Đến Đầu Bạc Răng Long',
    genre: 'Acoustic Trịnh / Classical Ballad',
    tempo: '64 BPM',
    mood: 'Thủy chung, bình an, viên mãn',
    vocal: 'Giọng nam/nữ trầm lão luyện, ấm áp vô cùng',
    instruments: 'Acoustic Nylon Guitar, Cello, Flute, Tiếng Lá Rụng',
    summary: 'Tình yêu son sắt của đôi vợ chồng già hơn 80 tuổi dắt tay nhau đi dạo công viên trong ráng chiều thu êm ả.',
    tags: ['Tình già', 'Thủy chung', 'Tuổi 80', 'Bình an'],
    lines: [
      '1. Cốt truyện: Cụ ông nắm chặt bàn tay nhăn nheo của cụ bà, cùng nhau bước chậm rãi trên con đường rợp lá vàng rơi.',
      '2. Nhân vật: Đôi vợ chồng già đã đi cùng nhau suốt hơn nửa thế kỷ thăng trầm.',
      '3. Khởi đầu: Tiếng gậy chống gõ nhẹ trên vỉa hè và nụ cười hiền hậu của hai mái đầu bạc trắng.',
      '4. Bước chuyển: Nhớ lại ngày cưới nghèo khó năm xưa, chỉ có chiếc nhẫn đồng và manh áo vá nhưng tràn ngập tiếng cười.',
      '5. Điệp khúc: "Đi trọn một kiếp người ta vẫn còn có nhau, nắm chặt bàn tay nhăn nheo cùng đi qua hoàng hôn cuộc đời."',
      '6. Phát triển: Cùng nhau vượt qua nghèo khó, nuôi nấng đàn con trưởng thành, nay con cháu sum vầy hiếu thảo.',
      '7. Lắng đọng: Lời cảm ơn bạn đời đã vì mình mà hy sinh cả tuổi thanh xuân, làm bến đỗ bình yên cho cuộc đời.',
      '8. Cao trào & Kết: Nốt Cello ngân nga trầm ấm như lời thề ước thủy chung son sắt đến tận chân trời.',
      '9. Phong cách hòa âm: Mộc mạc theo phong cách nhạc Trịnh Công Sơn, sâu lắng và giàu chất thơ thiền định.',
      '10. Cảm xúc chủ đạo: Viên mãn, thanh thản tuyệt đối, xúc động trước vẻ đẹp vĩnh cửu của tình yêu.',
      '11. Vocal & Nhả chữ: Rất chậm, đượm nét trải đời, hơi thở sâu lắng như một lời ru êm đềm.',
      '12. Nhạc cụ trung tâm: Đàn Nylon Guitar gảy từng nốt mộc và đàn Cello nâng niu từng cảm xúc.',
      '13. Ý nghĩa: Tôn vinh tình nghĩa vợ chồng thủy chung, biểu tượng đẹp đẽ nhất của hạnh phúc trọn vẹn.',
      '14. Câu Hook đắt giá: "Bạc đầu nghĩa nặng tình sâu, kiếp này may mắn được cùng người đi!"',
      '15. Không gian hình ảnh: Ghế đá công viên dưới vòm cây vàng óng, hai bàn tay đan vào nhau dưới ánh hoàng hôn dịu dàng.'
    ]
  },
  {
    id: 'idea_60_plus_02',
    title: 'Hoàng Hôn An Nhiên',
    genre: 'Thiền Ca / Acoustic Ambient',
    tempo: '60 BPM',
    mood: 'Thanh tịnh, an nhiên, buông xả',
    vocal: 'Giọng hát ấm áp, tĩnh tại, thoát tục',
    instruments: 'Chuông Xoay Tây Tạng, Sáo Trúc, Đàn Tranh, Tiếng Suối',
    summary: 'Tâm thế ung dung tự tại của tuổi già, buông bỏ mọi bụi trần, tâm an như mặt nước hồ thu phẳng lặng.',
    tags: ['Thiền định', 'Hoàng hôn', 'Tâm an', 'Buông bỏ'],
    lines: [
      '1. Cốt truyện: Cụ già ngồi tĩnh tọa dưới hiên chùa làng, ngắm mặt trời lặn sau rặng tre và mỉm cười an lạc.',
      '2. Nhân vật: Bậc cao niên với tâm hồn thanh tịnh, đã buông bỏ hết mọi hỷ nộ ái ố.',
      '3. Khởi đầu: Tiếng chuông xoay Tây Tạng ngân vang thanh khiết lan tỏa khắp không gian tĩnh mịch.',
      '4. Bước chuyển: Cuộc đời như một giấc mộng dài, nay trở về với bản tâm thanh tịnh ban sơ.',
      '5. Điệp khúc: "Tâm an vạn sự an, buông xả hết muộn phiền, hoàng hôn đẹp tựa đóa sen ngát hương cõi trần."',
      '6. Phát triển: Nhìn đàn cháu nhỏ nô đùa trước sân, thấy sự tiếp nối kỳ diệu của dòng chảy sự sống bất tận.',
      '7. Lắng đọng: Không còn sợ hãi trước sự chia ly hay cái chết, xem tất cả chỉ là một lẽ tự nhiên của tạo hóa.',
      '8. Cao trào & Kết: Tiếng sáo trúc bay bổng hòa cùng tiếng chuông đồng tan biến vào bầu trời hoàng hôn tím biếc.',
      '9. Phong cách hòa âm: Âm nhạc thiền tịnh, tiết tấu tự do (Rubato), không gian âm thanh mênh mông thoát tục.',
      '10. Cảm xúc chủ đạo: Bình an tột cùng, nhẹ nhõm, tự do tự tại không còn bất kỳ vướng bận nào.',
      '11. Vocal & Nhả chữ: Nhẹ như mây bay, thanh thoát, ngân dài như tiếng chuông chùa ngân sớm mai.',
      '12. Nhạc cụ trung tâm: Chuông xoay và tiếng sáo trúc thổi hơi dài êm ả.',
      '13. Ý nghĩa: Giúp con người tìm về sự bình yên đích thực bên trong, đón nhận tuổi già bằng tâm thế an nhiên nhất.',
      '14. Câu Hook đắt giá: "Một đời rong ruổi phong ba, nay về bến đỗ an hòa trong tâm!"',
      '15. Không gian hình ảnh: Mái ngói rêu phong của ngôi chùa cổ, đóa sen trắng tỏa hương trong hồ nước phẳng lặng như gương.'
    ]
  }
];

const titles60plus = [
  'Đàn Cháu Về Thăm Ngày Giỗ Tết', 'Cuốn Nhật Ký Đã Mờ Nét Mực', 'Khu Vườn Cây Trái Của Ông Bà',
  'Ngắm Ánh Trăng Tròn Tuổi Bát Tuần', 'Lời Căn Dặn Cho Thế Hệ Sau', 'Một Đời Cống Hiến Không Tiếc Nuối',
  'Nhớ Bạn Đồng Ngũ Năm Nào', 'Chiếc Áo Len Cũ Của Người Xưa', 'Tiếng Gậy Gỗ Chạm Vào Sương Sớm',
  'Mâm Cơm Thượng Thọ Sum Vầy', 'Trà Đạo Và Lòng Thanh Thản', 'Ngẫm Lại Chín Mươi Năm Cuộc Đời',
  'Những Bông Hoa Nở Trong Tâm', 'Gửi Lời Chào Thế Gian Tươi Đẹp', 'Tạ Ơn Đất Trời Và Tổ Tiên',
  'Tiếng Hát Ru Đàn Cháu Ngủ', 'Cây Cổ Thụ Che Mát Đàn Con', 'Hồi Ức Về Thời Kháng Chiến',
  'Gia Phả Để Lại Cho Đời Sau', 'Nụ Cười Phúc Hậu Tuổi Xế Chiều', 'Thanh Bình Trong Giấc Mơ Trưa',
  'Ánh Mắt Độ Lượng Nhìn Cuộc Sống', 'Chuyến Đi Cuối Cùng Về Cội Nguồn'
];

export const IDEAS_60_PLUS: SongIdea[] = [
  ...rawIdeas.map(r => ({
    id: r.id,
    title: r.title,
    ageGroup: '60+ tuổi',
    categoryId: '60+' as const,
    categoryLabel: 'Tuổi Già & Xế Chiều (60+ tuổi)',
    genre: r.genre,
    tempo: r.tempo,
    mood: r.mood,
    vocal: r.vocal,
    instruments: r.instruments,
    shortSummary: r.summary,
    tags: r.tags,
    detailedDescription: r.lines.join('\n')
  })),
  ...titles60plus.map((t, idx) => {
    const num = idx + 3;
    const idStr = num < 10 ? `0${num}` : `${num}`;
    return {
      id: `idea_60_plus_${idStr}`,
      title: t,
      ageGroup: '60+ tuổi',
      categoryId: '60+' as const,
      categoryLabel: 'Tuổi Già & Xế Chiều (60+ tuổi)',
      genre: 'Acoustic Trịnh / Thiền Ca / Cổ Điển Nhẹ',
      tempo: '62 BPM',
      mood: 'An nhiên, thanh tịnh, hoài niệm, phúc hậu',
      vocal: 'Giọng ca trầm ấm, đôn hậu, thoát tục',
      instruments: 'Acoustic Nylon Guitar, Sáo Trúc, Cello, Chuông Gió, Đàn Tranh',
      shortSummary: `Khám phá câu chuyện "${t}" về vẻ đẹp tuổi già 60+, tâm an như nước, tình nghĩa vợ chồng son sắt và di sản tinh thần để lại.`,
      tags: ['Tuổi già', 'Xế chiều', 'Tâm an', 'Thủy chung'],
      detailedDescription: [
        `1. Cốt truyện: Tái hiện bức tranh viên mãn và chiêm nghiệm "${t}" ở lứa tuổi xế chiều trên 60 tuổi.`,
        `2. Nhân vật: Bậc cao niên đức độ, mái đầu bạc trắng, ánh mắt phúc hậu và trái tim yêu thương bao la.`,
        `3. Khởi đầu: Không gian thanh tịnh của ngôi nhà rợp bóng cây cổ thụ, tiếng chim hót buổi sớm mai.`,
        `4. Bước chuyển: Lắng nghe nhịp thời gian trôi chậm rãi, nhìn ngắm đàn con cháu khôn lớn sum vầy.`,
        `5. Điệp khúc: "Đi trọn một kiếp nhân sinh, nay gửi lại đời chữ Tâm chữ Đức sáng mãi cùng thời gian."`,
        `6. Phát triển: Những hồi ức đẹp đẽ về một đời cống hiến, vượt qua muôn vàn gian nan thử thách.`,
        `7. Lắng đọng: Tâm thế bình thản buông bỏ mọi phiền muộn, mỉm cười đón nhận sự vận hành của tạo hóa.`,
        `8. Cao trào & Kết: Giai điệu nhẹ nhàng như làn gió thu thổi qua rặng tre già, lắng sâu vào cõi an lạc.`,
        `9. Phong cách hòa âm: Trầm mặc, mang âm hưởng nhạc Trịnh và thiền ca Việt Nam sâu lắng.`,
        `10. Cảm xúc chủ đạo: Thanh tịnh, từ bi, viên mãn và ngập tràn lòng biết ơn cuộc đời.`,
        `11. Vocal & Nhả chữ: Chậm rãi, đĩnh đạc, ấm áp như lời căn dặn từ tâm của người ông, người bà.`,
        `12. Nhạc cụ trung tâm: Đàn Guitar gỗ mộc hòa quyện cùng tiếng sáo trúc thanh khiết.`,
        `13. Ý nghĩa: Tôn vinh đạo hiếu, sự kính lão đắc thọ và giá trị của một cuộc đời sống trọn vẹn, ý nghĩa.`,
        `14. Câu Hook đắt giá: "${t} - nụ cười an nhiên đẹp nhất của đời người!"`,
        `15. Không gian hình ảnh: Hiên nhà cổ kính rêu phong, đàn cháu nhỏ vây quanh nghe ông bà kể chuyện cổ tích xưa.`
      ].join('\n')
    };
  })
];
