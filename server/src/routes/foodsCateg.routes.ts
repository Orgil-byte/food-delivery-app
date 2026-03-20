import { Router } from "express";
import { getCategory } from "../controllers/foodsCategory/get-category-foods";
import { getCategoryById } from "../controllers/foodsCategory/get-category-by-id";
import { addCategory } from "../controllers/foodsCategory/add-category-foods";
import { updateCategory } from "../controllers/foodsCategory/update-category-foods";
import { deleteCategory } from "../controllers/foodsCategory/delete-category-foods";

const router = Router();

router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;
