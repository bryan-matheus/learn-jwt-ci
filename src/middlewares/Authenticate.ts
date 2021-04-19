import { NextFunction, Request, Response } from "express";

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  if (token === process.env.ACCESS_TOKEN) {
    next();
  }
  return res.sendStatus(403);
}
