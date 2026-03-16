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

const totalFoodPrice = async (foodId: number[], foodQuantity: number[]) => {
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

  const totalPriceMap = foods.map(
    (item, index) => item.price * foodQuantity[index]!,
  );

  const totalPrice = totalPriceMap.reduce((a, b) => a + b, 0);

  return totalPrice;
};

export const postOrder = async (req: Request, res: Response) => {
  const { userId, foodOrderItems }: BodyType = req.body;
  const totalPrice = await totalFoodPrice(
    foodOrderItems.map((item) => item.foodId),
    foodOrderItems.map((item) => item.quantity),
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
