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
    id: 'idea_25_35_01',
    title: 'Căn Nhà Nhỏ Có Tiếng Cười',
    genre: 'Warm Acoustic Pop',
    tempo: '84 BPM',
    mood: 'Ấm áp, hạnh phúc, bình yên',
    vocal: 'Giọng nam/nữ trầm ấm, tình cảm',
    instruments: 'Acoustic Guitar, Piano, Soft Drums, Strings êm dịu',
    summary: 'Niềm hạnh phúc giản dị của cặp vợ chồng trẻ sau nhiều năm tích cóp xây dựng được tổ ấm đầu tiên.',
    tags: ['Gia đình', 'Tổ ấm', 'Vợ chồng', 'Hạnh phúc'],
    lines: [
      '1. Cốt truyện: Hai vợ chồng trẻ cầm trên tay chiếc chìa khóa căn hộ nhỏ, cùng nhau sơn tường và ngắm nhìn hoàng hôn.',
      '2. Nhân vật: Cặp đôi trẻ tuổi bước vào hôn nhân với bao hoài bão và trách nhiệm.',
      '3. Khởi đầu: Tiếng leng keng của chùm chìa khóa mới và mùi sơn tường còn tươi mở ra trang đời mới.',
      '4. Bước chuyển: Nhớ lại những ngày đầu khó khăn, bữa cơm đạm bạc nhưng luôn rộn rã tiếng cười.',
      '5. Điệp khúc: "Căn nhà nhỏ ấm áp có anh và có em, dẫu ngoài kia bão giông ta vẫn có chốn bình yên quay về."',
      '6. Phát triển: Cùng nhau vun vén từng góc bếp, chăm chậu cây xanh bên ban công và chờ đón đứa con đầu lòng.',
      '7. Lắng đọng: Sự thấu hiểu và lòng biết ơn đối phương đã luôn đồng cam cộng khổ qua bao sóng gió.',
      '8. Cao trào & Kết: Khúc hòa ca ấm áp khi ánh đèn vàng trong căn nhà bật sáng rực rỡ giữa trời đêm.',
      '9. Phong cách hòa âm: Pop Acoustic mộc mạc, tiết tấu vừa phải, mang lại cảm giác an yên.',
      '10. Cảm xúc chủ đạo: Hạnh phúc ngập tràn, bình dị, tôn vinh giá trị gia đình thiêng liêng.',
      '11. Vocal & Nhả chữ: Đằm thắm, ngân nga ấm áp, phát âm tròn trịa từng lời tri ân bạn đời.',
      '12. Nhạc cụ trung tâm: Đàn Guitar gỗ và tiếng đàn Piano rải nhẹ như ánh nắng ban mai.',
      '13. Ý nghĩa: Khẳng định hạnh phúc thực sự không nằm ở sự xa hoa mà ở sự đồng lòng và tình yêu thương chân thành.',
      '14. Câu Hook đắt giá: "Nhà là nơi bão dừng sau cánh cửa, có nụ cười em sưởi ấm cả cuộc đời!"',
      '15. Không gian hình ảnh: Ban công chung cư nhỏ ngập tràn hoa dạ yến thảo, hai chiếc cốc sứ bốc khói thơm.'
    ]
  },
  {
    id: 'idea_25_35_02',
    title: 'Lời Hát Ru Của Người Cha Trẻ',
    genre: 'Lullaby / Soft Folk Ballad',
    tempo: '70 BPM',
    mood: 'Yêu thương, chở che, thiêng liêng',
    vocal: 'Giọng nam trầm ấm, dịu dàng',
    instruments: 'Acoustic Nylon Guitar, Cello, Warm Ambient Pad',
    summary: 'Cảm xúc vỡ òa của người cha lần đầu bế thiên thần nhỏ trên tay, khẽ hát ru con vào giấc ngủ ngoan.',
    tags: ['Tình cha con', 'Con đầu lòng', 'Hát ru', 'Trách nhiệm'],
    lines: [
      '1. Cốt truyện: Người cha trẻ bế con gái nhỏ trên tay trong đêm muộn, ngắm nhìn gương mặt thiên thần đang say ngủ.',
      '2. Nhân vật: Người cha trẻ lần đầu làm cha với đôi bàn tay còn vụng về nhưng tràn ngập tình thương.',
      '3. Khởi đầu: Tiếng thở đều đều của em bé và ánh đèn ngủ mờ ảo trong căn phòng yên tĩnh.',
      '4. Bước chuyển: Bàn tay nhỏ xíu của con nắm chặt ngón tay thô ráp của cha như lời hứa gắn kết cuộc đời.',
      '5. Điệp khúc: "Ngủ ngoan nhé thiên thần nhỏ của cha, cha sẽ là chiếc ô che mát suốt cuộc đời con."',
      '6. Phát triển: Tự hứa sẽ cố gắng làm việc chăm chỉ hơn, trở thành điểm tựa vững chãi nhất cho con khôn lớn.',
      '7. Lắng đọng: Cảm nhận được sự thiêng liêng của tình phụ tử và hiểu hơn nỗi vất vả của cha mẹ mình ngày xưa.',
      '8. Cao trào & Kết: Nốt Cello ngân dài trầm ấm hòa vào tiếng hát thì thầm dịu êm đưa con vào giấc mộng đẹp.',
      '9. Phong cách hòa âm: Ballad mộc tối giản, tôn vinh tối đa giọng hát ấm áp và không gian tĩnh lặng.',
      '10. Cảm xúc chủ đạo: Yêu thương vô bờ bến, trách nhiệm, sự trưởng thành sâu sắc trong tâm hồn.',
      '11. Vocal & Nhả chữ: Rất nhẹ, trầm ấm, ngân vang từ sâu thẳm lồng ngực như lời thủ thỉ của người cha.',
      '12. Nhạc cụ trung tâm: Đàn Nylon Guitar gảy từng nốt êm ái kết hợp tiếng đàn Cello sâu thẳm.',
      '13. Ý nghĩa: Ca ngợi tình phụ tử thiêng liêng và sự hy sinh thầm lặng của những người cha trẻ.',
      '14. Câu Hook đắt giá: "Nắm tay con cha thấy cả thế giới, yêu con hơn tất cả những gì cha có!"',
      '15. Không gian hình ảnh: Khung cửa sổ đêm đầy sao, bóng người cha nhẹ nhàng đung đưa chiếc nôi êm ái.'
    ]
  }
];

const titles25to35 = [
  'Đêm Tăng Ca Và Hộp Cơm Vợ Nấu', 'Con Chào Đời Giữa Mùa Hoa Nở', 'Khởi Nghiệp Tuổi Ba Mươi',
  'Chuyến Đi Về Thăm Bố Mẹ Quê', 'Chiếc Xe Máy Cũ Đồng Hành Mưu Sinh', 'Gánh Nặng Và Nụ Cười Của Mẹ',
  'Lời Cảm Ơn Người Vợ Hiền', 'Khi Con Bập Bẹ Gọi Tên Cha', 'Giữ Lửa Cho Hôn Nhân',
  'Vượt Qua Sóng Gió Tuổi Ba Mươi', 'Hạnh Phúc Bình Dị Sau Giờ Tan Làm', 'Ngày Nhận Lương Đầu Tiên Cho Gia Đình',
  'Ngôi Nhà Mơ Ước Và Đôi Bàn Tay', 'Nghĩa Vợ Chồng Son Sắt', 'Bữa Cơm Chiều Đầy Đủ Cả Nhà',
  'Trách Nhiệm Trên Vai Người Trụ Cột', 'Nuôi Con Lớn Khôn Từng Ngày', 'Ước Mơ Cho Con Một Tương Lai Tươi Sáng',
  'Nhớ Về Thuở Mới Cưới', 'Đồng Tiền Kiếm Được Bằng Mồ Hôi', 'Tình Yêu Không Còn Màu Hồng Nhưng Đậm Sâu',
  'Gia Đình Là Điểm Tựa Vững Chắc Nhất', 'Những Buổi Sáng Bận Rộn Đưa Con Đến Trường', 'Tấm Áo Mới Cho Con',
  'Lời Dặn Của Cha Khi Con Lập Nghiệp', 'Bình Yên Bên Người Bạn Đời', 'Đi Qua Những Khúc Quanh Cuộc Sống',
  'Lời Hứa Năm Hai Mươi Lăm Tuổi'
];

export const IDEAS_25_TO_35: SongIdea[] = [
  ...rawIdeas.map(r => ({
    id: r.id,
    title: r.title,
    ageGroup: '25 - 35 tuổi',
    categoryId: '25-35' as const,
    categoryLabel: 'Gia Đình & Lập Nghiệp (25 - 35 tuổi)',
    genre: r.genre,
    tempo: r.tempo,
    mood: r.mood,
    vocal: r.vocal,
    instruments: r.instruments,
    shortSummary: r.summary,
    tags: r.tags,
    detailedDescription: r.lines.join('\n')
  })),
  ...titles25to35.map((t, idx) => {
    const num = idx + 3;
    const idStr = num < 10 ? `0${num}` : `${num}`;
    return {
      id: `idea_25_35_${idStr}`,
      title: t,
      ageGroup: '25 - 35 tuổi',
      categoryId: '25-35' as const,
      categoryLabel: 'Gia Đình & Lập Nghiệp (25 - 35 tuổi)',
      genre: 'Acoustic Pop / Family Ballad',
      tempo: '78 BPM',
      mood: 'Ấm áp, trách nhiệm, kiên cường, đằm thắm',
      vocal: 'Giọng ca đĩnh đạc, trầm ấm, truyền cảm',
      instruments: 'Acoustic Guitar, Piano, Strings, Soft Drum Beat',
      shortSummary: `Khám phá câu chuyện "${t}" về trách nhiệm gia đình, tình nghĩa vợ chồng và nỗ lực lập nghiệp tuổi 25-35.`,
      tags: ['Gia đình', 'Lập nghiệp', 'Trách nhiệm', 'Yêu thương'],
      detailedDescription: [
        `1. Cốt truyện: Phản ánh chân thực hành trình "${t}" của lứa tuổi 25 đến 35 - giai đoạn xây tổ ấm và dựng sự nghiệp.`,
        `2. Nhân vật: Người trẻ tuổi bản lĩnh, gánh vác trách nhiệm trụ cột gia đình với tình yêu thương bao la.`,
        `3. Khởi đầu: Những áp lực mưu sinh thường nhật và niềm hạnh phúc nhỏ bé khi trở về bên mâm cơm gia đình.`,
        `4. Bước chuyển: Thấu hiểu giá trị của sự hy sinh và nỗ lực không ngừng nghỉ vì tương lai con cái.`,
        `5. Điệp khúc: "Dẫu ngoài kia bao nhọc nhằn sóng gió, chỉ cần về nhà thấy nụ cười người thân là mọi mệt mỏi tan biến."`,
        `6. Phát triển: Những khoảnh khắc sẻ chia, động viên nhau vượt qua giai đoạn khởi đầu đầy chông gai.`,
        `7. Lắng đọng: Nhìn con thơ lớn lên từng ngày, nhận ra gia đình chính là tài sản quý giá nhất cuộc đời.`,
        `8. Cao trào & Kết: Hòa âm dâng trào với niềm tin son sắt vào một tương lai tươi sáng, vững bền.`,
        `9. Phong cách hòa âm: Pop Ballad ấm áp, giàu cảm xúc, âm sắc mộc mạc gần gũi.`,
        `10. Cảm xúc chủ đạo: Kiên cường, yêu thương, tự hào về tổ ấm và trách nhiệm cao đẹp.`,
        `11. Vocal & Nhả chữ: Trầm ấm, chân thành, giàu trải nghiệm sống và sự sẻ chia sâu sắc.`,
        `12. Nhạc cụ trung tâm: Đàn Acoustic Guitar kết hợp dàn dây vĩ cầm nâng đỡ cảm xúc.`,
        `13. Ý nghĩa: Tôn vinh giá trị của tổ ấm gia đình, sự kiên trì lao động và tình nghĩa vợ chồng bền chặt.`,
        `14. Câu Hook đắt giá: "${t} - động lực lớn lao nhất để ta vững bước trên đường đời!"`,
        `15. Không gian hình ảnh: Căn phòng khách ấm áp ngập tràn ánh đèn vàng, cả gia đình sum vầy bên nhau.`
      ].join('\n')
    };
  })
];
