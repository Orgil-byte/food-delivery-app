import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const addFood = async (req: Request, res: Response) => {
  const { foodName, price, image, ingredients, foodCategoryId } = req.body;
  const food = await prisma.food.create({
    data: { foodName, price, image, ingredients, foodCategoryId },
  });
  res.status(201).json({ food });
};
