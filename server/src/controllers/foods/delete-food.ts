import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const deleteFood = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  try {
    await prisma.foodOrderItem.deleteMany({
      where: { foodId: id },
    });

    const deleted = await prisma.food.delete({
      where: { id },
    });

    res.json(deleted);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
