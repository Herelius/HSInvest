import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { IUser } from "../models/interface/User";

export const cookieJwtAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.headers.authorization || "";
  try {
    const user = jwt.verify(token, process.env.SECRET_TOKEN as string);
    // @ts-ignore
    req.user = user;
    next();
  } catch (error) {
    res.clearCookie(process.env.TOKEN_NAME as string);
  }
};
