/** Đầu Vào
 * Nhập diểm chuẩn
 * Nhập điểm 3 môn thi
 * Nhập khu vực (A, B, C hoặc X nếu không thuộc ưu tiên)
 * Nhập đối tượng (1, 2, 3 hoặc 0 nếu không thuộc đối tượng ưu tiên)
 ** Xử Lý
 * Nếu có môn = 0 -> in kết quả "Rớt-có môn bị 0 điểm".
 * Tạo biến khuVuc = 0
 * Tạo biến doiTuong = 0
 * Tạo biến tongDiem = mon1 + mon2 + mon3 + diemKhuVuc + diemDoiTuong
 ** Đầu Ra
 * in ra inKetQua 
 */

document.getElementById("btnCheck").onclick = function (e) {
  e.preventDefault();
  let mon1 = document.getElementById("mon1").value*1;
  let mon2 = document.getElementById("mon2").value*1;
  let mon3 = document.getElementById("mon3").value*1;
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value;
  if (mon1 == 0 || mon2 == 0 || mon3 == 0) {
    document.getElementById("inKetQua").innerText = "Rớt - Có môn bị 0 điểm";
    return;
  }
 
 
  let khuVucUuTien = 0;
  switch (khuVuc) {
    case 'A': khuVucUuTien = 2; break;
    case 'B': khuVucUuTien = 1; break;
    case 'C': khuVucUuTien = 0.5; break;
    default: khuVucUuTien = 0;
  }
  let doiTuongUuTien = 0;
  switch (doiTuong) {
    case 1: doiTuongUuTien = 2.5; break;
    case 2: doiTuongUuTien = 1.5; break;
    case 3: doiTuongUuTien = 1; break;
    default: doiTuongUuTien = 0;
  }
  let tongDiem = mon1 + mon2 + mon3 + khuVucUuTien + doiTuongUuTien;
  if (tongDiem >= diemChuan) {
    document.getElementById("inKetQua").innerText = `Đậu - Tổng điểm: ${tongDiem}`;
  } else {
    document.getElementById("inKetQua").innerText = `Rớt - Tổng điểm: ${tongDiem}`;
  }
};