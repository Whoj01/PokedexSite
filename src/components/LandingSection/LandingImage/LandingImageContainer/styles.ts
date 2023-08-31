import { styled, keyframes } from 'styled-components'

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
  margin-top: 10rem;
  
  animation: ${bounce} 2.5s infinite ease-in forwards;
`