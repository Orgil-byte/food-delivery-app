import { cookies } from "next/headers";
import { CategoriesType } from "../app-api-data-types";

export const dishesCategoryApi = async (): Promise<CategoriesType> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const categoryData = await fetch("http://localhost:3001/foodCateg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const theCategory = await categoryData.json();

  return theCategory;
};
