import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const putOrder = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const { status } = req.body;

  const order = await prisma.foodOrder.update({
    where: { id },
    data: { status },
  });

  if (!order) {
    res.status(404).json({ error: "Order not found" });
    return;
  }
  res.json({ order });
};
