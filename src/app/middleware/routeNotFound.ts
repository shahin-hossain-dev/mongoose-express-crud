import { Request, Response, NextFunction } from "express";
import status from "http-status";
const routeNotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "Api not found",
    error: "",
  });

  next();
};

export default routeNotFound;
