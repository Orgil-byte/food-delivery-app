import { categoryApi } from "@/lib/api/category-api";
import { CategoryDataType } from "@/lib/api-data-types";
import { FoodLists } from "./theFoodLists";

export const TheCategory = async () => {
  const data = await categoryApi();
  const categories: CategoryDataType[] = data.foodCat.sort(
    (a: { categoryName: string }, b: { categoryName: string }) =>
      a.categoryName.localeCompare(b.categoryName),
  );

  return (
    <div className="p-22 bg-neutral-700 w-full">
      {categories.slice(1).map((category) => {
        return (
          <div className="flex flex-col gap-13.5" key={category.id}>
            {category.foods.length < 1 ? (
              ""
            ) : (
              <h1 className="font-semibold text-[32px] text-white">
                {category.categoryName}
                <FoodLists categoryFoods={category.foods} />
              </h1>
            )}
          </div>
        );
      })}
    </div>
  );
};
