import { Router } from "express";
import { getFoods } from "../controllers/foods/get-foods";
import { getFoodById } from "../controllers/foods/get-food-by-id";
import { addFood } from "../controllers/foods/add-food";
import { updateFood } from "../controllers/foods/update-foods";
import { deleteFood } from "../controllers/foods/delete-food";
import { authenticate } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";

const router = Router();

router.get("/", getFoods);
router.get("/:id", getFoodById);
router.post("/", authenticate, authorize("ADMIN"), addFood);
router.put("/:id", authenticate, authorize("ADMIN"), updateFood);
router.delete("/:id", authenticate, authorize("ADMIN"), deleteFood);

export default router;
