import { Request, Response } from "express";
import prisma from "../../lib/prisma";
import { FoodOrderStatus } from "@prisma/client";

interface UpdateOrderBody {
  status: FoodOrderStatus;
}

export const updateOrder = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const { status }: UpdateOrderBody = req.body;

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
