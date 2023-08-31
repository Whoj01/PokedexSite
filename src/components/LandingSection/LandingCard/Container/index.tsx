import { LandingCardIcon } from '../Icon'
import { LandingCardText } from '../Text'
import * as S from './styles'

export const LandingCard = () => {
  return (
    <S.LandingCard>
      <LandingCardIcon/>
      <LandingCardText/>
    </S.LandingCard>
  )
}