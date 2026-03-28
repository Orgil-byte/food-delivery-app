import { Order } from "../app-api-data-types";

export const foodOrderApi = async (): Promise<Order> => {
  const orderData = await fetch("http://localhost:3001/foodOrder", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const theOrder = await orderData.json();

  return theOrder;
};
