// 日语注音
function convertFurigana(text) {
    return text.replace(/\{(.+?)\|(.+?)\}/g, (match, kanji, kana) => {
        return `<ruby>${kanji}<rt>${kana}</rt></ruby>`;
    });
}

// 替换所有的 [ice-icon] 为 <div class="ice-icon"></div>
// document.addEventListener("DOMContentLoaded", function () {
//     // 选择特定的容器，例如一个 class 或 id
//     const container = document.querySelector('.post-content'); // 请根据您的实际情况修改选择器
//     if (container) {
//         container.innerHTML = container.innerHTML.replace(/\[ice-icon\]/g, '<div class="ice-icon"></div>');
//     }
// });
