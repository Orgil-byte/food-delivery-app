import { Router } from "express";
import { getCategory } from "../controllers/foodsCategory/get-category-foods";

const router = Router();

router.get("/", getCategory);

export default router;
