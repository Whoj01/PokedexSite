import { LogoHeader } from '../LogoHeader'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <LogoHeader src='./logo.svg' style={{ width: 'auto' }}/>
      <LogoHeader src='./pin-pokedex.png'/>
    </S.Header>
  )
}