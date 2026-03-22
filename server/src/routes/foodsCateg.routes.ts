import { Router } from "express";
import { getCategory } from "../controllers/foodsCategory/get-category-foods";
import { getCategoryById } from "../controllers/foodsCategory/get-category-by-id";
import { addCategory } from "../controllers/foodsCategory/add-category-foods";
import { updateCategory } from "../controllers/foodsCategory/update-category-foods";
import { deleteCategory } from "../controllers/foodsCategory/delete-category-foods";
import { authenticate } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";

const router = Router();

router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.post("/", authenticate, authorize("ADMIN"), addCategory);
router.put("/:id", authenticate, authorize("ADMIN"), updateCategory);
router.delete("/:id", authenticate, authorize("ADMIN"), deleteCategory);

export default router;
