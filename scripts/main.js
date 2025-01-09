document.addEventListener('DOMContentLoaded', function() {
    // 恢复首页功能
    const heroSection = document.getElementById('hero');
    const mainContent = document.getElementById('main-content');
    const enterButton = document.querySelector('.enter-space-btn');
    const homeLink = document.querySelector('.home-link');
    const heroImages = document.querySelectorAll('.hero-slider img');
    let currentImageIndex = 0;
    let isTransitioning = false;

    // 预加载主页面
    mainContent.style.display = 'none';
    mainContent.classList.remove('hidden');

    // 首页轮播函数
    function rotateHeroImages() {
        if (isTransitioning) return;
        isTransitioning = true;

        heroImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % heroImages.length;
        heroImages[currentImageIndex].classList.add('active');

        setTimeout(() => {
            isTransitioning = false;
        }, 2000);
    }

    // 开始首页轮播
    const heroSlideInterval = setInterval(rotateHeroImages, 5000);

    // 进入空间按钮点击事件
    enterButton.addEventListener('click', function() {
        clearInterval(heroSlideInterval);
        heroSection.style.opacity = '0';
        
        requestAnimationFrame(() => {
            mainContent.style.display = 'block';
            mainContent.classList.add('visible');
            setTimeout(() => {
                heroSection.style.display = 'none';
            }, 1000);
        });
    });

    // 主页按钮点击事件
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        mainContent.classList.remove('visible');
        heroSection.style.display = 'block';
        
        requestAnimationFrame(() => {
            heroSection.style.opacity = '1';
            currentImageIndex = 0;
            heroImages.forEach((img, index) => {
                img.classList.toggle('active', index === 0);
            });
            setInterval(rotateHeroImages, 5000);
        });
    });

    // 印象集轮播功能
    const images = document.querySelectorAll('.slider-container img');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    // 自动轮播
    let autoSlide = setInterval(nextImage, 5000);

    // 鼠标悬停时暂停
    const slider = document.querySelector('.horizontal-slider');
    slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextImage, 5000);
    });
}); 