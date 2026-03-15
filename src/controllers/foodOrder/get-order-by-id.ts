import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const getOrderById = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const order = await prisma.foodOrder.findUnique({
    where: { id },
    include: {
      user: true,
      foodOrderItems: {
        include: {
          food: true,
        },
      },
    },
  });
  if (!order) {
    res.status(404).json({ error: "Order not found" });
    return;
  }
  res.json({ order });
};
