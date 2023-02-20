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