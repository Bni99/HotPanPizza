import React from "react";
import { getMenu } from "../../services/restaurantapi";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { Container } from "./style";

const Menu = () => {
  const { data: pizzas } = useLoaderData();

  return (
    <Container>
      {pizzas?.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </Container>
  );
};

export const menuLoader = async function () {
  const menu = await getMenu();
  return menu;
};

export default Menu;
