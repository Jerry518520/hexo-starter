hexo.extend.filter.register('before_generate', function(){
    const Post = hexo.model('Post');
    Post.forEach(post => {
        if (!post.urlname) {
            post.urlname = post.slug;
            post.save();
        }
    });
});
