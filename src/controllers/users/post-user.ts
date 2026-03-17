import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const addUsers = async (req: Request, res: Response) => {
  const {
    name,
    email,
    password,
    phoneNumber,
    address,
    role,
    orderedFoods,
    isVerified,
    // ttl,
  } = req.body;
  const users = await prisma.user.create({
    data: {
      name,
      email,
      password,
      phoneNumber,
      address,
      role,
      orderedFoods,
      isVerified,
      // ttl,
    },
  });
  res.status(201).json({ users });
};
