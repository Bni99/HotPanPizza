import styled from "styled-components";
import { StandardFlex } from "../../features/styles/Layouts";
import { StandardList } from "../../features/styles/Lists";
import { NavLink } from "react-router-dom";

export const Container = styled(StandardFlex)`
  padding: 0 12rem;
  border-bottom: 1px solid rgba(18, 20, 32, 0.1);
  div {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: start;
    gap: 3rem;
  }
`;

export const LogoContainer = styled.span`
  padding: 1rem 1.5rem;
`;

export const ListContainer = styled(StandardList)`
  justify-content: flex-end;
  color: #b7b5b3;
  font-size: 1.3rem;
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
