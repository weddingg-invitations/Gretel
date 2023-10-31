function admin_registred_ok() {
    let menuJSON = {}

    fetch('../../../../backend/menu.json')
        .then(res => res.json())
        .then(data => {
            if (localStorage.getItem('menuJSON')) {
                console.log('local__Storage');
                get_in_localStorage()
            } else {
                console.log('menu__JSON' && false);
                get_menu_JSON(data)
            }

            addText()
            removeText()
        })
        .catch(err => console.log(err));

    function get_menu_JSON(data) {
        let GetAllkeys = [Object.keys(data)][0]
        let GetAllValues = [Object.values(data)][0]
        drow__menu(GetAllkeys, GetAllValues)
    }

    function get_in_localStorage() {
        let GetAllkeys = [Object.keys(JSON.parse(localStorage.getItem('menuJSON')))][0]
        let GetAllValues = [Object.values(JSON.parse(localStorage.getItem('menuJSON')))][0]
        drow__menu(GetAllkeys, GetAllValues)
    }

    function drow__menu(GetAllkeys, GetAllValues) {
        document.getElementById('sect_7').innerHTML = ''

        GetAllkeys.forEach((key, keyi) => {
            let ul = document.createElement('ul')
            let add = document.createElement('div')
            add.className = 'add'
            add.textContent = '+'

            GetAllValues[keyi].forEach((Values, Val) => {
                let li = document.createElement('li')
                li.className = 'text_edit'
                li.setAttribute('contenteditable', true)
                li.textContent = Values

                let remove = document.createElement('span')
                remove.className = 'remove'
                remove.textContent = 'X'
                if (!Val <= 0)
                    li.appendChild(remove)
                ul.appendChild(li)
                ul.appendChild(add)
            })

            sect_7.appendChild(ul)
        })
    }

    function addText() {
        document.querySelectorAll('.add').forEach((el, i) => {
            el.addEventListener('click', () => {
                let li = document.createElement('li')
                li.className = 'text_edit'
                li.setAttribute('contenteditable', true)
                li.textContent = 'new text'

                let remove = document.createElement('span')
                remove.className = 'remove'
                remove.textContent = 'X'
                li.appendChild(remove)
                el.parentElement.append(li)

                removeText()
                send_JSON()
            })
        })
    }

    function removeText() {
        document.querySelectorAll('.remove').forEach((el, i) => {
            el.addEventListener('click', () => {
                el.parentElement.remove()
                send_JSON()
            })
        })
    }

    setInterval(() => {
        document.querySelectorAll('.text_edit').forEach(el => {
            if (el.textContent.length <= 1) {
                el.style.cssText = 'border:2px solid white'
            } else {
                el.style.cssText = ''
            }
        })
    }, 800);


    document.getElementById('save_in_localstorage').addEventListener('click', () => { send_JSON(), console.log(menuJSON) })
    function send_JSON() {
        menuJSON = {}
        let get_all_conts = document.querySelectorAll('#sect_7>ul')

        get_all_conts.forEach((conts, i) => {
            menuJSON[`dey${i}`] = []

            get_all_conts[i].querySelectorAll('.text_edit').forEach(items => {
                menuJSON[`dey${i}`].push(items.textContent)
            })
        })

        localStorage.setItem('menuJSON', JSON.stringify(menuJSON))
        menuJSON = menuJSON
    }

    document.getElementById('clean_of_localstorage').addEventListener('click', () => {
        localStorage.removeItem('menuJSON')
        window.location.reload(true)
    })

    document.getElementById('send_to_database').addEventListener('click', () => {
        send_JSON()
        show_ok()

        fetch('../../backend/getSetJson.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(menuJSON)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
            .catch(e => console.log(e))
    })

    function show_ok() {
        // if respons == ok  send massage
        document.querySelector('#popup_massage_cont>.text').innerText = 'տվյալները հաջողությամբ ուղղարկվել են'
        // popap open close
        const popup_massage = document.getElementById('popup_massage')
        popup_massage.classList.add('popup_massage--on')
        setTimeout(() => {
            popup_massage.classList.add('popup_massage--off')
            setTimeout(() => {
                popup_massage.classList.remove('popup_massage--off')
                popup_massage.classList.remove('popup_massage--on')
            }, 500);
        }, 1000);
    }
}

if (sessionStorage.getItem('login') === '@#$%#%@#^$YURHGFBSDGDHTRJ%$^UYTHGFseg513s3g51se3rg1s3d5gh1ser3h513es51ghs3er5h1') {
    admin_registred_ok()
}