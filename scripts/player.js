document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.querySelector('.play-btn');
    const playIcon = document.querySelector('.play-icon');
    const progress = document.querySelector('.progress');
    const progressBar = document.querySelector('.progress-bar');
    const timeDisplay = document.querySelector('.time-display');

    // 添加错误处理
    audio.addEventListener('error', function(e) {
        console.error('Error loading audio:', e);
        playIcon.textContent = '⚠';
    });

    // 确保音频已加载
    audio.addEventListener('loadeddata', function() {
        console.log('Audio loaded successfully');
    });

    // 播放/暂停控制
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(function(error) {
                console.log('播放失败:', error);
            });
            playIcon.textContent = '⏸';
        } else {
            audio.pause();
            playIcon.textContent = '▶';
        }
    });

    // 更新进度条
    audio.addEventListener('timeupdate', function() {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percent + '%';
        
        // 更新时间显示
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60);
        timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    });

    // 点击进度条跳转
    progressBar.addEventListener('click', function(e) {
        const clickPosition = (e.offsetX / this.offsetWidth);
        audio.currentTime = clickPosition * audio.duration;
    });
}); 