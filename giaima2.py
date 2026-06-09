def clean_title(self):
    title = self.cleaned_data['title']
    slug = slugify(title)
    
    # Kiểm tra trùng lặp tiêu đề/slug trong cơ sở dữ liệu
    queryset = Post.objects.filter(slug=slug)
    
    # Nếu đang ở chế độ chỉnh sửa bài viết cũ, loại trừ bài viết hiện tại ra
    if self.instance.pk:
        queryset = queryset.exclude(pk=self.instance.pk)
        
    if queryset.exists():
        raise ValidationError('Tiêu đề bài viết này đã tồn tại hoặc trùng đường dẫn tĩnh hệ thống.')
        
    return title
