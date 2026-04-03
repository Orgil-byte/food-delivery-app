import { backEndUrl } from "@/hooks/env-url";

export const foodOrderApi = async () => {
  const foodOrderData = await fetch(`${backEndUrl}/foodOrder`);
  const theFoodOrder = await foodOrderData.json();

  return theFoodOrder;
};
