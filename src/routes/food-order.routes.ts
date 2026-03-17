import { Router } from "express";
import { getOrders } from "../controllers/foodOrder/get-food-order";
import { getOrderById } from "../controllers/foodOrder/get-order-by-id";
import { addOrder } from "../controllers/foodOrder/post-order";
import { updateOrder } from "../controllers/foodOrder/put-order";
import { deleteOrder } from "../controllers/foodOrder/delete-order";

const router = Router();

router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/", updateOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

export default router;
