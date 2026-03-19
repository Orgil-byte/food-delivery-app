import { Request, Response } from "express";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";

export const addUsers = async (req: Request, res: Response) => {
  const { name, email, password, phoneNumber, address, role, isVerified } =
    req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const users = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      role,
      isVerified,
    },
  });
  res.status(201).json({ users });
};
