import { categoryApi } from "@/lib/api/category-api";
import { CategoryDataType } from "@/lib/api-data-types";

export const TheCategory = async () => {
  const data = await categoryApi();

  const categories = data.foodCat;

  return (
    <div>
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
