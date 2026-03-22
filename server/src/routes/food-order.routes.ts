import { Router } from "express";
import { getOrders } from "../controllers/foodOrder/get-food-order";
import { getOrderById } from "../controllers/foodOrder/get-order-by-id";
import { addOrder } from "../controllers/foodOrder/add-order";
import { updateOrder } from "../controllers/foodOrder/update-order";
import { deleteOrder } from "../controllers/foodOrder/delete-order";
import { authenticate } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";

const router = Router();
router.get("/", authenticate, authorize("ADMIN"), getOrders);
router.get("/:id", authenticate, getOrderById);
router.post("/", authenticate, addOrder);
router.put("/:id", authenticate, authorize("ADMIN"), updateOrder);
router.delete("/:id", authenticate, authorize("ADMIN"), deleteOrder);

export default router;
