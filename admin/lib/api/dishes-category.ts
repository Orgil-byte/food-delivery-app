import { CategoriesType } from "../app-api-data-types";

export const dishesCategoryApi = async (): Promise<CategoriesType> => {
  const categoryData = await fetch("http://localhost:3001/foodCateg", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(categoryData);

  const theCategory = await categoryData.json();

  return theCategory;
};
