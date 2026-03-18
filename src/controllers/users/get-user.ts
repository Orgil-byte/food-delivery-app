import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const getUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    include: {
      foodOrders: true,
    },
  });
  res.json({ users });
};
