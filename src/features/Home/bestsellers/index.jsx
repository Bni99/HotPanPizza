import React from "react";
import { useLoaderData } from "react-router-dom";
import BestSellersMenuItem from "../bestsellersmenuitem";
import { Container } from "./style";

const BestSellers = () => {
  const { data: menuItems } = useLoaderData();
  const bestSellers = menuItems?.filter((_, i) => i % 3 === 0);
  return (
    <Container>
      {bestSellers?.map((bestseller) => (
        <BestSellersMenuItem bestseller={bestseller} />
      ))}
    </Container>
  );
};

export default BestSellers;
