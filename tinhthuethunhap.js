/** Đầu Vào
 * Nhập hoTen, thuNhapNam, soPhuThuoc
 * 
 ** Xử Lý
 * Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 * Tính số tiền thuế phải đóng: tienThue = thuNhapChiuThue * (thuế suất / 100)
 * 
 * 
 ** Đầu Ra
 * in ra ketQuaThue
 *
 */

 document.getElementById("btnTinhThue").onclick = function (e) {
  e.preventDefault(); 
  let hoTen = document.getElementById("hoTen").value;
  let thuNhapNam = document.getElementById("thuNhapNam").value;
  let soPhuThuoc = document.getElementById("soPhuThuoc").value;
  let thuNhapChiuThue = thuNhapNam - 4 - soPhuThuoc * 1.6;
  if (thuNhapChiuThue <= 0) {
    document.getElementById("ketQuaThue").innerText =
     `Thu Nhập ${hoTen} không chịu thuế`;
  }
  let thueSuat = 0;
  if (thuNhapChiuThue <= 60) {
    thueSuat = 5;
  } else if (thuNhapChiuThue <= 120) {
    thueSuat = 10; 
  } else if (thuNhapChiuThue <= 210) {
    thueSuat = 15; 
  } else if (thuNhapChiuThue <= 384) {
    thueSuat = 20; 
  } else if (thuNhapChiuThue <= 624) {
    thueSuat = 25; 
  } else if (thuNhapChiuThue <= 960) {
    thueSuat = 30; 
  } else {
    thueSuat = 35;
  }

  let tienThue = thuNhapChiuThue * (thueSuat / 100);
  document.getElementById("ketQuaThue").innerText = 
  `${hoTen} phải đóng thuế: ${tienThue} triệu (thuế suất ${thueSuat}%)`

};