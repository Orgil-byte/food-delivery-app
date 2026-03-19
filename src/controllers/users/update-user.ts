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

export const updateUsers = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  const accessToken = authorization?.split(" ")[1];

  if (!accessToken) return res.send("You are not allowed!");

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET!) as Token;

    if (decoded.data.role !== "ADMIN") {
      return res.send("You are not an ADMIN!!! Only admin can do this!");
    }

    const id = Number(req.params["id"]);
    const { name, email, password, phoneNumber, address, role, isVerified } =
      req.body;

    const users = await prisma.user.update({
      where: { id },
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
    if (!users) {
      res.status(404).json({ error: "User is not on the list" });
      return;
    }
    res.json({ users });
  } catch (error) {
    return res.send("Invalid request. Access denied");
  }
};
