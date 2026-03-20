import { Request, Response } from "express";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";

export const addUsers = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      password,
      phoneNumber,
      address,
      role,
      isVerified,
      desc,
    } = req.body;

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
        desc,
      },
    });
    res.status(201).json({ users });
  } catch (error) {
    return res.send(error);
  }
};
