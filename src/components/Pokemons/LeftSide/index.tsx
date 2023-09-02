import { useState } from "react"
import PokemonsTypes from "../../../helpers/types"
import { TypesPokemon } from "../Types"
import * as S from './styles'

export function LeftContainer() {
  const [selected, setSelected] = useState<string>("all")

  const handleSelected = async (type: string) => {
    setSelected(type)
  }

  return (
    <S.leftContainer>
      { PokemonsTypes.map(type => <TypesPokemon  pokemon={type} key={type.value} selected={selected} setSelected={handleSelected}/>) }
    </S.leftContainer>
  )

}