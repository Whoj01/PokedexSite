import { useEffect, useState } from 'react'
import { PokemonCard } from '../PokemonCard'
import * as S from './styles'

interface pokemons {
  results: Array<{
    name: string,
    url: string,
  }>,
  count: number,
}

export function PokemonsContainer() {
  const [pokemons, setPokemons] = useState<pokemons>()

  useEffect(() => {
    getPokemons()
  }, [])

  async function getPokemons() {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(data => {
        setPokemons(data)
      })
  }
  
  return (
    <S.PokemonsCardContainer>
      {pokemons?.results.map(pokemon => <PokemonCard name={pokemon.name} url={pokemon.url} key={pokemon.name}/>)}
    </S.PokemonsCardContainer>
  ) 
}