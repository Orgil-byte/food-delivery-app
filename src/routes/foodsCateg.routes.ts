import { Router } from "express";
import { getCategory } from "../controllers/foodsCategory/get-category-foods";
import { getCategoryById } from "../controllers/foodsCategory/get-category-by-id";
import { postCategory } from "../controllers/foodsCategory/post-category-foods";
import { putCategory } from "../controllers/foodsCategory/put-category-foods";
import { deleteCategory } from "../controllers/foodsCategory/delete-category-foods";

const router = Router();

router.get("/", getCategory);
router.get("/:id", getCategoryById);
router.post("/", postCategory);
router.put("/:id", putCategory);
router.delete("/:id", deleteCategory);

export default router;
