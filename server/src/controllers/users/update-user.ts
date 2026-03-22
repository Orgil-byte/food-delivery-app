import { Response } from "express";
import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";
import { AuthRequest } from "../../types";

export const updateUsers = async (req: AuthRequest, res: Response) => {
  try {
    const id = Number(req.params["id"]);

    if (req.user!.role !== "ADMIN" && req.user!.id !== id) {
      return res
        .status(403)
        .json("You are not allowed! You can only update your own profile.");
    }

    if (
      req.user!.role !== "ADMIN" &&
      (req.body.role !== undefined || req.body.isVerified !== undefined)
    ) {
      return res
        .status(403)
        .json(
          "You are not an ADMIN!!! Only admin can change role or verification status.",
        );
    }

    const { name, email, password, phoneNumber, address, role, isVerified } =
      req.body;

    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : undefined;

    const users = await prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        ...(hashedPassword && { password: hashedPassword }),
        phoneNumber,
        address,
        ...(req.user!.role === "ADMIN" && { role, isVerified }),
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
