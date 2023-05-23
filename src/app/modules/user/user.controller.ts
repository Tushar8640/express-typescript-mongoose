import { NextFunction, Request, Response } from "express";
import User from "./user.model";
import { createUserToDB } from "./user.service";

export const creteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUserToDB();

  res.status(200).json({
    status: "success",
    data: user,
  });
};
