import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const addFood = async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, foodCategoryId, desc } =
    req.body;
  const food = await prisma.food.create({
    data: { foodName, price, image, ingredients, foodCategoryId, desc },
  });
  res.status(201).json({ food });
};
