const btnBurger = document.querySelector('#btn-burger')
const btnEnviar = document.querySelector('#btn-entrar')
const navUl = document.querySelector('ul')
const tela = window.innerWidth

btnBurger.addEventListener('click', () => {

    btnEnviar.classList.toggle('abrir-nav')
    navUl.classList.toggle('abrir-nav')

})

setInterval(() => {
    if (tela > 700) {
        navUl.classList.add('arruma')
    }
    console.log('verifiquei')
}, 10)
