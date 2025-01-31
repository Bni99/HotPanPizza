import styled from "styled-components";

export const StandardList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  gap: 1rem;
  font-size: 1.3rem;
`;

export const HeaderList = styled(StandardList)`
  justify-content: flex-end;
  color: #b7b5b3;
`;
