import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const putCategory = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const { foodName, price, image, ingredients, foodCategoryId } = req.body;
  const food = await prisma.food.update({
    where: { id },
    data: { foodName, price, image, ingredients, foodCategoryId },
  });
  if (!food) {
    res.status(404).json({ error: "Food not found" });
    return;
  }
  res.json({ food });
};
