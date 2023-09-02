import { usePokemonsStore } from '../../../../store/pokemons'
import * as S from './styles'

export function PokeCount() {
  const { state: { countPokemons } } = usePokemonsStore()

  return (
    <S.PokeCount>
      <S.PokeLogo src='./icon-poke-red.svg'/>
      <S.PokeCountText>
        {countPokemons} Pokemons
      </S.PokeCountText>
    </S.PokeCount>
  )
}