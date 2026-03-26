"use client";

import { FoodCateg } from "@/lib/app-api-data-types";
import { useState } from "react";
import { DishesCategory } from "./_components/category";
import { FoodLists } from "./_components/foodLists";

export const DishesMainContents = ({
  initialCategories,
}: {
  initialCategories: FoodCateg[];
}) => {
  const [isActive, setIsActive] = useState(1);

  const selectCategory = (categoryId: number) => {
    setIsActive(categoryId);
  };

  const categoriesName =
    isActive === 1
      ? initialCategories.slice(1)
      : initialCategories.filter((c) => c.id === isActive);

  return (
    <>
      <DishesCategory
        categories={initialCategories}
        selectCategory={selectCategory}
        isActive={isActive}
      />
      <FoodLists categories={categoriesName} />
    </>
  );
};
