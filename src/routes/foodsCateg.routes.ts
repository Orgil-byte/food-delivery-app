import { Router } from "express";
import { getCategory } from "../controllers/foodsCategory/get-category-foods";
import { postCategory } from "../controllers/foodsCategory/post-category-foods";

const router = Router();

router.get("/", getCategory);
router.post("/", postCategory);

export default router;
