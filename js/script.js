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
let hour = document.querySelector('.hour'),
    min = document.querySelector('.min'),
    sec = document.querySelector('.sec');

let H = 2, //hour
    M = 0, //min
    S = 0; //sec

if (localStorage.getItem) {
    H = localStorage.getItem('hour', H)
    M = localStorage.getItem('min', M)
    S = localStorage.getItem('sec', S)

    let interval = setInterval(() => {
        timer()
    }, 1000);

    function timer() {
        if (H == 0 && M == 0 && S == 0) {
            clearInterval(interval())
            H = 3; M = 0; S = 0;
        }
        // S
        if (S < 0) {
            S = 60
            M--
        } else {
            if (S <= 9) {
                sec.textContent = `0${S}`
            } else {
                sec.textContent = S
            }
        }

        // M
        if (M < 0) {
            M = 60
            H--
        } else {
            if (M <= 9) {
                min.textContent = `0${M}`
            } else {
                min.textContent = M
            }
        }

        // H
        if (H <= 9) {
            hour.textContent = `0${H}`
        } else {
            hour.textContent = H
        }

        localStorage.setItem('hour', H)
        localStorage.setItem('min', M)
        localStorage.setItem('sec', S)

        S--
    }
}