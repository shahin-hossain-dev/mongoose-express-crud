import { Request, Response } from "express";
import { getAllOrdersFromDB } from "./orders.services";

const getAllOrderSingleUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  try {
    //order service
    const orders = await getAllOrdersFromDB(userId);

    res.status(200).json({
      status: true,
      message: "Successfully get orders",
      data: orders,
    });
  } catch (error: any) {
    res.status(404).json({
      status: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

export const orderController = { getAllOrderSingleUser };
