import express from "express";
import prisma from "./lib/prisma";

const app = express();
app.use(express.json());

// GET all users
app.get("/users", async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// POST create user
app.post("/users", async (req, res) => {
  const { email, name } = req.body;
  const user = await prisma.user.create({
    data: { email, name },
  });
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
