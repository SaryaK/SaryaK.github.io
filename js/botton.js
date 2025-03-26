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