import { getFoods } from "../controllers/foods/get-foods";
import { getFoodById } from "../controllers/foods/get-food-by-id";
import { postFood } from "../controllers/foods/post-food";
import { putFood } from "../controllers/foods/put-foods";
import { deleteFood } from "../controllers/foods/delete-food";
import { App } from "../types";

export const registerFoodsRoutes = (app: App) => {
  app.get("/foods", getFoods);
  app.get("/foods/:id", getFoodById);
  app.post("/foods", postFood);
  app.put("/foods/:id", putFood);
  app.delete("/foods/:id", deleteFood);
};
