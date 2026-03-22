import { Response, NextFunction } from "express";
import { UserRole } from "@prisma/client";
import { AuthRequest } from "../types";

export const authorize = (...allowedRoles: UserRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    try {
      if (!req.user) {
        res.status(401).json({ error: "You are not allowed!" });
        return;
      }

      if (!allowedRoles.includes(req.user.role)) {
        res.status(403).json({
          error: `You are not allowed! Only ${allowedRoles.join(" or ")} can do this!`,
        });
        return;
      }

      next();
    } catch (error) {
      res.status(500).json({ error: "Invalid request. Access denied." });
    }
  };
};
