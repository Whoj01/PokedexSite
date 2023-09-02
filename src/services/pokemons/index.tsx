import { usePokemonsStore } from "../../store/pokemons"

export interface returnProps {
  [key: string]: string
}

export function usePokemons() {
  const { state: { url }, actions: { addNewPokemons, changeNextUrl, addPokemonsOfType, changeCountPokemons } } = usePokemonsStore()

  const newPokemons = async () => {
    const response = await fetch(url).then(res => res.json())

    addNewPokemons(response.results)
    changeNextUrl(response.next)
  }

  const getPokemonsOfType = async (type: string) => {
    // caso seja selecionado algum type em especifico

    console.log(type)
    if(type === '') {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json())
      console.log("aqui")
      addPokemonsOfType(response.results)
      changeCountPokemons(response.count)
      changeNextUrl(response.next)
      return
    }
    // caso seja selecionado todos



    const response = await fetch("https://pokeapi.co/api/v2/type/" + type).then(res => res.json())

    addPokemonsOfType(response.pokemon)
    changeCountPokemons(response.pokemon.length)
    changeNextUrl("")  
  }

  return {
    newPokemons,
    getPokemonsOfType
  }
}
  