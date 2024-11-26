const desktopImages = [
    "https://s3.bmp.ovh/imgs/2024/11/26/0ab9588afcfad27c.webp",
    "https://s3.bmp.ovh/imgs/2024/11/26/483675f13e346889.webp",
    "https://s3.bmp.ovh/imgs/2024/11/26/250e663759550700.webp",
    "https://s3.bmp.ovh/imgs/2024/11/26/0c636df0c9ed3e74.webp",
    "https://s3.bmp.ovh/imgs/2024/11/26/a32a6f0c9e06faed.webp",
    "https://s3.bmp.ovh/imgs/2024/11/26/440b07d04359a242.webp",
    "https://s3.bmp.ovh/imgs/2024/11/26/99fc66680bb70a4a.webp",
    "https://s3.bmp.ovh/imgs/2024/11/26/7487dcde03932eb2.webp",

];

const mobileImages = [
    "https://s3.bmp.ovh/imgs/2024/11/26/896e3aa28699aad7.webp",
    "https://s3.bmp.ovh/imgs/2024/11/26/7bc2c20b23acddff.webp",
    "https://s3.bmp.ovh/imgs/2024/11/26/a144e9abacdf4783.webp",
    "https://s3.bmp.ovh/imgs/2024/11/26/19d48aed3335be06.webp"
];

function isMobile() {
    return window.innerWidth <= 768;
}

function getRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

function setRandomBackground() {
    const images = isMobile() ? mobileImages : desktopImages;
    const selectedImage = getRandomImage(images);
    document.getElementById("page-header").style.backgroundImage = `url(${selectedImage})`;
}

setRandomBackground();
