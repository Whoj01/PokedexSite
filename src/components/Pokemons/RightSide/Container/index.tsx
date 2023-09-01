
import { usePokemons } from '../../../../services/pokemons'
import { PokeCount } from '../PokeCount'
import { PokemonsContainer } from '../PokemonsContainer/Container'
import * as S from './styles'

export function RightSideContainer() {
  const { newPokemons } = usePokemons()


  return (
    <S.RightSideContainer>
      <PokeCount/>

      <PokemonsContainer/>

      <S.AddMoreButtons onClick={newPokemons}>
        Ver mais pokemons
      </S.AddMoreButtons>
    </S.RightSideContainer>
  )
}