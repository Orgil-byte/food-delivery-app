import { Request, Response } from "express";
import prisma from "../../lib/prisma";

type OrderItem = {
  foodId: number;
  quantity: number;
};

type BodyType = {
  userId: number;
  foodOrderItems: OrderItem[];
};

const totalFoodPrice = async (items: OrderItem[]) => {
  const foods = await prisma.food.findMany({
    where: {
      id: { in: items.map((item) => item.foodId) },
    },
    select: {
      id: true,
      price: true,
    },
  });

  const priceMap = new Map(foods.map((f) => [f.id, f.price]));

  return items.reduce((acc, item) => {
    const price = priceMap.get(item.foodId) ?? 0;
    return acc + price * item.quantity;
  }, 0);
};

export const postOrder = async (req: Request, res: Response) => {
  const { userId, foodOrderItems }: BodyType = req.body;
  const totalPrice = await totalFoodPrice(foodOrderItems);

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
