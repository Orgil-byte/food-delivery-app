import { Router } from "express";
import { getUsers } from "../controllers/users/get-user";
import { getUsersById } from "../controllers/users/get-user-by-id";
import { addUsers } from "../controllers/users/add-user";
import { updateUsers } from "../controllers/users/update-user";
import { deleteUsers } from "../controllers/users/delete-user";
import { authenticate } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";

const router = Router();

router.post("/", addUsers);
router.get("/", authenticate, authorize("ADMIN"), getUsers);
router.get("/:id", authenticate, getUsersById);
router.put("/:id", authenticate, updateUsers);
router.delete("/:id", authenticate, authorize("ADMIN"), deleteUsers);

export default router;
