/** Đầu Vào
 * Nhập tên khách hàng tenKH
 * Nhập số Kw soKw
 ** Xử Lý
 * Tính tiền điện bằng bảng giá theo bậc thang
 * 0 – 50 kw = 500d ; 51 – 100 kw = 650d ;101 – 200 kw = 850d ;
 * 201 – 350 kw = 1100d ; Trên 350 kW = 1300d
 * Tạo biến tongTien = 0
 ** Đầu Ra
 * in ra tenKH
 * in ra inTienDien
 */

 document.getElementById("btnTienDien").onclick = function (e) {
  e.preventDefault(); 
  let tenKH = document.getElementById("tenKH").value;
  let soKw = document.getElementById("soKw").value*1;
  let tongTien = 0;
  let soKwConLai = soKw;
  if (soKwConLai > 350) {
    tongTien = tongTien + (soKwConLai - 350) * 1300;
    soKwConLai = 350;
  }
  if (soKwConLai > 200) {
    tongTien = tongTien + (soKwConLai - 200) * 1100;
    soKwConLai = 200;
  }
  if (soKwConLai > 100) {
    tongTien = tongTien + (soKwConLai - 100) * 850;
    soKwConLai = 100;
  }
  if (soKwConLai > 50) {
    tongTien = tongTien + (soKwConLai - 50) * 650;
    soKwConLai = 50;
  }
  if (soKwConLai > 0) {
    tongTien = tongTien + soKwConLai * 500;
  }
  let contentHTML = `Khách hàng ${tenKH} cần thanh toán: ${tongTien} VNĐ`;
  document.getElementById("inTienDien").innerText = contentHTML;
};