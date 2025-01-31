import styled from "styled-components";
import { colors } from "../../../utils";
import { StandardBlueButton } from "../../styles/Buttons";

export const Container = styled.section`
  padding: 0.8rem;
  border-radius: 0.6rem;
  display: flex;
  background: ${colors.white};
  min-width: 30rem;
  max-width: 30rem;
  box-shadow: 11px 12px 17px 3px rgba(18, 20, 32, 0.2);
  position: relative;

  div {
    padding: 0.3rem;
  }

  h1 {
    color: ${colors.black};
    font-weight: bold;
    font-size: 1.3rem;
    padding: 0.5rem 0;
  }

  p {
    color: ${colors.grey};
  }

  img {
    border-radius: 2rem;
    height: 8rem;
    cursor: pointer;
    &:hover {
      filter: grayscale(100%);
    }

    &:hover .price {
      display: block;
    }
  }

  .price {
    position: absolute;
    color: black;
    font-size: 2rem;
    padding: 2.2rem;
    font-weight: bold;
    color: white;
  }

  ${StandardBlueButton} {
    position: absolute;
    bottom: 0.3rem;
    right: 1rem;
  }
`;
