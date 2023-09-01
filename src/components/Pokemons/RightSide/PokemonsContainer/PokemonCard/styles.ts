import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`
  0% {
    bottom: -30px;
    opacity: 0;
  }

  50% {
    bottom: -15px;
    opacity: 1;
  }

  100% {
    bottom: 0;
  }
`

export const PokemonContent = styled.div`
  position: relative;
  height: 30.4rem;
  max-width: 28.6rem;
  flex: 1 1 28.6rem;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 10px 51px -5px rgba(183, 189, 193, 0.3);
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  transition: all .2s;
  animation: ${fadeIn} .2s forwards ease-in;
  padding: 1.4rem 2.8rem;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 12px 40px -5px rgba(90, 96, 100, 0.3);
  }
`

export const PokemonImageContainer = styled.div<{$backgroundColor: string}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  margin: 0 auto;

  &::after {
    content: "";
    width: 16.5rem;
    height: 16.5rem;
    border-radius: 50%;
    position: absolute;
    background: ${props => props.$backgroundColor};
    z-index: -1;
  }
`

export const PokemonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: .6rem;
  width: 100%;
`

export const PokemonImage = styled.img`
  max-width: 55%;
  max-height: 20rem;
`

export const PokemonTypeInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const PokemonCode = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 1.8rem;
  color: #7A7D80;
`

export const PokemonName = styled.p`
  font-weight: 600;
  font-size: 2.4rem;
  color: #2F3133;
`
export const PokemonIconType = styled.img`
  height: 1.6rem;
  width: 1.6rem;
`
