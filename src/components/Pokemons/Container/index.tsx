import { LeftContainer } from '../LeftSide'
import { RightSideContainer } from '../RightSide/Container'
import * as S from './styles'

export function ContainerPokemons() {
  return (
    <S.ContainerPoke>
      <S.ContentPoke>
        <LeftContainer/>

        <RightSideContainer/>
      </S.ContentPoke>
    </S.ContainerPoke>
  )
}