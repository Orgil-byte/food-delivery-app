"use client";

import { FoodCateg, Foods } from "@/lib/app-api-data-types";
import { CategoriesType } from "@/lib/app-api-data-types";
import { Plus } from "lucide-react";

export const FoodLists = ({ categories }: CategoriesType) => {
  return (
    <div className="flex flex-col gap-6 pb-6">
      {categories.map((category: FoodCateg) => {
        return (
          <div
            key={category.id}
            className="w-full p-6 bg-white rounded-xl flex flex-col gap-4 flex-wrap"
          >
            <h1 className="font-semibold text-[20px]">{`${category.categoryName} (${category.foods.length})`}</h1>
            <div className="flex gap-4">
              <div className="w-[270.75px] h-60.25 border border-dashed border-red-500 rounded-[20px] flex flex-col justify-center items-center gap-6 cursor-pointer">
                <button className="w-9 h-9 rounded-full bg-red-500 flex justify-center items-center">
                  <Plus
                    strokeWidth={2}
                    className="text-white h-4 w-4 opacity-100 cursor-pointer"
                  />
                </button>
                <p className="text-center font-medium text-[14px]">
                  Add new Dish to <br></br> {category.categoryName}
                </p>
              </div>
              {category.foods.map((food: Foods) => {
                return (
                  <div
                    key={food.id}
                    className="w-[270.75px] h-60.25 rounded-[20px] border border-[#E4E4E7] p-4 flex flex-col gap-5"
                  >
                    <img
                      className="w-[238.75px] h-32.25 rounded-xl bg-gray-300 object-cover"
                      src={`${food.image}`}
                      alt="Food Image"
                    />
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <p className="text-red-500 text-[14px] font-medium">
                          {food.foodName}
                        </p>
                        <p className="text-xs">${food.price}</p>
                      </div>
                      <p className="text-xs">{food.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
