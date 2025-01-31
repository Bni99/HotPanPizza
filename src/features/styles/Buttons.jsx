import styled from "styled-components";
import { colors } from "../../utils";

export const StandardBlueButton = styled.button`
  background: ${colors.blue};
  color: #fff8f0;
  width: fit-content;
  padding: 0.6rem 1rem;
  margin: 0.8rem 0.4rem;
  font-size: 1rem;
  display: flex;
  gap: 2px;
  align-items: center;
  border: none;
  cursor: pointer;
`;
