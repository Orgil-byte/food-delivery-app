import { Response } from "express";
import prisma from "../../lib/prisma";
import { AuthRequest } from "../../types";

export const getUsersById = async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params["id"]);

    if (req.user!.role !== "ADMIN" && req.user!.id !== id) {
      return res
        .status(403)
        .json("You are not allowed! You can only view your own profile.");
    }

    const user = await prisma.user.findUnique({
      where: { id },
      include: { foodOrders: true },
    });

    if (!user) {
      res.status(404).json({ error: "User is not on the list" });
      return;
    }

    res.json({ user });
  } catch (error) {
    return res.send("Invalid request. Access denied");
  }
};
