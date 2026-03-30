import { dishesCategoryApi } from "@/lib/api/dishes-category";
import { FoodCateg } from "@/lib/app-api-data-types";
import { DishesMainContents } from "./dishesMainContents";

const Dishes = async () => {
  const data = await dishesCategoryApi();
  const categories: FoodCateg[] = data.foodCat.sort(
    (a: { categoryName: string }, b: { categoryName: string }) =>
      a.categoryName.localeCompare(b.categoryName),
  );

  return (
    <div className="w-full min-h-fit h-screen bg-neutral-100 pl-6 pt-6 pr-10 flex flex-col gap-6">
      <DishesMainContents initialCategories={categories} />
    </div>
  );
};

export default Dishes;
