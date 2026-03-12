import express from "express";
import prisma from "./lib/prisma";

const router = express.Router();

// GET all users
router.get("/users", async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// POST create user
router.post("/users", async (req, res) => {
  const { email, name } = req.body;
  const user = await prisma.user.create({
    data: { email, name },
  });
  res.status(201).json(user);
});

module.exports = router;
