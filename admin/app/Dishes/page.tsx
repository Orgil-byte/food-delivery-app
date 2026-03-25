"use client";

import { FoodCateg } from "@/lib/app-api-data-types";
import { dishesCategoryApi } from "@/lib/api/dishes-category";
import { useState, useEffect } from "react";
import { DishesCategory } from "./_components/category";
import { FoodLists } from "./_components/foodLists";

const Dishes = () => {
  const [categories, setCategories] = useState<FoodCateg[]>([]);
  const [categoriesName, setCategoriesName] = useState<FoodCateg[]>([]);
  const [isActive, setIsActive] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dishesCategoryApi();
      const categoryArray = data.foodCat.sort(
        (a: { id: number }, b: { id: number }) => a.id - b.id,
      );

      setCategories(categoryArray);
      setCategoriesName(categoryArray.slice(1));
    };

    fetchData();
  }, []);

  const selectCategory = (categoryId: number) => {
    const selectedCategory = categories.filter(
      (category) => category.id === categoryId,
    );

    if (categoryId === 1) {
      setCategoriesName(categories.slice(1));
    } else {
      setCategoriesName(selectedCategory);
    }

    setIsActive(categoryId);
  };

  return (
    <div className="w-full min-h-fit h-screen bg-neutral-100 pl-6 pt-6 pr-10 flex flex-col gap-6">
      <DishesCategory
        categories={categories}
        selectCategory={selectCategory}
        isActive={isActive}
      />
      <FoodLists categories={categoriesName} />
    </div>
  );
};

export default Dishes;
