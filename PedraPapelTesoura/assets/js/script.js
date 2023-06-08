const playerOptionsList = document.querySelectorAll('.player .option')
const enemyOptionsList = document.querySelectorAll('.enemy .option')

playerOptionsList.forEach((option) => {

    option.onclick = () => {

        clearOptions(playerOptionsList)
        option.style.opacity = '1'
        option.setAttribute('data-selected', true)

        const movePlayer = option.getAttribute('data-value')
        const moveEnemy = iaEnemy()
        result(movePlayer, moveEnemy)
    }
})

const iaEnemy = () => {
    const optionRandom = Math.floor(Math.random() * enemyOptionsList.length)
    //Math.random() Sorteia um numero aleatorio
    //Math.floor() Arredonda o numero

    const optionSelected = enemyOptionsList[optionRandom]


    clearOptions(enemyOptionsList)
    optionSelected.style.opacity = '1'
    optionSelected.setAttribute('data-selected', true)

    return optionSelected.getAttribute('data-value')

}

const clearOptions = (optionsList) => {
    optionsList.forEach((option) => {
        option.setAttribute('data-selected', false)
        option.style.opacity = '0.5'
    })
}

const result = (movePlayer, moveEnemy) => {
    const resultElement = document.querySelector('span')
    if (movePlayer === moveEnemy) {
        resultElement.textContent = 'Você Empatou 😢'
    }
    else if (movePlayer === 'stone' && moveEnemy === 'scissor') {
        resultElement.textContent = 'Você Venceu 😁'
    }
    else if (movePlayer === 'paper' && moveEnemy === 'stone') {
        resultElement.textContent = 'Você Venceu 😁'
    }
    else if (movePlayer === 'scissor' && moveEnemy === 'paper') {
        resultElement.textContent = 'Você Venceu 😁'
    }
    else {
        resultElement.textContent = 'Você Perdeu 😵‍💫'
    }
}
