import React from "react";
import {
  BoldSpans,
  MainpageHeading,
  MainpageParaHeading,
  MainpageSubHeading,
} from "../styles/Headings";
import { FaHotjar } from "react-icons/fa6";
import { MainpageHR, MainpageSection } from "../styles/Layouts";
import { getMenu } from "../../services/restaurantapi";
import BestSellers from "./BestSellers";

const Home = () => {
  return (
    <div>
      <MainpageHeading>
        Hot Pan Pizza <FaHotjar size={45} style={{ position: "absolute" }} />
      </MainpageHeading>
      <MainpageSubHeading>
        Serving delicious pizza's since <BoldSpans>1986</BoldSpans>
      </MainpageSubHeading>
      <MainpageHR />
      <MainpageSection>
        <MainpageParaHeading>Our Best Sellers</MainpageParaHeading>
        <BestSellers />
      </MainpageSection>
    </div>
  );
};

export const loader = async function () {
  const menu = await getMenu();
  return menu;
};

export default Home;
