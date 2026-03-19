import { Router } from "express";
import { authUsers } from "../controllers/users/authentication/auth";

const router = Router();

router.get("/", authUsers);

export default router;
