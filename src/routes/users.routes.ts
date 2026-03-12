import { Router } from "express";
import { getUsers } from "../controllers/users/get-user";
import { getUsersById } from "../controllers/users/get-user-by-id";
import { postUsers } from "../controllers/users/post-user";
import { putUsers } from "../controllers/users/put-user";
import { deleteUsers } from "../controllers/users/delete-user";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/", postUsers);
router.put("/:id", putUsers);
router.delete("/:id", deleteUsers);

export default router;
