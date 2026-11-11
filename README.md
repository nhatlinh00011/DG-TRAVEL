# DG TRAVEL

MVP Web App du lịch: khám phá địa điểm, bản đồ OpenStreetMap, định vị trình duyệt, đánh giá, cộng đồng và đăng ký dịch vụ.

## Công nghệ
- React + TypeScript + Vite
- React Leaflet + OpenStreetMap
- LocalStorage cho dữ liệu demo trên trình duyệt

## Chạy trên Windows
1. Cài Node.js bản LTS: https://nodejs.org/
2. Giải nén dự án, mở thư mục `dg-travel`.
3. Mở Terminal/CMD tại thư mục này.
4. Chạy:
   ```bash
   npm install
   npm run dev
   ```
5. Mở địa chỉ hiện trong terminal, thường là http://localhost:5173

Muốn mở trên điện thoại cùng Wi-Fi: chạy `npm run dev`, sau đó mở địa chỉ IPv4 của máy tính kèm `:5173` (ví dụ `http://192.168.1.10:5173`). Cho phép Node.js qua Windows Firewall nếu được hỏi.

## Đưa lên GitHub
Tạo repository mới tên `dg-travel` trên https://github.com (không tạo README nếu đã có README trong dự án), sau đó chạy tại thư mục dự án:
```bash
git init
git add .
git commit -m "Initial DG Travel MVP"
git branch -M main
git remote add origin https://github.com/USERNAME/dg-travel.git
git push -u origin main
```
Thay `USERNAME` bằng tên tài khoản GitHub của bạn.

## Phạm vi MVP hiện tại
- 4 khu vực: Khám phá, Dịch vụ, Cộng đồng, Cá nhân.
- Bản đồ OSM, marker các điểm mẫu tại Hà Nội, tìm theo tên/loại, lọc danh mục.
- Nút xin quyền vị trí GPS và đưa bản đồ tới vị trí hiện tại.
- Xem chi tiết địa điểm, lưu yêu thích, đánh giá demo.
- Đăng bài cộng đồng, đăng dịch vụ demo, lưu dữ liệu trên trình duyệt.
- Đăng nhập demo bằng email hoặc số điện thoại (chưa gửi OTP/email thật).

## Quan trọng trước khi vận hành thật
Đây là bản MVP chạy thử, không phải hệ thống production. Đăng nhập hiện chỉ là mô phỏng phía trình duyệt; không nhập mật khẩu thật hoặc dùng dữ liệu nhạy cảm. Để mở công khai cần bổ sung Firebase Auth (Google + SMS OTP), Firestore Security Rules, Storage, kiểm duyệt nội dung, chống spam, phân quyền chủ shop/admin và chính sách quyền riêng tư. Osm tile server cộng đồng có chính sách sử dụng; không dùng để tải hàng loạt hoặc lưu tile offline. Ghi công bản đồ © OpenStreetMap contributors.
