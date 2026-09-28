/*
| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
| 1. Khoảng cách đúng 2 km | distanceKm = 2, isRaining = false | 12.000 VNĐ | 12.000 VNĐ |
| 2. Khoảng cách lớn hơn 2 km | distanceKm = 4, isRaining = false | 30.000 VNĐ | 21.000 VNĐ |

Nguyên nhân ở dòng: totalFare = baseFare + distanceKm * pricePerAdditionalKm;
Khi distanceKm > 2, chương trình đang lấy cả quãng đường để tính giá km phụ trội.
Công thức đúng: totalFare = baseFare + (distanceKm - 2) * pricePerAdditionalKm;
Lỗi này được gọi là lỗi tính lặp quãng đường cơ sở vì 2 km đầu tiên đã nằm trong baseFare nhưng lại tiếp tục được tính trong phần pricePerAdditionalKm.
*/
const distanceKm = 4;
const isRaining = false;
const baseFare = 12000;
const pricePerAdditionalKm = 4500;
const weatherMultiplier = 1.2;
let totalFare = 0;
if (distanceKm <= 2) {
  totalFare = baseFare;
} else {
  totalFare = baseFare + (distanceKm - 2) * pricePerAdditionalKm;
}

if (isRaining) {
  totalFare = totalFare * weatherMultiplier;
}

console.log('Khoang cach di chuyen:', distanceKm, 'km');
console.log('Tong cuoc phi chuyen di:', totalFare, 'VNĐ');

