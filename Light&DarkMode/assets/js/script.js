const alterar = document.querySelector('#alterar')
const body = document.querySelector('body')

alterar.addEventListener('click', function () {
    
    this.classList.toggle('bi-moon-fill')

    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white'
        body.style.color = 'black'
        body.style.animation = '2s'

    } else {

        body.style.background = 'black'
        body.style.color = 'white'
        body.style.transition = '2s'
    }

}) 