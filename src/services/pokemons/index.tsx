import { usePokemonsStore } from "../../store/pokemons"

export interface returnProps {
  [key: string]: string
}

export function usePokemons() {
  const { state: { url }, actions: { addNewPokemons, changeNextUrl } } = usePokemonsStore()

  const newPokemons = async () => {
    const response = await fetch(url).then(res => res.json())

    addNewPokemons(response.results)
    changeNextUrl(response.next)
  }

  return {
    newPokemons,
  }

}
  