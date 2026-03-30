export interface CategoriesType {
  foodCat: FoodCateg[];
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

export interface RootOrder {
  orders: Order[];
}

export interface Order {
  id: number;
  totalPrice: number;
  status: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  user: User;
  foodOrderItems: FoodOrderItem[];
}

export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  phoneNumber: number;
  address: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface FoodOrderItem {
  id: number;
  quantity: number;
  foodId: number;
  foodOrderId: number;
  food: Foods;
}
