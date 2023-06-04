 const botao = document.querySelector('#lerMais')
 const card = document.querySelector('.card')

 botao.addEventListener('click',()=>{
card.classList.toggle('active')
if(card.classList.contains('active')){
    return botao.textContent  = 'Voltar'
}
return botao.textContent  = 'Ler mais'
 })