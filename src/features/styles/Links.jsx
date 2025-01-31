import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeaderLogoNavlink = styled(NavLink)`
  text-decoration: none;
  padding: 1rem 1.5rem;
  color: #ff674d;
`;

export const HeaderNavlink = styled(NavLink)`
  text-decoration: none;
  color: #636363;
  padding: 0 1.5rem;
  &.active {
    color: #121420;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.8rem;
  }
`;
