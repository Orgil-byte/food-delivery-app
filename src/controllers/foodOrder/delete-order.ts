import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const deleteOrder = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const deleted = await prisma.foodOrder.delete({ where: { id } });
  if (!deleted) {
    res.status(404).json({ error: "Order not found" });
    return;
  }
  res.json({ deleted });
};
