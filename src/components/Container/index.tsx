import * as S from './styles'

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <S.Container>
      { children }
    </S.Container>
  )
}