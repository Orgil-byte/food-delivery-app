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

export interface FoodArray {
  foods: Foods[];
}

export interface Foods {
  id: number;
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
  category: FoodCateg;
}

export interface Order {
  id: number;
  totalPrice: number;
  status: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  foodOrderItems: FoodOrderItem[];
}

export interface FoodOrderItem {
  id: number;
  quantity: number;
  foodId: number;
  foodOrderId: number;
  food: Foods;
}
