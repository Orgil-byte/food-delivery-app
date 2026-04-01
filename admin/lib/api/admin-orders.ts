import { cookies } from "next/headers";
import { RootOrder } from "../app-api-data-types";

export const foodOrderApi = async (): Promise<RootOrder> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const orderData = await fetch("http://localhost:3001/foodOrder", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const theOrder = await orderData.json();

  return theOrder;
};
