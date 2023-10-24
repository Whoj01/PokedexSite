import { styled } from 'styled-components'
import { devices } from '../../helpers/breakpoints'

export const Container = styled.div`
  position: relative;

  max-width: 100vw;
  height: 75.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4rem;

  background: url("./bg-red.svg") no-repeat center / cover;

  text-align: center;

  @media ${devices.tablet} {
    padding: 0 4rem;
  }
`