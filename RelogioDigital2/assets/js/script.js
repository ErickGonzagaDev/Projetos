
const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')
const corpo = document.querySelector('body')
const clock = document.querySelector('.relogio')



setInterval(function time() {
    const dataAtual = new Date();
    let hr = dataAtual.getHours()
    let min = dataAtual.getMinutes()
    let sec = dataAtual.getSeconds()


    if(hr <10){
        hr = '0' + hr

        corpo.style.background = 'white'
        corpo.style.color = 'black'
        clock.style.border = '1px solid black'
    }

    if(min < 10){
        min = '0' + min
    }

    if(sec < 10){
        sec = '0' + sec
    }

    horas.innerHTML = hr
    minutos.innerHTML = min
    segundos.innerHTML = sec
})
