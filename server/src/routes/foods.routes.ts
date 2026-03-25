import { Router } from "express";
import { getFoods } from "../controllers/foods/get-foods";
import { getFoodById } from "../controllers/foods/get-food-by-id";
import { addFood } from "../controllers/foods/add-food";
import { updateFood } from "../controllers/foods/update-foods";
import { deleteFood } from "../controllers/foods/delete-food";
import { authenticate } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";

const router = Router();

// authenticate, authorize("ADMIN"), add these after you finish login

router.get("/", getFoods);
router.get("/:id", getFoodById);
router.post("/", addFood);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

export default router;
