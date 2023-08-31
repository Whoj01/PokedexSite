import { HTMLProps } from 'react'
import * as S from './styles'

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode
} 

export function LandingContainer({ children, ...rest }: ContainerProps) {
  return (
    <S.LandingContainer {...rest}>
      { children }
    </S.LandingContainer>
  )
}