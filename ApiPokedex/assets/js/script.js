const pokemonName = document.querySelector('.pokemon-name')
const pokemonNumber = document.querySelector('.pokemon-number')
const pokemonImage = document.querySelector('.pokemon-image')
const form = document.querySelector('.form')
const input = document.querySelector('.input-search')
const btnPrev =document.querySelector('.btn-prev')
const btnNext =document.querySelector('.btn-next')
let pokemonId = 0


const fetchPokemon = async (pokemon) => {
    try {
        pokemonName.textContent = 'Loading...'
        const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        const APIresponseJson = await APIresponse.json()
        return APIresponseJson

    } catch (error) {
        pokemonImage.src = ''
        pokemonNumber.textContent = ''
        pokemonName.textContent = 'Not Found :('
        input.value = ''
        console.log(error)
    }
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    pokemonName.textContent = data.name
    pokemonNumber.textContent = `${data.id} -`
    pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`

    pokemonId = data.id
    input.value = ''

} 

form.addEventListener('submit', (event) => {
    event.preventDefault()
    renderPokemon(input.value.toLowerCase())
})

btnNext.addEventListener('click',()=>{ 
    pokemonId++
    if(pokemonId < 1010){
        renderPokemon(pokemonId)
    }
})

btnPrev.addEventListener('click',()=>{ 

    pokemonId--
    if(pokemonId > 0){
        renderPokemon(pokemonId)
    }
    
})


