# 🚀 Hướng Dẫn Cài Đặt & Sử Dụng - TinTức.News

## 📋 Mục Đích Dự Án

Dự án này là một trang web tin tức hoàn chỉnh được xây dựng cho mục đích học tập. Nó có đầy đủ các tính năng cần thiết cho một trang tin tức chuyên nghiệp.

## 📦 Các File Trong Dự Án

| File | Mô Tả |
|------|-------|
| `trang_chu.html` | Trang chủ chính của website |
| `trang_chu.css` | Stylesheet toàn bộ trang |
| `trang_chu.js` | JavaScript cho các chức năng tương tác |
| `chi-tiet-tin.html` | Trang chi tiết bài viết tin tức |
| `README.md` | Hướng dẫn tổng quan |
| `HUONG_DAN.md` | File hướng dẫn này |

## 💻 Yêu Cầu Hệ Thống

- **Trình duyệt web hiện đại**: 
  - Chrome 90+
  - Firefox 88+
  - Safari 14+
  - Edge 90+
  
- **Kết nối Internet**: Để tải Font Awesome icons từ CDN

- **Code Editor** (tuỳ chọn): VS Code, Sublime Text, etc.

## 🎬 Bắt Đầu Nhanh

### Cách 1: Mở File Trực Tiếp
1. Tìm file `trang_chu.html` trong thư mục dự án
2. Nhấp chuột phải → Chọn "Mở với trình duyệt"
3. Trang web sẽ hiển thị ngay

### Cách 2: Sử Dụng Live Server (VS Code)
1. Mở VS Code
2. Mở thư mục dự án (File → Open Folder)
3. Cài đặt extension "Live Server" (nếu chưa có)
   - Mở Extensions (Ctrl+Shift+X)
   - Tìm "Live Server"
   - Nhấp Install
4. Nhấp chuột phải vào `trang_chu.html` → Chọn "Open with Live Server"
5. Trình duyệt sẽ tự động mở trang web

### Cách 3: Sử Dụng Python (nếu cài đặt)
```bash
# Python 3
python -m http.server 8000

# Sau đó mở: http://localhost:8000/trang_chu.html
```

## 🎯 Các Tính Năng Chính

### 1️⃣ Trang Chủ
- Tin nổi bật lớn ở đầu trang
- Lưới tin tức các danh mục khác nhau
- Sidebar hiển thị tin nóng top trending
- Newsletter subscription

### 2️⃣ Tìm Kiếm
**Cách sử dụng:**
1. Nhập từ khóa vào ô tìm kiếm ở phía trên cùng
2. Nhấn Enter hoặc click nút 🔍
3. Kết quả tìm kiếm sẽ hiển thị ngay

**Tìm kiếm theo:**
- Tiêu đề tin tức
- Nội dung mô tả
- Danh mục
- Tác giả

### 3️⃣ Danh Mục
Các danh mục tin tức:
- 📱 Công Nghệ
- 🤖 AI & Machine Learning
- 💰 Fintech
- 📊 Chứng Khoán
- 💵 Tài Chính
- 🚀 Startups
- 📝 Blog

**Click vào danh mục** trong navbar để lọc tin tức

### 4️⃣ Đăng Ký Nhận Tin
**Cách sử dụng:**
1. Tìm mục "Đăng Ký Tin Tức" ở sidebar phải
2. Nhập email của bạn
3. Click "Đăng Ký"
4. Bạn sẽ nhận được xác nhận

### 5️⃣ Đăng Nhập / Đăng Ký
**Đăng Nhập:**
1. Click "Đăng nhập" ở góc trên phải
2. Nhập email/tên đăng nhập
3. Nhập mật khẩu
4. Click "Đăng Nhập"

**Đăng Ký:**
1. Click "Đăng ký" ở góc trên phải
2. Hoặc từ form đăng nhập, click "Đăng ký ngay"
3. Điền thông tin cần thiết
4. Click "Đăng Ký"

### 6️⃣ Đồng Hồ & Thời Gian
- Hiển thị tự động ở header
- Cập nhật mỗi phút
- Format: Thứ, Ngày/Tháng/Năm

### 7️⃣ Chia Sẻ Tin Tức
Trên trang chi tiết tin (chi-tiet-tin.html):
- **Chia sẻ Facebook** - Chia sẻ lên tường Facebook
- **Chia sẻ Twitter** - Đăng lên Twitter/X
- **Sao chép Link** - Copy URL để chia sẻ ở nơi khác

## 🎨 Tùy Chỉnh Giao Diện

### Thay Đổi Màu Sắc
Mở file `trang_chu.css` và tìm các màu:

```css
/* Màu chính - Tím nhạt */
#667eea

/* Màu phụ - Tím đậm */
#764ba2

/* Màu nền - Xám đen */
#2c3e50
```

Thay thế bằng màu bạn muốn.

### Thay Logo
Mở `trang_chu.html` và tìm:
```html
<div class="logo">
    <i class="fas fa-newspaper"></i> TinTức.News
</div>
```

Thay đổi text "TinTức.News" hoặc icon

### Thay Đổi Font
Tìm trong `trang_chu.css`:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Thay bằng font khác như: 'Arial', 'Times New Roman', etc.

## 📝 Quản Lý Tin Tức

### Thêm Tin Tức Mới
Mở `trang_chu.js` tìm mảng `newsData`:

```javascript
const newsData = [
    // Tin cũ ở đây...
    
    // THÊM TIN MỚI NHƯ SAU:
    {
        id: 9,
        title: "Tiêu đề tin tức của bạn",
        category: "Danh mục",
        image: "https://via.placeholder.com/300x200?text=Your+Image",
        description: "Mô tả ngắn gọn về tin tức",
        author: "Tên tác giả",
        date: "1 giờ trước"
    }
];
```

### Thay Đổi Tin Tức Hiện Có
Tìm tin cần thay đổi trong mảng `newsData` và sửa các trường.

### Cập Nhật Hình Ảnh
Thay URL trong trường `image`. Bạn có thể:
- Dùng placeholder online
- Upload hình lên host ảnh (Imgur, Cloudinary)
- Dùng đường dẫn local `../images/tên-file.jpg`

## 🔧 Khắc Phục Sự Cố

### ❌ Hình ảnh không hiển thị
**Nguyên nhân:** URL ảnh không hợp lệ hoặc không có internet

**Giải pháp:**
- Kiểm tra kết nối internet
- Kiểm tra URL hình ảnh
- Thay bằng ảnh khác

### ❌ Chức năng không hoạt động
**Nguyên nhân:** File JavaScript không tải hoặc có lỗi

**Giải pháp:**
1. Mở Console (F12 hoặc Ctrl+Shift+I)
2. Xem phần "Console" có lỗi gì
3. Đảm bảo file `trang_chu.js` ở cùng thư mục
4. Reload trang (Ctrl+R)

### ❌ Font/Icon không hiển thị
**Nguyên nhân:** Không có kết nối internet

**Giải pháp:**
- Kết nối internet để tải Font Awesome từ CDN
- Hoặc download Font Awesome offline

### ❌ Giao diện lộn xộn trên mobile
**Giải pháp:**
- Refresh trang (F5)
- Tắt zoom trình duyệt (Ctrl+0)
- Kiểm tra khích thước màn hình (F12 → Device Mode)

## 📱 Tối Ưu Hóa Mobile

Trang web đã được thiết kế responsive cho:
- ✅ Mobile (320px - 767px)
- ✅ Tablet (768px - 1024px)  
- ✅ Desktop (1025px+)

Nếu cần điều chỉnh:
1. Mở Developer Tools (F12)
2. Click Device Toolbar
3. Chọn thiết bị để test
4. Chỉnh sửa CSS theo cần

## 🛡️ Bảo Mật & Thực Tiễn

### ⚠️ Ghi Chú Quan Trọng
- Đây chỉ là **demo frontend**
- Chức năng đăng nhập chỉ tạo modal, **không thực sự lưu dữ liệu**
- Không nên dùng cho sản xuất mà không có backend

### Để Triển Khai Thực Tế
Bạn cần:
1. **Backend server** (Node.js, Python, PHP, etc.)
2. **Database** (MongoDB, MySQL, PostgreSQL)
3. **HTTPS** để bảo mật
4. **Authentication** hệ thống đăng nhập
5. **API** để giao tiếp frontend-backend

## 📚 Tài Liệu Tham Khảo

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript
- [Font Awesome](https://fontawesome.com/) - Icons
- [CSS-Tricks](https://css-tricks.com/) - CSS tips
- [JavaScript.info](https://javascript.info/) - JavaScript guide

## 🎓 Kiến Thức Để Học

Dự án này giúp bạn học:
- ✅ Cấu trúc HTML5 semantic
- ✅ CSS3 responsive design
- ✅ JavaScript vanilla (DOM manipulation)
- ✅ Flexbox & Grid layout
- ✅ Modal dialogs
- ✅ Event handling
- ✅ Local data management

## 💡 Ý Tưởng Mở Rộng

Bạn có thể phát triển thêm:

1. **Backend API**
   - Lưu trữ tin tức trong database
   - API endpoints để fetch tin

2. **Authentication**
   - Đăng nhập/Đăng ký thực sự
   - User profiles
   - Saved articles

3. **Comments System**
   - Bình luận cho mỗi bài viết
   - Replying to comments
   - Rating/Voting

4. **Search & Filter**
   - Tìm kiếm nâng cao
   - Filter theo ngày, tác giả
   - Pagination

5. **Admin Dashboard**
   - Quản lý bài viết
   - Quản lý người dùng
   - Analytics

6. **Mobile App**
   - React Native app
   - Flutter app
   - PWA

## 🤝 Có Vấn Đề?

Nếu gặp bất kỳ vấn đề:
1. Kiểm tra console (F12) xem có lỗi gì
2. Đọc README.md và file này
3. Thử reload trang (Ctrl+R)
4. Thử xóa cache (Ctrl+Shift+Delete)

## ✨ Chúc Mừng!

Bạn đã có một trang web tin tức hoàn chỉnh! 🎉

Hãy tiếp tục học, thử nghiệm, và phát triển thêm những tính năng mới.

**Happy Coding!** 👨‍💻👩‍💻

---

**Phiên bản:** 1.0  
**Cập nhật lần cuối:** Tháng 6, 2024
