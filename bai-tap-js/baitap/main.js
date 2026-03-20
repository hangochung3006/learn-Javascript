let giaTriRandom = Math.random();
console.log("Giá trị random từ 0 -> sát 1 là " + giaTriRandom);

let giaTriNguyenRandom = parseInt(Math.random() * 100);
console.log("Giá trị random từ 0 -> sát 100 là " + giaTriNguyenRandom);

let giaTriNguyen30Random = parseInt(Math.random() * 30);
console.log("Giá trị random từ 0 -> sát 30 là " + giaTriNguyen30Random);

function tinhTong(a, b) {
  return a + b;
}
console.log("Tổng của 5 + 10 là " + tinhTong(5, 10));

let inHoTen = (hoTen) => console.log("tên bạn là: " + hoTen);
inHoTen("Hưng");
