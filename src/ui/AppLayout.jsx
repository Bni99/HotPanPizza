import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
import styled from "styled-components";

const StyledMain = styled.main`
  min-height: 80vh;
  padding: 2rem;
`;

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Header />
      <StyledMain>
        {isLoading && <p>Loading...</p>}
        <Outlet />
      </StyledMain>
      <Footer />
    </div>
  );
};

export default AppLayout;
