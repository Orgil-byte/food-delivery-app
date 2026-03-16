import { Request, Response } from "express";
import prisma from "../../lib/prisma";

type OrderItem = {
  foodId: number;
  quantity: number;
  price: number;
};

type BodyType = {
  userId: number;
  foodOrderItems: OrderItem[];
};

export const postOrder = async (req: Request, res: Response) => {
  const { userId, foodOrderItems }: BodyType = req.body;

  const totalPrice = foodOrderItems
    .map((item) => {
      return item.quantity * item.price;
    })
    .reduce((acc, currentPrice) => {
      acc += currentPrice;
      return acc;
    }, 0);

  const foodMap = foodOrderItems.map((item) => ({
    foodId: item.foodId,
    quantity: item.quantity,
  }));

  const order = await prisma.foodOrder.create({
    data: {
      userId,
      totalPrice,
      foodOrderItems: { create: foodMap },
    },
    include: {
      foodOrderItems: {
        include: { food: true },
      },
    },
  });

  res.status(201).json({ order });
};
