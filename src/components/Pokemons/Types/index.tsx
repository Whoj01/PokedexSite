import { Theme, ThemeType } from '../../../helpers/theme'
import * as S from './styles'

interface TypesPokemonProps {
  pokemon: {
    value: string,
    type: string,
  },
  selected: string,
  setSelected: (type: string) => void
}
export function TypesPokemon({ pokemon, selected, setSelected }: TypesPokemonProps) {
  const typePokemon = Theme.Pokemons[pokemon.type as keyof ThemeType]

  const isSelected = pokemon.type === selected

  return (
    <S.TypesPokemon $selected={isSelected} value={pokemon.value} $buttonColor={typePokemon.text} onClick={() => setSelected(pokemon.type)}>
     <S.iconType src={typePokemon.Icon} $selected={isSelected}/>
      <S.typeText>
        { pokemon.type }
      </S.typeText>
    </S.TypesPokemon>
  )
}