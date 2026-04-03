import { cookies } from "next/headers";
import { RootOrder } from "../app-api-data-types";
import { backEndUrl } from "@/hooks/env-url";

export const foodOrderApi = async (): Promise<RootOrder> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const orderData = await fetch(`${backEndUrl}/foodOrder`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const theOrder = await orderData.json();

  return theOrder;
};
