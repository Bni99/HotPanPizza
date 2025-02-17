import React from "react";
import { BoldSpans } from "../styles/Headings";
import { FaHotjar } from "react-icons/fa6";
import { getMenu } from "../../services/restaurantapi";
import BestSellers from "./bestsellers";
import { Container } from "./style";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <Container>
      <h1 className="mainpage-heading">
        Hot Pan Pizza <FaHotjar size={45} style={{ position: "absolute" }} />
      </h1>
      <h4 className="mainpage-subheading">
        Serving delicious pizza's since <BoldSpans>1986</BoldSpans>
      </h4>
      <hr />
      <section className="mainpage-section">
        <div className="best-seller-heading-container">
          <h5>Our Best Sellers</h5>
          <span>
            <Link to="/menu">View Menu</Link>
            <FaArrowRightLong size={12} />
          </span>
        </div>
        <BestSellers />
      </section>
    </Container>
  );
};

export const loader = async function () {
  const menu = await getMenu();
  return menu;
};

export default Home;
