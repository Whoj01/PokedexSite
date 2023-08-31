import { ImgHTMLAttributes } from 'react'
import * as S from './styles'

type LogoHeader = ImgHTMLAttributes<HTMLImageElement> 

export const LogoHeader = ({ src, ...rest } : LogoHeader) => {
  return <S.LogoHeader src={src} {...rest}/>
}