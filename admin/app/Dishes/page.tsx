"use client";

import { FoodCateg } from "@/lib/app-api-data-types";
import { dishesCategoryApi } from "@/lib/api/dishes-category";
import { useState, useEffect } from "react";
import { DishesCategory } from "./FoodMenu/category";
import { FoodLists } from "./FoodMenu/foodLists";

const Dishes = () => {
  const [categories, setCategories] = useState<FoodCateg[]>([]);
  const [categoriesName, setCategoriesName] = useState<FoodCateg[]>([]);
  const [isActive, setIsActive] = useState(1);
  const [buttonBorderColor, setButtonBorderColor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await dishesCategoryApi();
      const categoryArray = data.foodCat.sort(
        (a: { id: number }, b: { id: number }) => a.id - b.id,
      );

      setCategories(categoryArray);
      setCategoriesName(categoryArray);
    };

    fetchData();
  }, []);

  const selectCategory = (categoryId: number) => {
    const selectedCategory = categories.filter(
      (category) => category.id === categoryId,
    );

    setCategoriesName(selectedCategory);

    setIsActive(categoryId);

    const buttonBorderColor =
      isActive === categoryId
        ? "border border-red-500"
        : "border border-neutral-200";
    setButtonBorderColor(buttonBorderColor);
  };

  return (
    <div className="w-full h-fit bg-neutral-100 pl-6 pt-6 pr-10 flex flex-col gap-6">
      <DishesCategory
        categories={categories}
        selectCategory={selectCategory}
        buttonBorderColor={buttonBorderColor}
      />
      <FoodLists categories={categoriesName} />
    </div>
  );
};

export default Dishes;
