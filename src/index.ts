import express from "express";
import prisma from "./lib/prisma";
import foodsRouter from "./routes/foods.routes";

const app = express();
app.use(express.json());

app.get("/users", async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { email, name } = req.body;
  const user = await prisma.user.create({ data: { email, name } });
  res.status(201).json(user);
});

app.use("/foods", foodsRouter);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
