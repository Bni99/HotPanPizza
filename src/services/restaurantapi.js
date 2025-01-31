const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export const getMenu = async function () {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) {
    throw new Error("Failed to fetch the api");
  }
  const data = await res.json();
  return data;
};

export const getOrder = async function (id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw new Error(`could not find the order with ${id}`);
  const data = await res.json();
  return data;
};

export const createOrder = async function (newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!res.ok) throw new Error();
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed while creating the order");
  }
};
