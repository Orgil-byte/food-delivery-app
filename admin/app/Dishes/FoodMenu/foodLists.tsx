"use client";

import { FoodCateg } from "@/lib/app-api-data-types";
import { CategoriesType } from "@/lib/app-api-data-types";
import { Plus } from "lucide-react";

export const FoodLists = ({ categories }: CategoriesType) => {
  return (
    <div className="flex flex-col gap-6 pb-6">
      {categories.map((category: FoodCateg) => {
        return (
          <div
            key={category.id}
            className="w-full p-6 bg-white rounded-xl flex flex-col gap-4"
          >
            <h1 className="font-semibold text-[20px]">{`${category.categoryName} (${category.foods.length})`}</h1>
            <div className="w-[270.75px] h-60.25 border border-dashed border-red-500 rounded-[20px] flex flex-col justify-center items-center gap-6 cursor-pointer">
              <button className="w-9 h-9 rounded-full bg-red-500 flex justify-center items-center">
                <Plus
                  strokeWidth={2}
                  className="text-white h-4 w-4 opacity-100"
                />
              </button>
              <p className="text-center font-medium text-[14px]">
                Add new Dish to <br></br> {category.categoryName}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
