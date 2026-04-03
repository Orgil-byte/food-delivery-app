import { backEndUrl } from "@/hooks/env-url";

export const categoryApi = async () => {
  const categoryData = await fetch(`${backEndUrl}/foodCateg`);
  const theCategory = await categoryData.json();

  return theCategory;
};
