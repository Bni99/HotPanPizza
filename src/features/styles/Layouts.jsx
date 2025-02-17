import styled from "styled-components";

export const StandardFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ColumnFlex = styled(StandardFlex)`
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border: ${({ border }) => border && "1px solid black"};
`;

export const MainpageHR = styled.hr`
  color: #b7b5b3;
  margin: 4rem 0 3rem 0;
`;

export const MainpageSection = styled.section`
  background: #fff8f0;
  color: white;
`;

export const StyledMenuItem = styled.section`
  width: 360px;
  padding: 0.8rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  color: FFF8F0;
  box-shadow: 11px 12px 17px 3px rgba(18, 20, 32, 0.2);
`;

export const Container = styled.section`
  padding: 0.8rem 1rem;
`;
