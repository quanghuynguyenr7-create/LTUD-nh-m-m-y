def clean_comment_content(self):
    content = self.cleaned_data['content']
    
    # Danh sách các từ khóa cấm, spam nhạy cảm hoặc liên quan đến quảng cáo bẩn
    blacklisted_words = ['mua ban', 'hack', 'casino', 'rut tien', 'banned', 'quang cao']
    
    # Chuyển nội dung về chữ thường để kiểm tra không phân biệt hoa thường
    lowered_content = content.lower()
    
    for word in blacklisted_words:
        if word in lowered_content:
            # Tự động đánh dấu hoặc báo lỗi vi phạm chính sách cộng đồng
            raise ValidationError('Bình luận chứa ngôn từ không phù hợp hoặc quảng cáo spam.')
            
    return content
