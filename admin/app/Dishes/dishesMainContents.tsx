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
  const [categoriesName, setCategoriesName] = useState<FoodCateg[]>(
    initialCategories.slice(1),
  );
  const [isActive, setIsActive] = useState(1);

  const selectCategory = (categoryId: number) => {
    const selectedCategory = initialCategories.filter(
      (category) => category.id === categoryId,
    );

    if (categoryId === 1) {
      setCategoriesName(initialCategories.slice(1));
    } else {
      setCategoriesName(selectedCategory);
    }

    setIsActive(categoryId);
  };

  return (
    <>
      <DishesCategory
        categories={initialCategories}
        selectCategory={selectCategory}
        isActive={isActive}
      />
      <FoodLists foodCat={categoriesName} />
    </>
  );
};
