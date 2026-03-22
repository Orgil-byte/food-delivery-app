import { categoryApi } from "@/lib/api/category-api";

const Category = async () => {
  const data = await categoryApi();

  console.log(data);
};

export default Category;
