import { Request, Response } from "express";
import prisma from "../../lib/prisma";
import jwt from "jsonwebtoken";

type Token = {
  data: {
    email: string;
    role: string;
    id: number;
  };
};

export const getUsers = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  const accessToken = authorization?.split(" ")[1];

  if (!accessToken) return res.send("You are not allowed!");

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET!) as Token;

    if (decoded.data.role !== "ADMIN") {
      return res.send("You are not an ADMIN!!!. Only admin can do this!");
    }

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
