import { Router } from "express";
import { getUsers } from "../controllers/users/get-user";
import { getUsersById } from "../controllers/users/get-user-by-id";
import { addUsers } from "../controllers/users/add-user";
import { updateUsers } from "../controllers/users/update-user";
import { deleteUsers } from "../controllers/users/delete-user";
import { authenticate } from "../middleware/authenticate";
import { authorize } from "../middleware/authorize";

const router = Router();

// authenticate, authorize("ADMIN"), add these after you finish login

router.post("/", addUsers);
router.get("/", getUsers);
router.get("/:id", getUsersById);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

export default router;
