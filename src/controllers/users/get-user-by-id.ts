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

export const getUsersById = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  const accessToken = authorization?.split(" ")[1];

  if (!accessToken) return res.send("no");

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET!) as Token;

    if (decoded.data.role !== "ADMIN") {
      return res.send("no");
    }

    const id = Number(req.params["id"]);

    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        foodOrders: true,
      },
    });

    if (!user) {
      res.status(404).json({
        error: "User is not on the list",
      });
      return;
    }
    res.json({ user });
  } catch (error) {
    return res.send("Invalid request. Access denied");
  }
};
