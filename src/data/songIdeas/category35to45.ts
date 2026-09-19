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
    id: 'idea_35_45_01',
    title: 'Bình Thản Giữa Lưng Chừng Đời',
    genre: 'Chamber Pop / Jazz Ballad',
    tempo: '72 BPM',
    mood: 'Trầm tư, điềm tĩnh, chiêm nghiệm',
    vocal: 'Giọng nam/nữ đĩnh đạc, dày dặn',
    instruments: 'Grand Piano, Upright Bass, Muted Trumpet, Cello',
    summary: 'Sự tĩnh lặng quý giá của tuổi 40 khi đã đi qua đủ thăng trầm, học cách buông bỏ và mỉm cười với hiện tại.',
    tags: ['Chiêm nghiệm', 'Tuổi 40', 'Bình thản', 'Nội tâm'],
    lines: [
      '1. Cốt truyện: Người tuổi 40 ngồi bên tách trà một mình vào sáng sớm, nhìn ngắm phố xá và suy ngẫm về hành trình đã qua.',
      '2. Nhân vật: Người trưởng thành đã nếm trải đủ vinh quang lẫn cay đắng trên đường đời.',
      '3. Khởi đầu: Tiếng chuông đồng hồ điểm thong thả, làn khói trà nóng bốc lên trong không gian tĩnh lặng.',
      '4. Bước chuyển: Nhìn lại những tham vọng thời trẻ, nhận ra bình yên trong tâm hồn mới là điều quý giá nhất.',
      '5. Điệp khúc: "Lưng chừng đời ta học cách bình thản, buông bỏ hơn thua mỉm cười đón nhận mọi được mất thế gian."',
      '6. Phát triển: Tha thứ cho những người từng làm tổn thương mình, biết ơn những vấp ngã đã tôi luyện bản lĩnh.',
      '7. Lắng đọng: Nghe tiếng tim mình đập chậm rãi, trân trọng từng phút giây hiện tại bên những người thân yêu.',
      '8. Cao trào & Kết: Tiếng kèn Muted Trumpet thổi một giai điệu Jazz hoài niệm rồi tan biến vào sương sớm.',
      '9. Phong cách hòa âm: Jazz Ballad sang trọng, hợp âm phong phú, không gian âm thanh rộng và sâu.',
      '10. Cảm xúc chủ đạo: Điềm đạm, lắng đọng, giải thoát khỏi những âu lo và áp lực danh vọng.',
      '11. Vocal & Nhả chữ: Trầm lắng, sâu sắc, phát âm chuẩn xác và mang chiều sâu trải nghiệm sống.',
      '12. Nhạc cụ trung tâm: Đàn Grand Piano và tiếng kèn Trumpet bịt loa (Muted Trumpet) đầy hoài niệm.',
      '13. Ý nghĩa: Triết lý sống an nhiên, tự tại và biết đủ ở lứa tuổi chín muồi nhất của đời người.',
      '14. Câu Hook đắt giá: "Đi qua nửa đời người mới hiểu: Bình yên nơi tâm là hạnh phúc vẹn toàn nhất!"',
      '15. Không gian hình ảnh: Góc ban công phủ bóng cây xanh, tách trà ấm và cuốn sách mở ra bên làn sương mai.'
    ]
  },
  {
    id: 'idea_35_45_02',
    title: 'Nhìn Con Trưởng Thành',
    genre: 'Acoustic Folk Ballad',
    tempo: '76 BPM',
    mood: 'Tự hào, bồi hồi, bao dung',
    vocal: 'Giọng hát trầm ấm, tình cảm cha mẹ',
    instruments: 'Acoustic Guitar, Piano, Strings, Flute êm dịu',
    summary: 'Tâm tư của cha mẹ tuổi 40 nhìn đứa con bước vào tuổi trưởng thành, vừa mừng vui vừa lưu luyến.',
    tags: ['Tình cha mẹ', 'Con trưởng thành', 'Bồi hồi', 'Nuôi dạy con'],
    lines: [
      '1. Cốt truyện: Người mẹ nhìn con gái ướm thử chiếc áo dài trắng tuổi 18, chợt nhớ lại ngày con mới chập chững bước đi.',
      '2. Nhân vật: Bậc cha mẹ trung niên và đứa con đang sải cánh bước vào đời.',
      '3. Khởi đầu: Tấm ảnh kỷ niệm ngày con vào lớp một treo trên tường gợi nhắc bao ký ức ngọt ngào.',
      '4. Bước chuyển: Con đã cao hơn cha mẹ, có những ước mơ riêng và sắp sửa rời xa vòng tay gia đình.',
      '5. Điệp khúc: "Nhìn con lớn khôn từng ngày lòng cha mẹ vừa mừng vừa lo, mong con vững bước trên đường đời thênh thang."',
      '6. Phát triển: Nhắc nhở con dẫu đi đến chân trời nào cũng hãy giữ gìn sự tử tế và lòng trung thực.',
      '7. Lắng đọng: Cha mẹ luôn ở đây, là bến đỗ bình yên nhất mỗi khi con mỏi gối chùn chân trở về.',
      '8. Cao trào & Kết: Dàn nhạc dây hòa tấu ấm áp tôn vinh tình mẫu tử và phụ tử cao quý vô biên.',
      '9. Phong cách hòa âm: Folk Ballad ấm áp, giai điệu da diết, mộc mạc và chân thành.',
      '10. Cảm xúc chủ đạo: Xúc động, tự hào, tình thương yêu bao la và sự sẻ chia thế hệ.',
      '11. Vocal & Nhả chữ: Đong đầy tình cảm, hơi thở ấm áp như lời nhắn nhủ tâm can của bậc sinh thành.',
      '12. Nhạc cụ trung tâm: Đàn Acoustic Guitar kết hợp tiếng sáo Flute thánh thót.',
      '13. Ý nghĩa: Ca ngợi sự hy sinh không lời của cha mẹ và tình cảm gia đình bền chặt qua thời gian.',
      '14. Câu Hook đắt giá: "Bay đi con hỡi cánh chim trời, nhà mình luôn mở rộng vòng tay đón con về!"',
      '15. Không gian hình ảnh: Bữa cơm gia đình ấm cúng, ánh mắt mẹ rưng rưng tự hào nhìn con gái cười tươi.'
    ]
  }
];

const titles35to45 = [
  'Khi Tóc Bắt Đầu Điểm Sợi Bạc', 'Ngoảnh Lại Tuổi Hai Mươi', 'Học Cách Buông Bỏ',
  'Gặp Lại Bạn Cũ Sau Hai Mươi Năm', 'Ngọn Nến Sinh Nhật Tuổi Bốn Mươi', 'Lời Xin Lỗi Tuổi Trẻ Nông Nổi',
  'Bình Minh Của Người Từng Trải', 'Giữ Lấy Một Góc Bình Yên', 'Chữ Hiếu Giữa Đời Thường',
  'Ngẫm Về Thắng Trầm Cuộc Sống', 'Tình Yêu Tuổi Trung Niên Đằm Thắm', 'Chiếc Xe Đã Chạy Mười Vạn Cây Số',
  'Bản Lĩnh Vượt Qua Khủng Hoảng Tuổi Bốn Mươi', 'Cảm Ơn Những Vấp Ngã Đã Qua', 'Lắng Nghe Tiếng Nói Bên Trong',
  'Ngôi Nhà Sau Bao Năm Dày Công Vun Đắp', 'Chăm Sóc Cha Mẹ Già Yếu', 'Những Chiều Đạp Xe Chậm Rãi',
  'Không Còn Sợ Cô Đơn', 'Giá Trị Của Sự Im Lặng', 'Trân Quý Sức Khỏe Hơn Tiền Tài',
  'Những Người Bạn Ở Lại Cùng Năm Tháng', 'Tha Thứ Cho Chính Bản Thân Mình', 'Dạy Con Về Sự Tử Tế',
  'Khoảng Lặng Giữa Những Hối Hả', 'Hành Trang Nửa Sau Cuộc Đời', 'Đóa Hoa Nở Muộn',
  'Nụ Cười Thanh Thản Tuổi Bốn Mươi Lăm'
];

export const IDEAS_35_TO_45: SongIdea[] = [
  ...rawIdeas.map(r => ({
    id: r.id,
    title: r.title,
    ageGroup: '35 - 45 tuổi',
    categoryId: '35-45' as const,
    categoryLabel: 'Trưởng Thành & Chiêm Nghiệm (35 - 45 tuổi)',
    genre: r.genre,
    tempo: r.tempo,
    mood: r.mood,
    vocal: r.vocal,
    instruments: r.instruments,
    shortSummary: r.summary,
    tags: r.tags,
    detailedDescription: r.lines.join('\n')
  })),
  ...titles35to45.map((t, idx) => {
    const num = idx + 3;
    const idStr = num < 10 ? `0${num}` : `${num}`;
    return {
      id: `idea_35_45_${idStr}`,
      title: t,
      ageGroup: '35 - 45 tuổi',
      categoryId: '35-45' as const,
      categoryLabel: 'Trưởng Thành & Chiêm Nghiệm (35 - 45 tuổi)',
      genre: 'Acoustic Ballad / Contemporary Folk',
      tempo: '74 BPM',
      mood: 'Sâu sắc, điềm đạm, lắng đọng, thấu hiểu',
      vocal: 'Giọng ca chín muồi, từng trải, đĩnh đạc',
      instruments: 'Grand Piano, Acoustic Guitar, Cello, Warm Strings',
      shortSummary: `Khám phá câu chuyện "${t}" về những chiêm nghiệm sâu sắc của tuổi 35-45, học cách buông bỏ và trân trọng sự bình yên.`,
      tags: ['Trưởng thành', 'Chiêm nghiệm', 'Bình thản', 'Tâm hồn'],
      detailedDescription: [
        `1. Cốt truyện: Khắc họa trọn vẹn chủ đề "${t}" ở giai đoạn chín muồi nhất của đời người từ 35 đến 45 tuổi.`,
        `2. Nhân vật: Người trưởng thành với đôi mắt trầm tĩnh, sâu lắng, đã vượt qua muôn vàn thử thách.`,
        `3. Khởi đầu: Không gian tĩnh lặng của buổi sớm mai hoặc hoàng hôn mở ra dòng suy tư nội tâm.`,
        `4. Bước chuyển: Nhận diện rõ rệt ranh giới giữa những phù phiếm bên ngoài và giá trị cốt lõi bên trong.`,
        `5. Điệp khúc: "Đến độ tuổi này mới thấu hiểu: Bình an trong tâm hồn mới là bến đỗ vững chãi nhất cuộc đời."`,
        `6. Phát triển: Từng trải nghiệm thăng trầm hóa thành sự bao dung, điềm tĩnh và thấu cảm sâu sắc.`,
        `7. Lắng đọng: Học cách mỉm cười với quá khứ, trân quý hiện tại và hướng về tương lai bằng tâm thế an nhiên.`,
        `8. Cao trào & Kết: Giai điệu ngân vang uyển chuyển rồi lắng đọng thành một nốt trầm sâu lắng, viên mãn.`,
        `9. Phong cách hòa âm: Trữ tình sâu lắng, kết hợp giữa chất liệu thính phòng tinh tế và mộc mạc dân gian.`,
        `10. Cảm xúc chủ đạo: An yên, tự tại, giàu chiều sâu triết lý nhân sinh và tình thương yêu.`,
        `11. Vocal & Nhả chữ: Thong thả, tròn vành rõ chữ, truyền tải trọn vẹn sức nặng của từng câu từ.`,
        `12. Nhạc cụ trung tâm: Đàn Grand Piano làm điểm tựa hòa cùng tiếng đàn Cello trầm ấm.`,
        `13. Ý nghĩa: Tôn vinh vẻ đẹp của sự trưởng thành nội tâm, lòng bao dung và sự thức tỉnh tinh thần.`,
        `14. Câu Hook đắt giá: "${t} - khoảnh khắc nhận ra giá trị đích thực của cuộc sống!"`,
        `15. Không gian hình ảnh: Hiên nhà chiều buông sương, tách trà sen thơm ngát và nụ cười thanh thản trên môi.`
      ].join('\n')
    };
  })
];
