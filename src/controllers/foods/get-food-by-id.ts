import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const getFoodById = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const food = await prisma.food.findUnique({ where: { id } });
  if (!food) {
    res.status(404).json({ error: "Food not found" });
    return;
  }
  res.json({ food });
};
