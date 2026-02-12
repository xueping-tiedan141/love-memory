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
    const anniversaryDate = new Date('2023-07-15'); // 修改成你们的纪念日
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
    "遇见你是我人生中最美的bug，而我永远不想修复。",
    "你的笑容是我的404错误——找不到，就崩溃。",
    "我是你的CPU，只为你处理所有情绪。",
    "爱你这件事，时间复杂度是O(1)，永远瞬间完成。",
    "我们的爱没有break条件，是无限循环。",
    "你是我生命中的exception，让我不再按部就班。",
    "if (love) { love.you(forever); }",
    "while(true) { love.you++; }"
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

loadTimeline();

// 5. 照片墙
const photos = [
    { src: "photos/1.jpg", caption: "第一次旅行", date: "2023-08" },
    { src: "photos/2.jpg", caption: "你生日那天", date: "2023-09" },
    { src: "photos/3.jpg", caption: "秋天的约会", date: "2023-10" }
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
亲爱的[她的名字]：

写下这些字的时候，窗外的云刚好经过。
像极了第一次见你时，我的心跳。

和你在一起的每一天，
都是我想要永远珍藏的瞬间。

谢谢你出现在我的生命里，
让所有平凡的日子都闪闪发光。

爱你的，
[你的名字]
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