import { cookies } from "next/headers";
import { CategoriesType } from "../app-api-data-types";
import { backEndUrl } from "@/hooks/env-url";

export const dishesCategoryApi = async (): Promise<CategoriesType> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const categoryData = await fetch(`${backEndUrl}/foodCateg`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const theCategory = await categoryData.json();

  return theCategory;
};
