def post_search_and_filter(request):
    search_query = request.GET.get('search', '')
    category_slug = request.GET.get('category', '')
    post_type = request.GET.get('type', 'News')  # 'News' hoặc 'Blog'
    
    # Chỉ lấy các bài viết đã được xuất bản công khai
    posts = Post.objects.filter(status='Published', post_type=post_type)
    
    if search_query:
        posts = posts.filter(
            Q(title__icontains=search_query) |
            Q(summary__icontains=search_query) |
            Q(content__icontains=search_query)
        )
        
    if category_slug:
        posts = posts.filter(category__slug=category_slug)
        
    # Lấy danh sách danh mục tương ứng với loại bài viết để hiển thị lên bộ lọc
    categories = Category.objects.filter(category_type=post_type)
    
    return render(request, 'search_results.html', {
        'posts': posts,
        'categories': categories,
        'search_query': search_query,
        'selected_category': category_slug,
        'post_type': post_type
    })
