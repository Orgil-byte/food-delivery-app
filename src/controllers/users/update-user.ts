import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export const updateUsers = async (req: Request, res: Response) => {
  const id = Number(req.params["id"]);
  const {
    name,
    email,
    password,
    phoneNumber,
    address,
    role,
    foodOrderItemId,
    isVerified,
    // ttl,
  } = req.body;

  const users = await prisma.user.update({
    where: { id },
    data: {
      name,
      email,
      password,
      phoneNumber,
      address,
      role,
      foodOrderItemId,
      isVerified,
      // ttl,
    },
  });
  if (!users) {
    res.status(404).json({ error: "User is not on the list" });
    return;
  }
  res.json({ users });
};
