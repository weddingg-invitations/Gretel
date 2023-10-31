// mobile btn 
const topNav = document.querySelector('.top-nav')

document.getElementById('mobileBtn').addEventListener('click', () => {
    topNav.classList.toggle('top-nav--active')
})

window.addEventListener('scroll', () => {
    topNav.classList.remove('top-nav--active')
})

// popup closed
const popup_loader = document.querySelector('.popup_loader')

setTimeout(() => {
    popup_loader.style.cssText = 'opacity: 0; transition:700ms'
}, 800)
setTimeout(() => {
    popup_loader.style.cssText = 'display: none;'
}, 1300)

// -------------------------------------------------------------------------
// timer 
const dom = {
    hour: document.querySelector('.hour'),
    min: document.querySelector('.min'),
    sec: document.querySelector('.sec')
}

let thime = {
    H: 2, //hour
    M: 0, //min
    S: 0 //sec
}
let GetThime = JSON.parse(localStorage.getItem('GetThime'))
if (GetThime) {
    thime.H = GetThime.H
    thime.M = GetThime.M
    thime.S = GetThime.S
    thimer()
} else
    thimer()


function thimer() {
    let interval = setInterval(() => {
        if (thime.H == 0 && thime.M == 0 && thime.S == 0) {
            clearInterval(interval)
            thime.H = 0; thime.M = 0; thime.S = 0;
        }
        // thime.S
        if (thime.S < 0) {
            thime.S = 60
            thime.M--
        } else {
            if (thime.S <= 9) {
                dom.sec.textContent = `0${thime.S}`
            } else {
                dom.sec.textContent = thime.S
            }
        }

        // thime.M
        if (thime.M < 0) {
            thime.M = 60
            thime.H--
        } else {
            if (thime.M <= 9) {
                dom.min.textContent = `0${thime.M}`
            } else {
                dom.min.textContent = thime.M
            }
        }

        // thime.H
        if (thime.H <= 9) {
            dom.hour.textContent = `0${thime.H}`
        } else {
            dom.hour.textContent = thime.H
        }

        localStorage.setItem('GetThime', JSON.stringify({ "H": thime.H, "M": thime.M, "S": thime.S }))
        thime.S--
    }, 1000)
}
// -------------------------------------------------------------------------
