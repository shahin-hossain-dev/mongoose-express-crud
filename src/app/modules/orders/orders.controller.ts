import { Request, Response } from "express";
import { getAllOrdersFromDB, getTotalPriceFromDB } from "./orders.services";

/************************
 *      GET api's
 ************************/

const getAllOrderSingleUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  try {
    const orders = await getAllOrdersFromDB(userId);

    res.status(200).json({
      status: true,
      message: "Order fetched successfully!",
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

const getTotalPriceSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);

    const data = await getTotalPriceFromDB(userId);

    console.log(data);

    res.status(200).json({
      status: true,
      message: "Price get Successfully",
      data: data,
    });
  } catch (error: any) {
    console.log(error.message);

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

export const orderController = {
  getAllOrderSingleUser,
  getTotalPriceSingleUser,
};
