// ==================== DATA ====================
const newsData = [
    {
        id: 1,
        title: "Công ty startup Việt vừa nhận vốn đầu tư 100 triệu USD",
        category: "Startups",
        image: "https://via.placeholder.com/300x200?text=Startup+Funding",
        description: "Một công ty startup công nghệ Việt Nam vừa hoàn thành vòng gọi vốn Series B với số tiền lên tới 100 triệu USD. Đây là một bước tiến lớn trong sự phát triển của ngành công nghệ...",
        author: "Nguyễn Bảo",
        date: "3 giờ trước"
    },
    {
        id: 2,
        title: "OpenAI phát hành GPT-5 với khả năng xử lý dữ liệu siêu mạnh",
        category: "AI",
        image: "https://via.placeholder.com/300x200?text=GPT-5+Release",
        description: "OpenAI vừa công bố phiên bản mới nhất của mô hình ngôn ngữ GPT-5 với những cải thiện đáng kể về hiệu suất và khả năng xử lý. Mô hình này có thể xử lý khối lượng dữ liệu lớn hơn...",
        author: "Lê Minh",
        date: "4 giờ trước"
    },
    {
        id: 3,
        title: "Apple ra mắt iPhone 16 Pro Max với chip A19 Pro",
        category: "Công Nghệ",
        image: "https://via.placeholder.com/300x200?text=iPhone+16+Pro",
        description: "Apple đã chính thức giới thiệu dòng iPhone 16 Pro Max mới với bộ xử lý A19 Pro mạnh mẽ. Thiết bị này hỗ trợ 5G nhanh hơn và pin được cải thiện...",
        author: "Đỗ Anh",
        date: "5 giờ trước"
    },
    {
        id: 4,
        title: "Meta Platforms tăng đầu tư vào công nghệ Metaverse",
        category: "Công Nghệ",
        image: "https://via.placeholder.com/300x200?text=Metaverse",
        description: "Meta Platforms vừa công bố kế hoạch tăng đầu tư hàng tỷ đô la vào phát triển Metaverse. Công ty tin rằng đây sẽ là tương lai của internet...",
        author: "Trần Hà",
        date: "6 giờ trước"
    },
    {
        id: 5,
        title: "Google Gemini 2.0 có khả năng hiểu hình ảnh tốt hơn",
        category: "AI",
        image: "https://via.placeholder.com/300x200?text=Google+Gemini",
        description: "Google vừa phát hành Gemini 2.0 với khả năng xử lý hình ảnh được cải thiện đáng kể. AI này giờ có thể phân tích các hình ảnh phức tạp với độ chính xác cao...",
        author: "Phạm Dũng",
        date: "7 giờ trước"
    },
    {
        id: 6,
        title: "Nvidia đạt giá trị vốn hóa thị trường 3 nghìn tỷ USD",
        category: "Chứng Khoán",
        image: "https://via.placeholder.com/300x200?text=Nvidia+Stock",
        description: "Nvidia trở thành công ty thứ ba đạt giá trị vốn hóa thị trường 3 nghìn tỷ USD. Sự tăng trưởng này được thúc đẩy bởi nhu cầu cao về chip AI...",
        author: "Vũ Long",
        date: "8 giờ trước"
    },
    {
        id: 7,
        title: "Bitcoin vượt mức 100,000 USD lần đầu tiên",
        category: "Fintech",
        image: "https://via.placeholder.com/300x200?text=Bitcoin",
        description: "Bitcoin vừa phá vỡ mốc 100,000 USD lần đầu tiên trong lịch sử. Đây được coi là một cột mốc quan trọng cho thị trường tiền điện tử...",
        author: "Hoàng Thái",
        date: "2 giờ trước"
    },
    {
        id: 8,
        title: "Thương mại điện tử Việt Nam tăng trưởng 30% năm 2024",
        category: "Fintech",
        image: "https://via.placeholder.com/300x200?text=E-commerce+Vietnam",
        description: "Lĩnh vực thương mại điện tử Việt Nam ghi nhận tốc độ tăng trưởng ấn tượng 30% so với năm trước. Xu hướng mua sắm online tiếp tục tăng mạnh...",
        author: "Đinh Sơn",
        date: "10 giờ trước"
    }
];

// ==================== FUNCTIONS ====================

// Cập nhật đồng hồ
function updateClock() {
    const clockElement = document.getElementById('clock');
    const today = new Date();
    
    const weekday = today.toLocaleDateString('vi-VN', {
        weekday: 'long'
    });
    
    const dateStr = `${weekday}, ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    clockElement.textContent = dateStr;
}

// Tải tin tức
function loadNews() {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '';
    
    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="news-item-image">
                <img src="${news.image}" alt="${news.title}">
            </div>
            <div class="news-item-content">
                <span class="news-category">${news.category}</span>
                <div class="news-item-title">
                    <a href="#" onclick="viewNews(${news.id})">${news.title}</a>
                </div>
                <p class="news-item-desc">${news.description}</p>
                <p class="news-item-meta">
                    <strong>${news.author}</strong> | ${news.date}
                </p>
            </div>
        `;
        newsGrid.appendChild(newsItem);
    });
}

// Xem chi tiết tin
function viewNews(id) {
    const news = newsData.find(n => n.id === id);
    if (news) {
        alert(`${news.title}\n\n${news.description}\n\nTác giả: ${news.author}\nTiempo: ${news.date}`);
    }
}

// Tìm kiếm tin tức
function searchNews(event) {
    event.preventDefault();
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchInput.trim() === '') {
        loadNews();
        return;
    }
    
    const filteredNews = newsData.filter(news => 
        news.title.toLowerCase().includes(searchInput) || 
        news.description.toLowerCase().includes(searchInput) ||
        news.category.toLowerCase().includes(searchInput)
    );
    
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '';
    
    if (filteredNews.length === 0) {
        newsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px; color: #999;">Không tìm thấy tin tức nào phù hợp với từ khóa của bạn.</p>';
        return;
    }
    
    filteredNews.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="news-item-image">
                <img src="${news.image}" alt="${news.title}">
            </div>
            <div class="news-item-content">
                <span class="news-category">${news.category}</span>
                <div class="news-item-title">
                    <a href="#" onclick="viewNews(${news.id})">${news.title}</a>
                </div>
                <p class="news-item-desc">${news.description}</p>
                <p class="news-item-meta">
                    <strong>${news.author}</strong> | ${news.date}
                </p>
            </div>
        `;
        newsGrid.appendChild(newsItem);
    });
}

// Hiển thị modal đăng nhập
function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

// Hiển thị modal đăng ký
function showRegister() {
    document.getElementById('registerModal').style.display = 'block';
}

// Đóng modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Chuyển giữa modal đăng nhập và đăng ký
function switchModal() {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (loginModal.style.display === 'block') {
        loginModal.style.display = 'none';
        registerModal.style.display = 'block';
    } else {
        registerModal.style.display = 'none';
        loginModal.style.display = 'block';
    }
}

// Đăng ký nhận tin
function subscribeNews(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email.trim() === '') {
        alert('Vui lòng nhập email của bạn!');
        return;
    }
    
    // Kiểm tra email hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email không hợp lệ!');
        return;
    }
    
    alert(`Cảm ơn bạn! Chúng tôi sẽ gửi tin tức mới nhất tới email: ${email}`);
    event.target.reset();
}

// Đóng modal khi nhấp bên ngoài
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật đồng hồ khi tải trang
    updateClock();
    
    // Cập nhật đồng hồ mỗi phút
    setInterval(updateClock, 60000);
    
    // Tải tin tức
    loadNews();
    
    // Xử lý sự kiện form đăng nhập
    document.querySelectorAll('#loginModal form, #registerModal form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Chức năng này đang được phát triển. Vui lòng quay lại sau!');
        });
    });
});

// Filter by category (nếu cần)
function filterByCategory(category) {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '';
    
    const filtered = category === 'all' ? newsData : newsData.filter(n => n.category === category);
    
    filtered.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="news-item-image">
                <img src="${news.image}" alt="${news.title}">
            </div>
            <div class="news-item-content">
                <span class="news-category">${news.category}</span>
                <div class="news-item-title">
                    <a href="#" onclick="viewNews(${news.id})">${news.title}</a>
                </div>
                <p class="news-item-desc">${news.description}</p>
                <p class="news-item-meta">
                    <strong>${news.author}</strong> | ${news.date}
                </p>
            </div>
        `;
        newsGrid.appendChild(newsItem);
    });
}
