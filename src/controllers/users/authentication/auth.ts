import { Request, Response } from "express";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

export const authUsers = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(401).json("Email does not exist");
  }

  const compare = await bcrypt.compare(password, user.password);

  if (!compare) {
    return res.status(401).json("Invalid email or password");
  }

  res.status(200).json(user);
};
