import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const deleteFood = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const deleted = await prisma.food.delete({ where: { id } });
  if (!deleted) {
    res.status(404).json({ error: "Food not found" });
    return;
  }
  res.json({ deleted });
};
