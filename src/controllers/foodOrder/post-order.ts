import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const postOrder = async (req: Request, res: Response) => {
  const { userId, foodOrderItems } = req.body;

  const order = await prisma.foodOrder.create({
    data: {
      userId,
      totalPrice,
      foodOrderItems: {
        create: foodOrderItems.map(
          (item: { foodId: number; quantity: number; price: number }) => ({
            foodId: item.foodId,
            quantity: item.quantity,
          }),
        ),
      },
    },
    include: {
      foodOrderItems: {
        include: { food: true },
      },
    },
  });

  res.status(201).json({ order });
};
