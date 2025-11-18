// 点赞功能示例
document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', function() {
        if (this.src.includes('like.png')) {
            this.src = 'images/icons/liked.png'; // 假设有一个点赞后的图标
        }
    });
});

// 点赞功能
document.querySelectorAll('.icon-like').forEach(like => {
    like.addEventListener('click', function() {
        this.classList.toggle('active');
        
        // 更新点赞数显示
        if(this.classList.contains('active')) {
            // 这里可以添加实际的点赞逻辑
        }
    });
});

// 评论功能
document.querySelectorAll('.send-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const commentText = input.value.trim();
        
        if(commentText) {
            const commentsContainer = this.closest('.comments');
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            newComment.innerHTML = `
                <span class="commenter">我</span>
                <span class="comment-text">${commentText}</span>
            `;
            
            // 在输入框前插入新评论
            const commentInput = this.closest('.comment-input');
            commentsContainer.insertBefore(newComment, commentInput);
            input.value = '';
        }
    });
});

// 回车发送评论
document.querySelectorAll('.comment-input input').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            this.nextElementSibling.click();
        }
    });
});

/*// 为每条评论添加回复按钮
document.querySelectorAll('.comment').forEach(comment => {
    const replyBtn = document.createElement('span');
    replyBtn.className = 'reply-btn';
    replyBtn.textContent = '回复';
    replyBtn.style.marginLeft = '8px';
    replyBtn.style.color = '#576b95';
    replyBtn.style.cursor = 'pointer';
    replyBtn.style.fontSize = '12px';
    
    replyBtn.addEventListener('click', function() {
        const commenter = comment.querySelector('.commenter').textContent;
        const input = document.querySelector('.comment-input input');
        input.value = `回复 ${commenter}: `;
        input.focus();
    });
    
    comment.appendChild(replyBtn);
});

// 发送评论功能
document.querySelectorAll('.send-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const input = this.previousElementSibling;
        let commentText = input.value.trim();
        
        if(commentText) {
            const commentsContainer = this.closest('.comments');
            const newComment = document.createElement('div');
            newComment.className = 'comment';
            
            // 检测是否是回复
            if(commentText.startsWith('回复 ')) {
                const parts = commentText.split(':');
                const replyTo = parts[0].replace('回复 ', '').trim();
                const replyContent = parts.slice(1).join(':').trim();
                
                newComment.innerHTML = `
                    <span class="commenter">我</span>
                    <span class="reply-separator">回复</span>
                    <span class="commenter">${replyTo}</span>
                    <span class="reply-colon">:</span>
                    <span class="comment-text">${replyContent}</span>
                `;
            } else {
                newComment.innerHTML = `
                    <span class="commenter">我</span>
                    <span class="comment-text">${commentText}</span>
                `;
            }
            
            // 在输入框前插入新评论
            commentsContainer.insertBefore(newComment, this.closest('.comment-input'));
            input.value = '';
        }
    });
}); */


// 图片方向检测与分类
document.querySelectorAll('.moment-images img').forEach(img => {
    const tempImg = new Image();
    tempImg.src = img.src;
    
    tempImg.onload = function() {
        const width = this.naturalWidth;
        const height = this.naturalHeight;
        
        // 判断图片方向
        if(width > height) {
            img.classList.add('landscape');
        } else if(height > width) {
            img.classList.add('portrait');
        } else {
            img.classList.add('square');
        }
        
        // 设置背景图片
        img.style.setProperty('--img-src', `url(${img.src})`);
    };
    
    tempImg.onerror = function() {
        console.error('图片加载失败:', img.src);
        img.style.border = '2px solid red';
    };
});
