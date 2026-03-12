import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const deleteUsers = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const deleted = await prisma.user.delete({ where: { id } });
  const users = await prisma.user.findMany();
  if (!deleted) {
    res.status(404).json({ error: "Food not found" });
    return;
  }
  res.json({ users });
};
