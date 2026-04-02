import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const updateCategory = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const { categoryName } = req.body;
  const category = await prisma.foodCategory.update({
    where: { id: id },
    data: { categoryName },
  });
  if (!category) {
    res.status(404).json({ error: "Category not found" });
    return;
  }
  res.json({ category });
};
