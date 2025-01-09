document.addEventListener('DOMContentLoaded', function() {
    // 获取主内容区域
    const mainContent = document.getElementById('main-content');
    
    // 直接显示内容，不需要动画
    mainContent.classList.remove('hidden');

    // 横图轮播功能
    const sliderContainer = document.querySelector('.slider-container');
    const sliderImages = document.querySelectorAll('.slider-container img');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentIndex = 0;

    function showImage(index) {
        sliderImages.forEach(img => {
            img.style.transition = 'opacity 1.5s ease-in-out';  // 增加过渡时间和缓动效果
            img.classList.remove('active');
        });
        sliderImages[index].classList.add('active');
    }

    // 自动轮播
    function autoSlide() {
        currentIndex = (currentIndex + 1) % sliderImages.length;
        showImage(currentIndex);
    }

    let slideInterval = setInterval(autoSlide, 8000);  // 增加轮播间隔时间

    // 按钮点击事件
    prevBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        showImage(currentIndex);
        slideInterval = setInterval(autoSlide, 8000);
    });

    nextBtn.addEventListener('click', () => {
        clearInterval(slideInterval);
        currentIndex = (currentIndex + 1) % sliderImages.length;
        showImage(currentIndex);
        slideInterval = setInterval(autoSlide, 8000);
    });
}); 