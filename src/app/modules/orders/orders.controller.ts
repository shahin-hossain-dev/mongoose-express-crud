import { getAllOrdersFromDB, getTotalPriceFromDB } from "./orders.services";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";

/************************
 *      GET api's
 ************************/

const getAllOrderSingleUser = catchAsync(async (req, res) => {
  const userId = parseInt(req.params.userId);
  const result = await getAllOrdersFromDB(userId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Order fetched successfully!",
    data: result,
  });
});

const getTotalPriceSingleUser = catchAsync(async (req, res) => {
  const userId = parseInt(req.params.userId);
  const result = await getTotalPriceFromDB(userId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Fetched Price Successfully",
    data: result,
  });
});

export const orderController = {
  getAllOrderSingleUser,
  getTotalPriceSingleUser,
};
