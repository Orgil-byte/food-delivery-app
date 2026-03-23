"use client";

import { dishesCategoryApi } from "@/lib/api/dishes-category";
import { CategoryDataType } from "@/lib/app-api-data-types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export const FoodLists = () => {
  const [categories, setCategories] = useState<CategoryDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dishesCategoryApi();
      const categories = data.foodCat;

      setCategories(categories);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {categories.slice(1).map((category: CategoryDataType) => {
        return (
          <div
            key={category.id}
            className="w-full p-6 bg-white rounded-xl flex flex-col gap-4"
          >
            <h1 className="font-semibold text-[20px]">{`${category.categoryName} (${category.foods.length})`}</h1>
          </div>
        );
      })}
    </div>
  );
};
