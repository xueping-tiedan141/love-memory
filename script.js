// 浪漫网页主脚本

// 1. 初始化粒子背景
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ff6b95' },
        shape: { type: 'heart' },  // 爱心形状粒子
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffb6c1',
            opacity: 0.4,
            width: 1
        },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
        }
    }
});

// 2. 纪念日倒计时
function updateCountdown() {
    const anniversaryDate = new Date('2024-04-13'); // 修改成你们的纪念日
    const now = new Date();
    const diff = now - anniversaryDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 3. 随机情话
const loveQuotes = [
    "这是我们一起过的第二个情人节，虽然我们相隔万里，但是我们的心一直贴得很近。"
];

document.getElementById('random-quote').textContent = 
    loveQuotes[Math.floor(Math.random() * loveQuotes.length)];

// 4. 加载回忆时间轴
const memories = [
    {
        date: "2023-07-15",
        title: "✨ 第一次遇见你",
        description: "在那个夏天的咖啡馆，阳光刚好落在你发梢。",
        icon: "☕"
    },
    {
        date: "2023-08-20",
        title: "🎬 第一次约会",
        description: "看了场无聊的电影，但因为你在旁边，每一帧都精彩。",
        icon: "🎥"
    },
    {
        date: "2023-10-01",
        title: "💕 在一起的日子",
        description: "你说好，我说永远。",
        icon: "💑"
    },
    {
        date: "2024-01-01",
        title: "🎆 跨年之夜",
        description: "在烟花下许愿：以后的每一年都要有你。",
        icon: "✨"
    }
];

function loadTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';
    
    memories.forEach((memory, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item fade-in-up';
        item.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-icon">${memory.icon}</div>
                <div class="timeline-date">${memory.date}</div>
                <h3>${memory.title}</h3>
                <p>${memory.description}</p>
            </div>
        `;
        timeline.appendChild(item);
    });
}

//loadTimeline();

// 5. 照片墙
const photos = [
    { src: "photos/yingguo.jpg", caption: "一起游玩伦敦", date: "2025-12-25" },
    { src: "photos/kanqiu.jpg", caption: "一起看球赛", date: "2025-12-27" },
    { src: "photos/daying.jpg", caption: "一起逛博物馆", date: "2025-12-31" }
    { src: "photos/kuanian.jpg", caption: "2026一起跨年", date: "2026-01-01" }
];

function loadGallery() {
    const gallery = document.getElementById('gallery');
    
    photos.forEach(photo => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}">
            <div class="gallery-caption">
                <h4>${photo.caption}</h4>
                <small>${photo.date}</small>
            </div>
        `;
        gallery.appendChild(item);
    });
}

loadGallery();

// 6. 情书打字效果
const loveLetter = `
亲爱的昱雪：

写下这些字的时候，
我在幻想你看到的时候会是什么表情，
不知是开心、亦或是觉得我矫情。

我知道我要为我们的爱情保鲜，
所以我想到了这个创意，
希望可以带给你惊喜与浪漫。

和你在一起的每一天，
都是我想要永远珍藏的瞬间，
有你在一起的每一分钟，
空气中都充满欢乐，
与你相伴的每一秒钟，
都是我最安心的时刻。

谢谢你出现在我的生命里，
让所有平凡的日子都闪闪发光。

祝宝贝情人节快乐！
祝我们的爱情永远新鲜！
祝我们的小日子越来越甜蜜！


爱你的，
铁蛋儿
${new Date().toLocaleDateString('zh-CN')}
`;

function typeWriter(text, element, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.getElementById('reveal-letter').addEventListener('click', function() {
    const letterElement = document.getElementById('love-letter');
    typeWriter(loveLetter, letterElement);
    this.style.display = 'none';
});

// 7. 背景音乐控制
let isPlaying = false;
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

musicBtn.addEventListener('click', function() {
    if (isPlaying) {
        music.pause();
        this.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        music.play().catch(e => console.log('自动播放被阻止，等待用户交互'));
        this.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// 8. 滚动动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-item, .gallery-item, .love-letter').forEach(el => {
    observer.observe(el);
});

// 9. 控制台彩蛋
console.log('%c❤️ 写给最爱的你 ❤️', 'font-size:20px; color: #ff6b95;');
console.log('%c看到控制台的你，就像发现彩蛋一样可爱', 'font-size:14px; color: #888;');
console.log('%c我们的故事，每一行代码都是爱你的证明', 'font-size:14px; color: #ff6b95;');