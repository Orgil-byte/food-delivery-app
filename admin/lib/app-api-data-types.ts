export type CategoryDataType = {
  id: number;
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
  foods: [];
};

export type FoodsDataType = {
  id: number;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  foodCategoryId: number;
  desc: string;
};
