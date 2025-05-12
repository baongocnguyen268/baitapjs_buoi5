/** Đầu Vào
 * Nhập loaiKH, nhadan, doanhnghiep
 * Nhà dân : Phí xử lý hóa đơn: 4.5$ , Phí dịch vụ cơ bản: 20.5$ ,Kênh cao cấp: 7.5$ / kênh
 * Doanh nghiệp: Phí xử lý: 15$ , Phí dịch vụ cơ bản: 75$ cho 10 kết nối đầu tiên , 5$ mỗi kết nối thêm , Kênh cao cấp: 50$ / kênh
 * 
 * 
 ** Xử Lý
 * phiDichVu += (soKetNoi - 10) * 5;
 * phiKenh = soKenh * 50;
 ** Đầu Ra
 * in ra ketQua
 *
 */

const loaiKH = document.getElementById("loaiKH");
const ketNoiInput = document.getElementById("soKetNoi");
ketNoiInput.style.display = "none";
ketNoiInput.disabled = true;

loaiKH.addEventListener("change", function () {
  if (this.value === "doanhnghiep") {
    ketNoiInput.style.display = "block";
    ketNoiInput.disabled = false;
  } else {
    ketNoiInput.style.display = "none";
    ketNoiInput.disabled = true;
    ketNoiInput.value = "";
  }
});

document.getElementById("btnTinhTien").onclick = function () {
  const maKH = document.getElementById("maKH").value.trim();
  const loai = loaiKH.value;
  const ketNoi = +document.getElementById("soKetNoi").value || 0;
  const kenh = +document.getElementById("soKenh").value || 0;

  let phiXuLy = 0, phiDichVu = 0, phiKenh = 0;

  if (loai === "nhadan") {
    phiXuLy = 4.5;
    phiDichVu = 20.5;
    phiKenh = kenh * 7.5;
  } else {
    phiXuLy = 15;
    phiDichVu = 75 + (ketNoi > 10 ? (ketNoi - 10) * 5 : 0);
    phiKenh = kenh * 50;
  }

  const tong = phiXuLy + phiDichVu + phiKenh;

  document.getElementById("ketQua").innerText =
    `Mã KH: ${maKH} — Tổng tiền: $${tong}`;
};