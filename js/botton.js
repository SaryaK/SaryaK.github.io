// 日语注音
function convertFurigana(text) {
    return text.replace(/\{(.+?)\|(.+?)\}/g, (match, kanji, kana) => {
        return `<ruby>${kanji}<rt>${kana}</rt></ruby>`;
    });
}


// 禁用右键
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('mouseup', function() {
    window.getSelection().removeAllRanges(); // 清除所有选区
});

// =========================================
document.addEventListener('DOMContentLoaded', function() {
  const magicContainer = document.createElement('div');
  magicContainer.className = 'magic-container';
  document.body.appendChild(magicContainer);
  
  // 魔法颜色数组
  const magicColors = [
    '#FF9500', // 橙色
    '#FF2D55', // 粉红色
    '#5856D6', // 紫色
    '#44DB5E', // 绿色
    '#007AFF', // 蓝色
    '#FF3B30', // 红色
    '#5AC8FA', // 浅蓝色
    '#34C759', // 明亮绿色
    '#AF52DE', // 紫罗兰色
    '#FF6F61', // 珊瑚色
    '#00D4FF', // 青色
    '#8E44AD', // 深紫色
    '#3498DB', // 亮蓝色
    '#E74C3C', // 鲜红色
    '#2ECC71', // 翠绿色
    '#F39C12', // 金黄色
    '#16A085', // 绿松石色
    '#9B59B6', // 淡紫色
    '#E67E22', // 胡萝卜色
    '#27AE60'  // 翠绿色
  ];
  
  
  document.addEventListener('click', function(e) {
    createMagicEffect(e.clientX, e.clientY);
  });
  
  function createMagicEffect(x, y) {
    const color = magicColors[Math.floor(Math.random() * magicColors.length)];
    
    // 创建魔法核心
    const core = document.createElement('div');
    core.className = 'magic-core';
    core.style.left = x + 'px';
    core.style.top = y + 'px';
    core.style.setProperty('--magic-color', color);
    magicContainer.appendChild(core);
    
    // 创建魔法粒子
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'magic-particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      
      // 随机大小
      const size = 3 + Math.random() * 5;
      particle.style.setProperty('--size', `${size}px`);
      
      // 随机方向和距离
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 80;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      particle.style.setProperty('--magic-color', color);
      
      magicContainer.appendChild(particle);
      setTimeout(() => particle.remove(), 1000);
    }
    
    // 创建星星
    for (let i = 0; i < 12; i++) {
      setTimeout(() => {
        const star = document.createElement('div');
        star.className = 'magic-star';
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        
        const size = 8 + Math.random() * 10;
        star.style.setProperty('--size', `${size}px`);
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 60;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const rotate = Math.random() * 360;
        
        star.style.setProperty('--tx', `${tx}px`);
        star.style.setProperty('--ty', `${ty}px`);
        star.style.setProperty('--rotate', `${rotate}deg`);
        
        magicContainer.appendChild(star);
        setTimeout(() => star.remove(), 1200);
      }, i * 50);
    }
    
    setTimeout(() => core.remove(), 800);
  }
});
