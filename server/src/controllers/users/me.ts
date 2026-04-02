import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const me = async (req: Request, res: Response) => {
  if (!req.user?.id) {
    return res.status(400).json({ message: "user id or email missing." });
  }

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

  res.status(200).json(user);
};
