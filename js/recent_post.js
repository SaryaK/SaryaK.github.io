// document.addEventListener('DOMContentLoaded', function() {
//     const backgrounds = [
//         "https://pic1.imgdb.cn/item/67dabb8f88c538a9b5c110fa.png",
//         "https://pic1.imgdb.cn/item/67dabb8f88c538a9b5c110f9.png",
//         "https://pic1.imgdb.cn/item/67dabb8f88c538a9b5c110f8.png",
//         "https://pic1.imgdb.cn/item/67dabb8f88c538a9b5c110f7.png",
//         "https://pic1.imgdb.cn/item/67dabb8e88c538a9b5c110f6.png",
//         "https://pic1.imgdb.cn/item/67dabb8e88c538a9b5c110f5.png",
//         "https://pic1.imgdb.cn/item/67dabb8e88c538a9b5c110f4.png",
//         "https://pic1.imgdb.cn/item/67dabb8e88c538a9b5c110f3.png",
//         "https://pic1.imgdb.cn/item/67dabb8e88c538a9b5c110f2.png",
//         "https://pic1.imgdb.cn/item/67dabb8e88c538a9b5c110f1.png",
//         "https://pic1.imgdb.cn/item/67dabb8e88c538a9b5c110f0.png",
//         "https://pic1.imgdb.cn/item/67dabb8d88c538a9b5c110ef.png",
//         "https://pic1.imgdb.cn/item/67dabb8d88c538a9b5c110ee.png",
//         "https://pic1.imgdb.cn/item/67dabb8d88c538a9b5c110ed.png",
//         "https://pic1.imgdb.cn/item/67dabb8d88c538a9b5c110eb.png",
//         "https://pic1.imgdb.cn/item/67dabb8d88c538a9b5c110ea.png",
//         "https://pic1.imgdb.cn/item/67dabb8d88c538a9b5c110e9.png",
//         "https://pic1.imgdb.cn/item/67dabb8d88c538a9b5c110e8.png",
//         "https://pic1.imgdb.cn/item/67dabb8d88c538a9b5c110e7.png",
//         "https://pic1.imgdb.cn/item/67dabb8d88c538a9b5c110e6.png",
//         "https://pic1.imgdb.cn/item/67dabb8c88c538a9b5c110e5.png",
//         "https://pic1.imgdb.cn/item/67dabb8c88c538a9b5c110e4.png",
//         "https://pic1.imgdb.cn/item/67dabb8c88c538a9b5c110e3.png",
//         "https://pic1.imgdb.cn/item/67dabb8c88c538a9b5c110e2.png",
//         "https://pic1.imgdb.cn/item/67dabb8c88c538a9b5c110e1.png",
//         "https://pic1.imgdb.cn/item/67dabb8b88c538a9b5c110e0.png",
//         "https://pic1.imgdb.cn/item/67dabb8b88c538a9b5c110df.png",
//         "https://pic1.imgdb.cn/item/67dabb8b88c538a9b5c110de.png",
//         "https://pic1.imgdb.cn/item/67dabb8a88c538a9b5c110d9.png",
//         "https://pic1.imgdb.cn/item/67dabb8988c538a9b5c110d6.png",
//         "https://pic1.imgdb.cn/item/67dabb8988c538a9b5c110d5.png",
//         "https://pic1.imgdb.cn/item/67dabb8988c538a9b5c110d4.png",
//         "https://pic1.imgdb.cn/item/67dabb8988c538a9b5c110d3.png",
//         "https://pic1.imgdb.cn/item/67dabb8988c538a9b5c110d2.png",
//         "https://pic1.imgdb.cn/item/67dabb8988c538a9b5c110d1.png",
//         "https://pic1.imgdb.cn/item/67dabb8988c538a9b5c110d0.png",
//         "https://pic1.imgdb.cn/item/67dabb8988c538a9b5c110cf.png",
//         "https://pic1.imgdb.cn/item/67dabb8988c538a9b5c110ce.png",
//         "https://pic1.imgdb.cn/item/67dabb8988c538a9b5c110cd.png",
//         "https://pic1.imgdb.cn/item/67dabb8888c538a9b5c110cc.png",
//         "https://pic1.imgdb.cn/item/67dabb8888c538a9b5c110cb.png",
//         "https://pic1.imgdb.cn/item/67dabb8888c538a9b5c110ca.png",
//         "https://pic1.imgdb.cn/item/67dabb8888c538a9b5c110c9.png",
//         "https://pic1.imgdb.cn/item/67dabb8888c538a9b5c110c8.png",
//         "https://pic1.imgdb.cn/item/67dabb8888c538a9b5c110c7.png",
//         "https://pic1.imgdb.cn/item/67dabb8888c538a9b5c110c6.png",
//         "https://pic1.imgdb.cn/item/67dabb8788c538a9b5c110c5.png",
//         "https://pic1.imgdb.cn/item/67dabb8788c538a9b5c110c4.png",
//         "https://pic1.imgdb.cn/item/67dabb8788c538a9b5c110c3.png",
//         "https://pic1.imgdb.cn/item/67dabb8788c538a9b5c110c2.png",
//     ];

//     const postItems = document.querySelectorAll('.recent-post-item');
//     const usedIndices = new Set(); // 跟踪已使用的图片索引

//     // 使用IntersectionObserver延迟加载
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const item = entry.target;
//                 let randomIndex;
//                 do {
//                     randomIndex = Math.floor(Math.random() * backgrounds.length);
//                 } while (usedIndices.has(randomIndex) && usedIndices.size < backgrounds.length);

//                 usedIndices.add(randomIndex);
//                 item.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
//                 observer.unobserve(item); // 加载后停止观察
//             }
//         });
//     });

//     postItems.forEach(item => observer.observe(item));
// });