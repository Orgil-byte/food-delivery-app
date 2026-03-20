import { Router } from "express";
import { authUsers } from "../controllers/users/authentication/auth";

const router = Router();

router.post("/login", authUsers);

export default router;
