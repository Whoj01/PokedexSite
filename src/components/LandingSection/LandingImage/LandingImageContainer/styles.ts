import { styled, keyframes } from 'styled-components'
import { devices } from '../../../../helpers/breakpoints'

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0);
  }
`

export const LandingImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 79.8rem;
  width: 100%;
  height: 100%;
  
  animation: ${bounce} 2.5s infinite ease-in forwards;

  @media ${devices.phoneSm} {
    
  }
`

export const LandingPokeBallImage = styled.img`
  height: 100%;
  max-width: 50rem;
  width: 100%;
`