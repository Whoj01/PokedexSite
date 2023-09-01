import { styled } from "styled-components";

export const TypesPokemon = styled.button<{$buttonColor: string, $selected: boolean}>`
  display: flex;
  align-items: center;
  justify-content: start;
  min-width: 10rem;
  min-height: 100%;
  gap: 2rem;
  cursor: pointer;
  background: transparent;
  border: none;
  transition: all .4s;
  color: ${props => props.$selected ? props.$buttonColor : '#A0A29F'};
  opacity: ${props => props.$selected ? 1 : .6};

  &:hover {
    opacity: 1;
    color: ${props => props.$buttonColor}
  }
`

export const iconType = styled.img<{$selected: boolean}> `
  width: 1.8rem;
  height: 1.8rem;
  filter: ${props => props.$selected ? "grayscale(0)" : "grayscale(100%)"};
  transition: all 0.3s;

  ${TypesPokemon}:hover & {
    filter: grayscale(0);
  }
`

export const typeText = styled.span`
  font-weight: bold;
  font-size: 1.8rem;
  font-family: Nunito;
`

