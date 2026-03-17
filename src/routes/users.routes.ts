import { Router } from "express";
import { getUsers } from "../controllers/users/get-user";
import { getUsersById } from "../controllers/users/get-user-by-id";
import { addUsers } from "../controllers/users/post-user";
import { updateUsers } from "../controllers/users/put-user";
import { deleteUsers } from "../controllers/users/delete-user";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/", addUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

export default router;
