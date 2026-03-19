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

export const deleteUsers = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  const accessToken = authorization?.split(" ")[1];

  if (!accessToken) return res.send("no");

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET!) as Token;

    if (decoded.data.role !== "ADMIN") {
      return res.send("no");
    }

    const id = Number(req.params["id"]);
    const deleted = await prisma.user.delete({ where: { id } });
    const users = await prisma.user.findMany();
    if (!deleted) {
      res.status(404).json({ error: "Food not found" });
      return;
    }
    res.json({ users });
  } catch (error) {
    return res.send("Invalid request. Access denied");
  }
};
