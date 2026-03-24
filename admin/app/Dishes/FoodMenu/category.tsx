"use client";

import { CategoriesType, FoodCateg } from "@/lib/app-api-data-types";
import { Plus } from "lucide-react";
import { useState } from "react";

type DishesCategoryProps = {
  selectCategory: (categoryId: number) => void;
  categories: FoodCateg[];
  buttonBorderColor: string;
};

export const DishesCategory = ({
  categories,
  selectCategory,
  buttonBorderColor,
}: DishesCategoryProps) => {
  return (
    <div className="w-full p-6 bg-white rounded-xl flex flex-col gap-4">
      <h1 className="font-semibold text-[20px]">Dishes category</h1>
      <div className="flex flex-wrap gap-3">
        {categories.map((category: FoodCateg) => {
          return (
            <div
              onClick={() => selectCategory(category.id)}
              className={`cursor-pointer font-medium text-[14px] flex items-center gap-3 rounded-full py-2 px-4 tracking-wider ${buttonBorderColor}`}
              key={category.id}
            >
              {category.categoryName}
              <p className="rounded-full py-0.5 px-2.5 bg-[#18181b] text-white">
                {category.foods.length}
              </p>
            </div>
          );
        })}
        <button className="w-9 h-9 rounded-full bg-red-500 flex justify-center items-center cursor-pointer">
          <Plus strokeWidth={2} className="text-white h-4 w-4 opacity-100" />
        </button>
      </div>
    </div>
  );
};
