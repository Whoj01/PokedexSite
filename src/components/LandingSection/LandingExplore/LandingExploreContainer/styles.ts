import { styled } from 'styled-components'
import { devices } from '../../../../helpers/breakpoints'

export const LandingExploreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  transform: rotate(-90deg);
  position: absolute;

  left: 0;

  @media ${devices.phoneSm} {
    display: none;
    visibility: hidden;
  }
`