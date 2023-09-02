import { Theme, ThemeType } from '../../../helpers/theme'
import * as S from './styles'
import { usePokemons } from "../../../services/pokemons"

interface TypesPokemonProps {
  pokemon: {
    value: string,
    type: string,
  },
  selected: string,
  setSelected: (type: string) => void
}
export function TypesPokemon({ pokemon, selected, setSelected}: TypesPokemonProps) {
  const { getPokemonsOfType } = usePokemons()
  const typePokemon = Theme.Pokemons[pokemon.type as keyof ThemeType]

  const isSelected = pokemon.type === selected

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(pokemon.type)
    await getPokemonsOfType(e.currentTarget.id)
  }

  return (
    <S.TypesPokemon $selected={isSelected} id={pokemon.value} $buttonColor={typePokemon.text!} onClick={handleClick}>
     <S.iconType src={typePokemon.Icon} $selected={isSelected}/>
      <S.typeText>
        { pokemon.type }
      </S.typeText>
    </S.TypesPokemon>
  )
}