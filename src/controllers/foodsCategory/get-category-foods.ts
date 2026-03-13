import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const getCategory = async (req: Request, res: Response) => {
  const foodCat = await prisma.foodCategory.findMany({
    include: { foods: true },
  });
  res.json({ foodCat });
};
