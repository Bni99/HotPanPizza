import styled from "styled-components";
import { StandardFlex } from "../../features/styles/Layouts";

export const Container = styled(StandardFlex)`
  padding: 0 12rem;
  border-bottom: 1px solid rgba(18, 20, 32, 0.1);
  div {
    flex: 1;
    justify-content: start;
    gap: 3rem;
    border: 1px solid black;
  }
`;
