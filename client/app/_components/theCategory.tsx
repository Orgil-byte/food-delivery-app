import { categoryApi } from "@/lib/api/category-api";
import { CategoryDataType } from "@/lib/api-data-types";

export const TheCategory = async () => {
  const data = await categoryApi();

  const categories = data.foodCat;

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {categories.map((category: CategoryDataType) => {
        return (
          <div key={category.id}>
            <h1>{category.categoryName}</h1>
          </div>
        );
      })}
    </div>
  );
};
