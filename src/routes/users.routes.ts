import { Router } from "express";
import { getUsers } from "../controllers/users/get-user";
import { getUsersById } from "../controllers/users/get-user-by-id";
import { addUsers } from "../controllers/users/add-user";
import { updateUsers } from "../controllers/users/update-user";
import { deleteUsers } from "../controllers/users/delete-user";
import { authUsers } from "../controllers/users/authentication/auth";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/", addUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

export default router;
