import { Router } from "express";
import { getOrders } from "../controllers/foodOrder/get-food-order";
import { getOrderById } from "../controllers/foodOrder/get-order-by-id";
import { postOrder } from "../controllers/foodOrder/post-order";
import { putOrder } from "../controllers/foodOrder/put-order";
import { deleteOrder } from "../controllers/foodOrder/delete-order";

const router = Router();

router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/", postOrder);
router.put("/:id", putOrder);
router.delete("/:id", deleteOrder);

export default router;
