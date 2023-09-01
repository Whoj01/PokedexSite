import { PokeCount } from '../PokeCount'
import { PokemonsContainer } from '../PokemonsContainer/Container'
import * as S from './styles'

export function RightSideContainer() {
  return (
    <S.RightSideContainer>
      <PokeCount/>

      <PokemonsContainer/>

      <S.AddMoreButtons>
        Ver mais pokemons
      </S.AddMoreButtons>
    </S.RightSideContainer>
  )
}