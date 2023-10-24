import { Theme } from "./theme"

interface PokemonsTypes {
  type: string
  value: string
}

const PokemonsTypes: Array<PokemonsTypes> = []

const types  = Object.keys(Theme.Pokemons)

types.map(type => {
  const pokemonType = {
    type,
    value: Theme.Pokemons[type].type!
  }

  PokemonsTypes.push(pokemonType)
})


export default PokemonsTypes