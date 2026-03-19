import { Request, Response } from "express";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type Token = {
  data: {
    email: string;
    role: string;
    id: number;
  };
};

export const addUsers = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  const accessToken = authorization?.split(" ")[1];

  if (!accessToken) return res.send("You are not allowed!");

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET!) as Token;

    if (decoded.data.role !== "ADMIN") {
      return res.send("You are not an ADMIN!!!. Only admin can do this!");
    }

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
  } catch (error) {
    return res.send("Invalid request. Access denied");
  }
};
