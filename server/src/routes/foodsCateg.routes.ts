import { Router } from "express";
import { getCategory } from "../controllers/foodsCategory/get-category-foods";
import { getCategoryById } from "../controllers/foodsCategory/get-category-by-id";
import { addCategory } from "../controllers/foodsCategory/add-category-foods";
import { updateCategory } from "../controllers/foodsCategory/update-category-foods";
import { deleteCategory } from "../controllers/foodsCategory/delete-category-foods";
import { authenticate } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";

const router = Router();

// authenticate, authorize("ADMIN"), add these after you finish login

router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
