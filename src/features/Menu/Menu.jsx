import React from "react";
import { getMenu } from "../../services/restaurantapi";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { StyledMenu } from "../styles/Layouts";

const Menu = () => {
  const { data: pizzas } = useLoaderData();

  return (
    <StyledMenu>
      {pizzas?.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </StyledMenu>
  );
};

export const menuLoader = async function () {
  const menu = await getMenu();
  return menu;
};

export default Menu;
