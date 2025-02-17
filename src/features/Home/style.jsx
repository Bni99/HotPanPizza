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

  .best-seller-heading-container {
    border: 1px solid black;
    display: flex;
    align-items: center;
    padding: 1rem 4rem;
    justify-content: space-between;
    h5 {
      color: ${colors.black};
      font-size: 1.3rem;
      font-weight: 600;
    }

    span {
      border: 1px solid black;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }

    a {
      text-decoration: none;
      font-size: 0.8rem;
      color: ${colors.black};
    }
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
    position: relative;
  }
`;
