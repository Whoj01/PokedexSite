import * as S from './styles'

interface LandingHelperTextProps {
  content: string
}

export const LandingHelperText = ({ content }: LandingHelperTextProps) => {
  return (
    <S.LandingHelperText>
      { content }
    </S.LandingHelperText>
  )
}