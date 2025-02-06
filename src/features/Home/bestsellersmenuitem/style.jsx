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
    width: 8rem;
    height: 100%;
    cursor: pointer;
  }

  .image-container {
    width: 8rem;
    border-radius: 2rem;
    position: relative;
    margin: 0 0.3rem;
  }

  .overlay {
    width: 8rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: 0.5s ease;
    background-color: ${colors.grey};
    border-radius: 2rem;
  }

  .image-container:hover .overlay {
    opacity: 1;
  }

  .price {
    position: absolute;
    color: black;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${StandardBlueButton} {
    position: absolute;
    bottom: 0.3rem;
    right: 1rem;
  }

  .data-container {
    padding: 0 0.3rem;
  }
`;
