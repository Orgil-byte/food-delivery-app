import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const getUsersById = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    res.status(404).json({
      error: "User is not on the list",
    });
    return;
  }
  res.json({ user });
};
