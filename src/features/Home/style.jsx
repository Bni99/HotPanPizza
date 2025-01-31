import styled from "styled-components";
import { colors } from "../../utils";

export const Container = styled.div`
  border: 1px solid black;
  padding: 2rem 0;

  h1 {
    color: ${colors.orange};
    font-size: 6rem;
    padding: 1rem 2rem;
    text-align: center;
    position: relative;
  }

  h4 {
    color: ${colors.grey};
    font-size: 1.6rem;
    padding: 0 2rem;
    font-weight: 300;
    text-align: center;
  }

  hr {
    background: #e3e3e2;
    margin: 4rem 0 3rem 0;
    height: 1px;
    border: 0;
  }
`;
