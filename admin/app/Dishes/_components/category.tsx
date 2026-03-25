"use client";

import { FoodCateg } from "@/lib/app-api-data-types";
import { AddCateg } from "./addCateg";

type DishesCategoryProps = {
  selectCategory: (categoryId: number) => void;
  categories: FoodCateg[];
  isActive: number;
};

export const DishesCategory = ({
  categories,
  selectCategory,
  isActive,
}: DishesCategoryProps) => {
  return (
    <div className="w-full p-6 bg-white rounded-xl flex flex-col gap-4">
      <h1 className="font-semibold text-[20px]">Dishes category</h1>
      <div className="flex flex-wrap gap-3">
        {categories.map((category: FoodCateg) => {
          const count =
            category.id === 1
              ? categories
                  .slice(1)
                  .reduce((sum, category) => sum + category.foods.length, 0)
              : category.foods.length;

          const borderColor =
            isActive === category.id
              ? "border border-red-500"
              : "border border-neutral-200";
          return (
            <div
              onClick={() => selectCategory(category.id)}
              className={`cursor-pointer font-medium text-[14px] flex items-center gap-3 rounded-full py-2 px-4 tracking-wider ${borderColor}`}
              key={category.id}
            >
              {category.categoryName}
              <p className="rounded-full py-0.5 px-2.5 bg-[#18181b] text-white">
                {count}
              </p>
            </div>
          );
        })}
        <AddCateg />
      </div>
    </div>
  );
};
