"use client";

import { FoodCateg, Foods } from "@/lib/app-api-data-types";
import { CategoriesType } from "@/lib/app-api-data-types";
import { UpdateDishes } from "./updateDishes";
import { AddDishes } from "./addDishes";
import { Edit2, Trash2 } from "lucide-react";
import { DeleteCateg } from "./deleteCateg";
import { UpdateCateg } from "./updateCateg";

export const FoodLists = ({ foodCat }: CategoriesType) => {
  return (
    <div className="flex flex-col gap-6 pb-6">
      {foodCat.map((category) => {
        return (
          <div
            key={category.id}
            className="w-full p-6 bg-white rounded-xl flex justify-between"
          >
            <div className="flex flex-col gap-4 ">
              <h1 className="font-semibold text-[20px]">{`${category.categoryName} (${category.foods.length})`}</h1>
              <div className="flex gap-4 flex-wrap">
                <AddDishes category={category} />
                {category.foods.map((food: Foods) => {
                  return (
                    <div
                      key={food.id}
                      className="w-[270.75px] h-60.25 rounded-[20px] border border-[#E4E4E7] p-4 flex flex-col gap-5 relative"
                    >
                      <img
                        className="w-[238.75px] h-32.25 rounded-xl bg-gray-300 object-cover"
                        src={`${food.image}`}
                        alt="Food Image"
                      />
                      <UpdateDishes
                        category={category}
                        food={food}
                        categories={foodCat}
                      />
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <p className="text-red-500 text-[14px] font-medium">
                            {food.foodName}
                          </p>
                          <p className="text-xs">${food.price}</p>
                        </div>
                        <p className="text-xs">{food.ingredients}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex w-fit h-fit items-center gap-2">
              <DeleteCateg category={category} />
              <UpdateCateg category={category} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
