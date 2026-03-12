import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const postFood = async (req: Request, res: Response) => {
  const { title } = req.body;
  const food = await prisma.food.create({ data: { title } });
  res.status(201).json({ food });
};
