export interface CategoriesType {
  categories: FoodCateg[];
}

export interface FoodCateg {
  id: number;
  categoryName: string;
  createdAt: string;
  updatedAt: string;
  foods: any[];
}
