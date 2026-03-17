import { Router } from "express";
import { getFoods } from "../controllers/foods/get-foods";
import { getFoodById } from "../controllers/foods/get-food-by-id";
import { addFood } from "../controllers/foods/post-food";
import { updateFood } from "../controllers/foods/put-foods";
import { deleteFood } from "../controllers/foods/delete-food";

const router = Router();

router.get("/", getFoods);
router.get("/:id", getFoodById);
router.post("/", addFood);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;
