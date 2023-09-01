import * as S from './styles'

export function PokeCount() {
  return (
    <S.PokeCount>
      <S.PokeLogo src='./icon-poke-red.svg'/>
      <S.PokeCountText>
        1272 Pokemons
      </S.PokeCountText>
    </S.PokeCount>
  )
}