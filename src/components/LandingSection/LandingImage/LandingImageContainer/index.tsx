import { LandingPokeImage } from '../LandingPokeImage'
import * as S from './styles'

export function LandingImageContainer() {
  return (
    <S.LandingImageContainer>
      <LandingPokeImage src='./luzes.svg' alt="Imagem de 3 luzes de estrelas"/>

      <S.LandingPokeBallImage src="./img-pokeball.png" alt="Imagem de uma pokebola vermelha" />
    </S.LandingImageContainer>
  )
}