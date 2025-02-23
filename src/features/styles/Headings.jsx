import styled from "styled-components";

export const StandardOrangeText = styled.span`
  color: #ff674d;
  font-size: ${({ small }) => (small ? "1.3rem" : "1.5rem")};
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  padding: 0.5rem;
`;

export const StandardSubheading = styled.h4`
  color: #1214207f;
  font-weight: thin;
  font-size: ${({ large }) => (large ? "1.4rem" : "1rem")};
  padding: 0.2rem;
`;

export const StandardHeading = styled.h2`
  color: #121420;
  font-weight: bold;
  padding: 0.4rem;
`;

export const MainpageParaHeading = styled.h3`
  font-weight: 800;
  color: #121420;
  font-size: 1.7rem;
  padding: 1.4rem 2rem 0rem;
  margin: 1rem 2.4rem;
`;

export const BoldSpans = styled.span`
  color: #121420;
  font-weight: 500;
`;
