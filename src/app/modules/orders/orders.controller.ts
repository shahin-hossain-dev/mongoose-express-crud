import { Request, Response } from "express";
import { getAllOrdersFromDB, getTotalPriceFromDB } from "./orders.services";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

/************************
 *      GET api's
 ************************/

const getAllOrderSingleUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  try {
    const result = await getAllOrdersFromDB(userId);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Order fetched successfully!",
      data: result,
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

    const result = await getTotalPriceFromDB(userId);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Fetched Price Successfully",
      data: result,
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
