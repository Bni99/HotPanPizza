import styled from "styled-components";
import { colors } from "../../utils";

export const Container = styled.div`
  background-color: ${colors.black};
  display: flex;
  border: 1px solid black;
  padding: 4rem 2rem;
  color: ${colors.white};
  .footer-main-container {
    width: 100%;
    display: flex;
  }

  .footer-heading-container {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      gap: 0.4rem;
      padding: 0.4rem 0.8rem;
    }

    h1 {
      align-self: center;
    }

    p {
      font-size: 0.8rem;
      padding: 0 4rem;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  ul {
    list-style-type: none;
    padding: 0 4rem;
  }

  li {
    padding: 0.8rem;
  }

  li:first-child {
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem 0.8rem;
  }

  .social-links li {
    display: inline-block;
  }

  .social-links-heading {
    display: block;
    width: 100%;
  }
`;
