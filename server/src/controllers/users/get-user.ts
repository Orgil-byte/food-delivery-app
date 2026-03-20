import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        foodOrders: true,
      },
    });
    res.json({ users });
  } catch (error) {
    return res.send("Invalid request. Access denied");
  }
};
