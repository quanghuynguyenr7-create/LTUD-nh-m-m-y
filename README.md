# 📰 TinTức.News - Trang Web Tin Tức Hoàn Chỉnh

Một trang web tin tức hiện đại, đầy đủ chức năng được xây dựng bằng HTML, CSS và JavaScript.

## ✨ Các Tính Năng Chính

### 1. **Giao Diện Hiện Đại**
- Thiết kế responsive, thích hợp với mọi thiết bị (desktop, tablet, mobile)
- Gradient đẹp mắt và bố cục sạch sẽ
- Hiệu ứng hover khi rê chuột

### 2. **Chức Năng Tin Tức**
- Hiển thị tin tức mới nhất từ nhiều danh mục
- Tin nóng hôm nay với xếp hạng top trending
- Tin nổi bật ở vị trí chính

### 3. **Tìm Kiếm**
- Tìm kiếm theo từ khóa, danh mục, tác giả
- Kết quả tìm kiếm hiển thị ngay lập tức
- Thông báo khi không tìm thấy kết quả

### 4. **Hệ Thống Danh Mục**
- Công Nghệ
- AI & Machine Learning
- Fintech
- Chứng Khoán
- Tài Chính
- Startups
- Blog

### 5. **Đăng Ký Nhận Tin**
- Newsletter email với thẩm định hợp lệ
- Thiết kế card đẹp mắt

### 6. **Đăng Nhập & Đăng Ký**
- Modal popup cho đăng nhập
- Modal popup cho đăng ký
- Chuyển đổi mượt mà giữa hai form

### 7. **Đồng Hồ & Ngày Giờ**
- Hiển thị thời gian hiện tại
- Cập nhật tự động mỗi phút

### 8. **Footer Đầy Đủ**
- Thông tin liên hệ
- Links tới các danh mục
- Social media icons
- Chính sách bảo mật

## 📁 Cấu Trúc File

```
LTUD-nhóm-mẫu/
├── trang_chu.html      # File HTML chính
├── trang_chu.css       # Stylesheet CSS
├── trang_chu.js        # JavaScript cho các chức năng
└── README.md          # Hướng dẫn sử dụng (file này)
```

## 🚀 Cách Sử Dụng

### 1. **Mở Trang Web**
- Mở file `trang_chu.html` trực tiếp trong trình duyệt
- Hoặc sử dụng Live Server trong VS Code

### 2. **Các Chức Năng**

#### Tìm Kiếm Tin Tức
- Nhập từ khóa vào ô tìm kiếm ở header
- Nhấn Enter hoặc klik nút tìm kiếm
- Kết quả sẽ hiển thị ngay lập tức

#### Xem Danh Mục
- Nhấp vào các danh mục trong navbar
- Chọn danh mục để lọc tin tức

#### Đăng Ký Tin Tức
- Nhập email trong form newsletter ở sidebar
- Nhấn "Đăng Ký"
- Bạn sẽ nhận xác nhận

#### Đăng Nhập/Đăng Ký
- Nhấp vào "Đăng nhập" hoặc "Đăng ký" ở header
- Modal sẽ hiển thị
- Điền thông tin và nhấn submit

## 🎨 Tùy Chỉnh

### Thêm Tin Tức Mới
Mở file `trang_chu.js` và thêm vào mảng `newsData`:

```javascript
{
    id: 9,
    title: "Tiêu đề tin tức",
    category: "Danh mục",
    image: "link-hình-ảnh",
    description: "Mô tả chi tiết",
    author: "Tác giả",
    date: "thời gian"
}
```

### Thay Đổi Màu Sắc
Chỉnh sửa biến màu trong `trang_chu.css`:
- `#667eea` - Màu chính (tím)
- `#764ba2` - Màu phụ (tím đậm)
- `#2c3e50` - Màu footer (xám đen)

### Thay Đổi Logo
Tìm dòng này trong `trang_chu.html`:
```html
<div class="logo">
    <i class="fas fa-newspaper"></i> TinTức.News
</div>
```

Thay đổi văn bản hoặc icon

## 🛠️ Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc trang
- **CSS3** - Styling và responsive design
- **JavaScript Vanilla** - Interactivity
- **Font Awesome** - Icons
- **Placeholder Images** - Ảnh đại diện

## 📱 Responsive Design

Trang web được thiết kế để hoạt động tốt trên:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

## ⚙️ Yêu Cầu Hệ Thống

- Trình duyệt hiện đại (Chrome, Firefox, Safari, Edge)
- Kết nối internet (để load font và icon từ CDN)

## 🔒 Ghi Chú Bảo Mật

Hiện tại các chức năng đăng nhập/đăng ký chỉ là demo. Để triển khai thực tế, bạn cần:
- Backend server để xử lý đăng nhập
- Database để lưu trữ người dùng
- HTTPS để bảo mật thông tin

## 🐛 Khắc Phục Sự Cố

### Hình ảnh không hiển thị
- Kiểm tra kết nối internet
- Thay đổi URL hình ảnh trong `trang_chu.js`

### Font không hiển thị đúng
- Xóa cache trình duyệt (Ctrl+Shift+Delete)
- Reload trang (Ctrl+R hoặc F5)

### JavaScript không hoạt động
- Mở Console (F12) để xem lỗi
- Đảm bảo file `trang_chu.js` ở cùng thư mục

## 📊 Thống Kê

- **Số trang**: 1 (có thể mở rộng)
- **Số tin tức**: 8 mẫu (có thể thêm)
- **Danh mục**: 7 (có thể tùy chỉnh)
- **Ngôn ngữ**: Tiếng Việt

## 🚀 Cải Tiến Tương Lai

- [ ] Kết nối Backend API
- [ ] Hệ thống bình luận
- [ ] Lưu tin tức yêu thích
- [ ] Social sharing
- [ ] Analytics
- [ ] Admin dashboard
- [ ] Mobile app

## 📄 License

Dự án này được tạo ra cho mục đích học tập và có thể tự do sử dụng, sửa đổi.

## 👥 Tác Giả

Dự án được hoàn thành bằng GitHub Copilot Assistant.

---

**Thưởng thức trang web tin tức của bạn! 📰✨**
