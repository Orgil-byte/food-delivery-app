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

const totalFoodPrice = async (foodId: number[]) => {
  const foods = await prisma.food.findMany({
    where: {
      id: {
        in: foodId,
      },
    },
    select: {
      price: true,
    },
  });

  const totalPrice = foods.reduce((a, b) => a + b.price, 0);

  return totalPrice;
};

export const postOrder = async (req: Request, res: Response) => {
  const { userId, foodOrderItems }: BodyType = req.body;
  const totalPrice = await totalFoodPrice(
    foodOrderItems.map((item) => item.foodId),
  );

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
