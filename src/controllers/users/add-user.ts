import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const addUsers = async (req: Request, res: Response) => {
  const { name, email, password, phoneNumber, address, role, isVerified } =
    req.body;

  const users = await prisma.user.create({
    data: {
      name,
      email,
      password,
      phoneNumber,
      address,
      role,
      isVerified,
    },
  });
  res.status(201).json({ users });
};
