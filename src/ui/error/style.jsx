import styled from "styled-components";
import { colors } from "../../utils";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: fit-content;
    padding: 1rem;
  }
  h1 {
    font-size: 2.3rem;
    padding: 0.5rem;
  }

  h4 {
    font-size: 1.7rem;
    color: ${colors.grey};
    padding: 0.5rem;
  }
`;
