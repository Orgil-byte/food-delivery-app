import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const me = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user?.id,
    },
    select: {
      email: true,
      phoneNumber: true,
      name: true,
    },
  });

  if (!user) return res.status(400).json({ message: "user not found." });

  res.status(201).json(user);
};
