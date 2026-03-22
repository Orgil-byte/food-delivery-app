import { Response } from "express";
import prisma from "../../lib/prisma";
import { AuthRequest } from "../../types";

export const getOrderById = async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params["id"]);

    const order = await prisma.foodOrder.findUnique({
      where: { id },
      include: {
        user: true,
        foodOrderItems: { include: { food: true } },
      },
    });

    if (!order) {
      res.status(404).json({ error: "Order not found" });
      return;
    }

    if (req.user!.role !== "ADMIN" && order.userId !== req.user!.id) {
      return res
        .status(403)
        .json("You are not allowed! You can only view your own orders.");
    }

    res.json({ order });
  } catch (error) {
    return res.send("Invalid request. Access denied");
  }
};
