import * as S from './styles'

interface LandingTitleProps {
  content: string
}

export function LandingTitle({ content }: LandingTitleProps) {
  return ( 
    <S.LandingTitle>
      { content }
    </S.LandingTitle>
  )
}