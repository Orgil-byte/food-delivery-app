import { backEndUrl } from "@/hooks/env-url";

export const foodApi = async () => {
  const foodData = await fetch(`${backEndUrl}/foods`);
  const theFood = await foodData.json();

  return theFood;
};
