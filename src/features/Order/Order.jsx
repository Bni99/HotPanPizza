import React from "react";
import { getOrder } from "../../services/restaurantapi";
import { useLoaderData } from "react-router-dom";
import { ColumnFlex, Container } from "../styles/Layouts";
import { StandardHeading, StandardSubheading } from "../styles/Headings";

const Order = () => {
  const { data } = useLoaderData();
  const {
    customer,
    status,
    priority,
    orderPrice,
    priorityPrice,
    estimatedDelivery,
  } = data;
  return (
    <ColumnFlex>
      <StandardHeading>Hey {customer} !</StandardHeading>
      <StandardSubheading>
        Here are the details of your order :
      </StandardSubheading>
      <Container>Estimated Delivery : ${estimatedDelivery}</Container>
      <Container>Status : {status}</Container>
      <Container>Order Price : {orderPrice}$</Container>
      <Container>Priority Price : {priorityPrice}$</Container>
    </ColumnFlex>
  );
};

export const loader = async function ({ params }) {
  const data = await getOrder(params.orderId);
  return data;
};

export default Order;
