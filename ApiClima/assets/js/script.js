const key = '0d456b92b1bbfaf3509d2c655e701a79'


function colocarDadosNaTela(dados) {

    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name

    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "ºC"

    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description

    document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"

    document.querySelector('.img-previsao').scr = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    //usamos async quando a gnt acessa um servidor externo 
    //await siginifica esperar
    //then é para quando receber a resposta do servidor
    //json é o formato de troca de dados entre servidores

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector('.input-cidade').value
    buscarCidade(cidade)
}