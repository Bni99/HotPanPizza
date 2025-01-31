import React from "react";
import { BoldSpans, MainpageParaHeading } from "../styles/Headings";
import { FaHotjar } from "react-icons/fa6";
import { MainpageSection } from "../styles/Layouts";
import { getMenu } from "../../services/restaurantapi";
import BestSellers from "./BestSellers";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <h1>
        Hot Pan Pizza <FaHotjar size={45} style={{ position: "absolute" }} />
      </h1>
      <h4>
        Serving delicious pizza's since <BoldSpans>1986</BoldSpans>
      </h4>
      <hr />
      <MainpageSection>
        <MainpageParaHeading>Our Best Sellers</MainpageParaHeading>
        <BestSellers />
      </MainpageSection>
    </Container>
  );
};

export const loader = async function () {
  const menu = await getMenu();
  return menu;
};

export default Home;
