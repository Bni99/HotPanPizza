import styled from "styled-components";
import { colors } from "../../utils";

export const Container = styled.div`
  border: 1px solid black;

  .mainpage-heading {
    color: ${colors.orange};
    font-size: 6rem;
    padding: 1rem 2rem;
    text-align: center;
    position: relative;
  }

  .mainpage-paraheading {
    color: ${colors.black};
    font-size: 1.3rem;
    padding: 2rem 4rem 0;
    font-weight: 500;
  }

  .mainpage-subheading {
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

  .mainpage-section {
    background: ${colors.lightOrange};
    border: 1px solid black;
    padding: 1rem 2rem;
  }
`;
