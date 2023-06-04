


 async function clicou(){
   const nick = document.querySelector('.input-name').value
    const dados  = await fetch (`https://www.habbo.com.br/api/public/users?name=${nick}`).then(resposta => resposta.json())
    

    document.querySelector('.player-image').src = `https://www.habbo.com.br/habbo-imaging/avatarimage?hb=image&user=${nick}`

    document.querySelector('.player-mission').innerHTML = dados.motto

} 