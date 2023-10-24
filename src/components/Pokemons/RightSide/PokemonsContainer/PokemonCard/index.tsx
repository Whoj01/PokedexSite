import { useEffect, useState } from 'react'
import * as S from './styles'
import { Theme, ThemeType } from '../../../../../helpers/theme'

interface pokemon {
  sprites: {
    front_default: string
    other: {
      dream_world: {
        front_default: string
      }
    }
  }
  name: string,
  id: string,
  types: Array<{
    type: {
      name: string
    }
  }>
}

interface PokemonCardProps {
  name: string,
  url: string,
}

export function PokemonCard({ name, url }: PokemonCardProps) {
  const [pokemon, setPokemon] = useState<pokemon>()
  const pokemonTheme = Theme.Pokemons[pokemon!.types[0].type.name as keyof ThemeType]
  const pokemonSprite = pokemon?.sprites.other.dream_world.front_default ?? pokemon?.sprites.front_default

  useEffect(() => {
    getPokemonData()
  }, [])

  const getPokemonData = async () => {
    await fetch(url)
    .then(res => res.json())
    .then(data => {
      setPokemon(data)
    })
  }
 
  return (
    <S.PokemonContent>
        {/*@ts-ignore */}
        <S.PokemonImageContainer $backgroundColor={pokemonTheme.backgroundColor}>
          <S.PokemonImage src={pokemonSprite}/>
        </S.PokemonImageContainer>

        <S.PokemonInfoContainer>
          <S.PokemonCode>
            #{pokemon?.id.toString().padStart(4, "0")}
          </S.PokemonCode>

          <S.PokemonTypeInfo>
            <S.PokemonName>
              { name }
            </S.PokemonName>

            <S.PokemonIconType src={pokemonTheme?.Icon}/>
          </S.PokemonTypeInfo>
        </S.PokemonInfoContainer>
    </S.PokemonContent>
  )
}