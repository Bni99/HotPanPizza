import React from "react";
import { useLoaderData } from "react-router-dom";
import { BestSellersLayout } from "../styles/Layouts";
import BestSellersMenuItem from "./BestSellersMenuItem";

const BestSellers = () => {
  const { data: menuItems } = useLoaderData();
  console.log(menuItems);
  const bestSellers = menuItems?.filter((_, i) => i % 3 === 0);
  console.log(bestSellers);
  return (
    <BestSellersLayout>
      {bestSellers?.map((bestseller) => (
        <BestSellersMenuItem bestseller={bestseller} />
      ))}
    </BestSellersLayout>
  );
};

export default BestSellers;
