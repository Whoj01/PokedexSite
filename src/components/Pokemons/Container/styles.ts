import { styled } from "styled-components";
import { devices } from "../../../helpers/breakpoints";

export const ContainerPoke = styled.div`
  max-width: 100vw;
  width: 100%;
  min-height: 123.7rem;
  display: flex;
  justify-content: center;
  gap: 7.5rem;
  background-color: #FFFFFF;
`

export const ContentPoke = styled.div`
  max-width: 148.7rem;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: start;
  justify-content: start;

  gap: 7.5rem;

  @media ${devices.tablet} {
    flex-wrap: wrap;
    padding: 0 2rem;
  }

  @media ${devices.monitor} {
    padding: 0 5rem;
  }
`