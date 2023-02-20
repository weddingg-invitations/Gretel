// // logo animation 
// let b = document.querySelectorAll('.logo > b')
// setInterval(() => {
//     setTimeout(() => {
//         b[0].classList.add('anim-add')
//     }, 0);
//     setTimeout(() => {
//         b[1].classList.add('anim-add')
//     }, 100);
//     setTimeout(() => {
//         b[2].classList.add('anim-add')
//     }, 200);
//     setTimeout(() => {
//         b[3].classList.add('anim-add')
//     }, 300);
//     setTimeout(() => {
//         b[4].classList.add('anim-add')
//     }, 400);
//     setTimeout(() => {
//         b[5].classList.add('anim-add')
//     }, 500);

//     setTimeout(() => {
//         b.forEach(sp => {
//             sp.classList.remove('anim-add')
//         })
//     }, 3000);
// }, 3000);

// popup closed
const popup_loader = document.querySelector('.popup_loader')
const cssload_preloader = document.querySelector('.cssload-preloader')

setTimeout(() => {
    cssload_preloader.style.cssText = 'display: flex;'
}, 1000)
setTimeout(() => {
    popup_loader.style.cssText = 'opacity: 0;'
}, 4000)
setTimeout(() => {
    popup_loader.style.cssText = 'display: none;'
}, 5000)