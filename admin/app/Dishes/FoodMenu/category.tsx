"use client";

import { dishesCategoryApi } from "@/lib/api/dishes-category";
import { CategoryDataType } from "@/lib/app-api-data-types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export const DishesCategory = () => {
  const [categories, setCategories] = useState<CategoryDataType[]>([]);
  const [isActive, setIsActive] = useState<number | null>(null);

  const buttonBorderColor = (buttonId: number) => {
    return isActive === buttonId
      ? "border border-red-500"
      : "border border-neutral-200";
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await dishesCategoryApi();
      const categories = data.foodCat;

      setCategories(categories);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full p-6 bg-white rounded-xl flex flex-col gap-4">
      <h1 className="font-semibold text-[20px]">Dishes category</h1>
      <div className="flex flex-wrap gap-3">
        {categories.map((category: CategoryDataType) => {
          return (
            <div
              onClick={() => setIsActive(category.id)}
              className={`cursor-pointer font-medium text-[14px] flex items-center gap-2 rounded-full py-2 px-4 ${buttonBorderColor(category.id)}`}
              key={category.id}
            >
              {category.categoryName}
              <p className="rounded-full py-0.5 px-2.5 bg-[#18181b] text-white">
                {category.foods.length}
              </p>
            </div>
          );
        })}
        <button className="w-9 h-9 rounded-full bg-red-500 flex justify-center items-center">
          <Plus strokeWidth={2} className="text-white h-4 w-4 opacity-100" />
        </button>
      </div>
    </div>
  );
};
