import { Request, Response, NextFunction } from "express";
import status from "http-status";
const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log("Error: Im Working");

  const errorStatusCode = status.INTERNAL_SERVER_ERROR;
  const errorMessage = error.message || "Something went wrong";

  res.status(errorStatusCode).json({
    success: false,
    message: errorMessage,
    error,
  });
  next();
};

export default globalErrorHandler;
