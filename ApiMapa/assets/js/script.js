 document.addEventListener("DOMContentLoaded", ()=>{
    if(!('geolocation' in navigator)){
alert('Navegador não tem suporte para esta API')
    }else{
        navigator.geolocation.getCurrentPosition(showPosition)
    }
 })

 const showPosition = (local)=>{
    let latitude = local.coords.latitude
    let longitude = local.coords.longitude

    /*
    Adiciona as informaçoes de latitude e longitude no Id location
    */

    document.getElementById('location').innerHTML = '<span>Latitude: </span>' + latitude + ' <span>Longitude: </span>' + longitude

    //Criando as opçoes do mapa
    let mapOption = {
        center:[latitude,longitude],
        zoom: 16
    }

    //Criando o objeto mapa
    let map = new L.map('map',mapOption)

    //Criando a camada do mapa
    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')

    //Adiciona a camada ao mapa
    map.addLayer(layer)

    //Adiciona o marcador
    let marker = new L.Marker([latitude,longitude]) 
    marker.addTo(map).bindPopup('Você está aqui!').openPopup()
 }