import { useEffect } from 'react'
import { PokemonCard } from '../PokemonCard'
import * as S from './styles'
import { usePokemonsStore } from '../../../../../store/pokemons'

export function PokemonsContainer() {
  const { state: { pokemons }, actions: { addNewPokemons, changeCountPokemons, changeNextUrl } } = usePokemonsStore()

  useEffect(() => {
    getPokemons()
  }, [])

  async function getPokemons() {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(data => {
        addNewPokemons(data.results)
        changeCountPokemons(data.count)
        changeNextUrl(data.next)
      })
  }

  return (
    <S.PokemonsCardContainer>
      {pokemons.map(pokemon => <PokemonCard name={pokemon.name} url={pokemon.url} key={pokemon.name}/>)}
    </S.PokemonsCardContainer>
  ) 
}