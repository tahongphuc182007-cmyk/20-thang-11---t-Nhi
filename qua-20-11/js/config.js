/* ============================================================
   FILE CẤU HÌNH — CHỈ CẦN SỬA FILE NÀY LÀ ĐỔI ĐƯỢC NỘI DUNG
   ============================================================ */
window.CAUHINH = {

  /* Màn hình mở đầu */
  loiMo: ["Chúc mừng ngày", "Nhà Giáo Việt Nam", "20/11"],
  nutMo: "Mở quà nè 💖",

  /* Bức thư (hiện ra khi chạm vào bó hoa) */
  thu: {
    tieuDe: "Gửi cô giáo Út Nhi – nhân ngày 20/11 🎉💕",
    /* Mỗi phần tử là một đoạn văn. Đổi/thêm/bớt tuỳ ý */
    noiDung: [
      "Em biết giai đoạn này chị đang phải cố gắng rất nhiều.",
      "Nhân ngày Nhà giáo Việt Nam 20/11, em có một chút món quà tinh thần gửi cho cô giáo Út.",
      "Chúc chị luôn xinh đẹp, thật nhiều sức khỏe và vững vàng trên hành trình đứng lớp phía trước. Mọi nỗ lực của chị rồi sẽ sớm có thành quả như chị mong đợi thôi.",
      "Út Nhi nhớ ăn uống đầy đủ và đừng tự tạo áp lực cho mình nhé. Chúc chị hoàn thành thật tốt kỳ thực tập đợt này."
    ],
    kyTen: "Thương cô giáo Út rất nhiều! ❤"
  },

  /* Cuộn phim kỷ niệm: bỏ ảnh vào assets/anh/ rồi sửa tên ở đây */
  tieuDeCuonPhim: "Cuộn phim kỉ niệm",
  anh: [
    "assets/anh/anh1.jpg",
    "assets/anh/anh2.jpg",
    "assets/anh/anh3.jpg",
    "assets/anh/anh4.jpg",
    "assets/anh/anh5.jpg",
    "assets/anh/anh6.jpg"
  ],
  tocDoCuon: 0.6,   /* px mỗi khung hình — tăng để cuộn nhanh hơn */

  /* Nhạc nền: bỏ file mp3 vào assets/nhac/ rồi sửa tên ở đây */
  nhac: "assets/nhac/In_Love.mp3",
  amLuong: 0.6      /* từ 0 đến 1 */
};
