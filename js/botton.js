const images = [
    "https://s3.bmp.ovh/imgs/2024/10/02/6ecf554ad17ec72d.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/a66e6ce4ceeca9fe.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/7ca844730def21f6.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/f07e4de785c2102f.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/d3060d168aec5b85.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/9fe2c08f25e70f91.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/35b3bf171ddff140.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/67a228a0a8e2d4ef.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/06e5cbdf654367d3.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/96cc5493d749cc46.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/5872325b0d9a0c35.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/0e2f385ecd1289ba.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/31a0dc939b247e8d.webp",
    "https://s3.bmp.ovh/imgs/2024/10/02/7a778cd998989b32.webp",


];
// "https://s3.bmp.ovh/imgs/2024/10/02/9f32ac67adf94921.webp",
// "https://s3.bmp.ovh/imgs/2024/10/02/fdb300c75a7fe2fd.webp",
// "https://s3.bmp.ovh/imgs/2024/10/02/0bdebabc619f2ced.webp",
// "https://s3.bmp.ovh/imgs/2024/10/02/a4e293ccd9ca3df6.webp",

function setRandomBackground() {
    // 生成一个随机索引
    const randomIndex = Math.floor(Math.random() * images.length);
    // 获取body元素并设置随机背景图片
    document.getElementById("page-header").style.backgroundImage = `url(${images[randomIndex]})`;
}

// 页面加载时自动设置随机背景图片
window.onload = setRandomBackground;