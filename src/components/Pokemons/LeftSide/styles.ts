import { styled } from "styled-components";
import { devices } from "../../../helpers/breakpoints";

export const leftContainer = styled.div`
  max-width: 23.9rem;
  width: 100%;
  height: 100%;

  border-right: 1px solid #EFF3F6;

  gap: 2.5rem;
  padding-top: 7rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    max-width: 100vw;

    border: 0;

    gap: 2rem;
  }
`