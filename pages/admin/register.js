const register_popup = document.getElementById('register_popup')
const login_btn = document.getElementById('login_btn')

if (sessionStorage.getItem('login') === '@#$%#%@#^$YURHGFBSDGDHTRJ%$^UYTHGFseg513s3g51se3rg1s3d5gh1ser3h513es51ghs3er5h1') {
    animation()
}

login_btn.addEventListener('click', () => {
    let user_name = document.getElementById('user_name').value
    let password = document.getElementById('password').value

    if (user_name === 'Despina' && password === '0') {
        sessionStorage.setItem('login', '@#$%#%@#^$YURHGFBSDGDHTRJ%$^UYTHGFseg513s3g51se3rg1s3d5gh1ser3h513es51ghs3er5h1')
    }

    animation()
})

function animation() {
    register_popup.style.cssText = 'opacity: 0;'

    setTimeout(() => {
        register_popup.style.cssText = 'display:none; z-index-1'
    }, 1000);
}