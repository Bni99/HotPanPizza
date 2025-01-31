import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { OutletContainer } from "./style";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <OutletContainer>
        {isLoading && <p>Loading...</p>}
        <Outlet />
      </OutletContainer>
      <Footer />
    </>
  );
};

export default AppLayout;
