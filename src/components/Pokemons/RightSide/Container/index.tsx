
import { usePokemons } from '../../../../services/pokemons'
import { usePokemonsStore } from '../../../../store/pokemons'
import { PokeCount } from '../PokeCount'
import { PokemonsContainer } from '../PokemonsContainer/Container'
import * as S from './styles'

export function RightSideContainer() {
  const { state: { url } } = usePokemonsStore()
  const { newPokemons } = usePokemons()


  return (
    <S.RightSideContainer>
      <PokeCount/>

      <PokemonsContainer/>

      {url.length > 1 && (
        <S.AddMoreButtons onClick={newPokemons}>
         Ver mais pokemons
       </S.AddMoreButtons>
      )}
     
    </S.RightSideContainer>
  )
}