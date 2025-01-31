import styled from "styled-components";

export const StandardOrangeText = styled.span`
  color: #ff674d;
  font-size: ${({ small }) => (small ? "1.3rem" : "1.5rem")};
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  padding: 0.5rem;
`;

export const StandardSubheading = styled.h4`
  color: rgba(18, 20, 32, 0.5);
  font-weight: thin;
  font-size: ${({ large }) => (large ? "1.4rem" : "1rem")};
  padding: 0.2rem;
`;

export const StandardHeading = styled.h2`
  color: #121420;
  font-weight: bold;
  padding: 0.4rem;
`;

export const MainpageHeading = styled.h1`
  color: #ff674d;
  font-size: 6rem;
  padding: 1rem 2rem;
  text-align: center;
  position: relative;
`;

export const MainpageSubHeading = styled.h2`
  color: rgba(18, 20, 32, 0.5);
  font-size: 1.6rem;
  padding: 0 2rem;
  font-weight: 300;
  text-align: center;
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
