import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const putFood = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const { title } = req.body;
  const food = await prisma.food.update({ where: { id }, data: { title } });
  if (!food) {
    res.status(404).json({ error: "Food not found" });
    return;
  }
  res.json({ food });
};
