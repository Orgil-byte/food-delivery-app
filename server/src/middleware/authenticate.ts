import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JwtPayload, AuthRequest } from "../types";

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): void => {
  const { authorization } = req.headers;
  const accessToken = authorization?.split(" ")[1];

  if (!accessToken) {
    res.status(401).json({ error: "No token provided. Access denied." });
    return;
  }

  try {
    const decoded = jwt.verify(
      accessToken,
      process.env.JWT_SECRET!,
    ) as JwtPayload;

    req.user = decoded.data;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token. Access denied." });
  }
};
