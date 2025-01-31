import React from "react";
import { ColumnFlex } from "../styles/Layouts";
import { StandardHeading } from "../styles/Headings";
import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/restaurantapi";

const CreateOrder = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const cart = [
    {
      pizzaId: 100,
      name: "Veg-loaded",
      quantity: 2,
      unitPrice: 10,
      totalPrice: 20,
    },
  ];
  return (
    <ColumnFlex>
      <StandardHeading>Ready to Order ? Lets go !</StandardHeading>
      <Form method="POST">
        <div>
          <label htmlFor="userName">Name</label>
          <input type="text" name="userName" id="userName" />
        </div>
        <div>
          <label htmlFor="userPhoneNumber"> Phone Number</label>
          <input type="tel" name="userPhoneNumber" id="userPhoneNumber" />
        </div>
        <div>
          <label htmlFor="userAddress">Address</label>
          <input type="tel" name="userAddress" id="userAddress" />
        </div>
        <div>
          <input type="checkbox" name="priority" id="priority" />
          <label htmlFor="priority">
            Would you like to mark this order as priority ?
          </label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <button disabled={isSubmitting}>
          {isSubmitting ? "Placing your order.." : "Order now"}
        </button>
      </Form>
    </ColumnFlex>
  );
};

export const action = async function ({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    customer: data.userName,
    phone: data.userPhoneNumber,
    address: data.userAddress,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const newOrder = await createOrder(order);
  console.log(newOrder);
  return redirect(`/order/${newOrder.data.id}`);
};

export default CreateOrder;
