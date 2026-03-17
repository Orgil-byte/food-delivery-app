import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const addCategory = async (req: Request, res: Response) => {
  const { categoryName } = req.body;

  const category = await prisma.foodCategory.create({
    data: { categoryName },
  });

  res.status(201).json({ category });
};
