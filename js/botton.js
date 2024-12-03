function convertFurigana(text) {
    return text.replace(/\{(.+?)\|(.+?)\}/g, (match, kanji, kana) => {
        return `<ruby>${kanji}<rt>${kana}</rt></ruby>`;
    });
}



