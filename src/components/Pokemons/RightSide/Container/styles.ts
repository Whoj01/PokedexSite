import { styled } from "styled-components";

export const RightSideContainer = styled.div`
  max-width: 109rem;
  min-height: 123.7rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 8rem;
  padding-top: 7rem;
  padding-bottom: 7rem;
` 

export const AddMoreButtons = styled.div`
  background: rgba(63, 93, 179, 0.1);
  padding: 1rem 1.5rem;
  color: #2C6AC1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 7rem;
  font-size: 1.8rem;
  font-weight: 700;
  transition: all .3s;
  cursor: pointer;

  &:hover {
    background: #2C6AC1;
    color: #ffffff;
  }
`