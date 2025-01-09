document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.hero-slider img');
    let currentIndex = 0;

    function showNextImage() {
        // 移除当前图片的 active 类
        images[currentIndex].classList.remove('active');
        
        // 计算下一张图片的索引
        currentIndex = (currentIndex + 1) % images.length;
        
        // 给下一张图片添加 active 类
        images[currentIndex].classList.add('active');
    }

    // 每 5 秒切换一次图片
    setInterval(showNextImage, 5000);
}); 