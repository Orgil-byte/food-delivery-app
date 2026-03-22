import { Request, Response, NextFunction } from "express";
import { UserRole } from "@prisma/client";

export type ExpressHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export type JwtPayload = {
  data: {
    email: string;
    role: UserRole;
    id: number;
  };
};

export interface AuthRequest extends Request {
  user?: JwtPayload["data"];
}
