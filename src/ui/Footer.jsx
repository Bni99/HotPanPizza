import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #121420;
  height: 3rem;
  color: #fff8f0;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return <StyledFooter>Hot pan pizza incorporated in @1986</StyledFooter>;
};

export default Footer;
