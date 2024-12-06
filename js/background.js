const desktopImages = [
    "https://s3.bmp.ovh/imgs/2024/10/02/0e2f385ecd1289ba.webp",
    "https://s3.bmp.ovh/imgs/2024/10/05/639f60c598e008df.webp",
    "https://s3.bmp.ovh/imgs/2024/10/05/e4d5e33db940a38c.webp",
    "https://s3.bmp.ovh/imgs/2024/10/05/8fe5f6125d9387f3.webp",
    "https://s3.bmp.ovh/imgs/2024/11/02/9b00f761bd6d4d1c.webp",

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
