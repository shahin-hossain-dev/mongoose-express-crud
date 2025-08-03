import { Request, Response } from "express";
import status from "http-status";
import {
  createUserIntoDB,
  deleteUserFromDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateOrderIntoDB,
  updateUserIntoDB,
} from "./user.services";
import TUser from "./user.interface";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

/***********************************
 *        get api's
 ***********************************/
const getAllUser = catchAsync(async (req, res) => {
  const data = await getAllUsersFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User fetched Successfully",
    data,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const query: number = parseInt(req.params.userId);
  const result = await getSingleUserFromDB(query);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User fetched Successfully",
    data: result,
  });
});

/***********************************
 *        post api's
 ***********************************/

const createNewUser = catchAsync(async (req, res) => {
  const userData = await req.body;
  const result = await createUserIntoDB(userData);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "User Created Successfully",
    data: result,
  });
});

/***********************************
 *        PUT API's
 ***********************************/

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const updateBody: TUser = req.body;
  const result = await updateUserIntoDB(updateBody);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User Fetched Successfully",
    data: result,
  });
});

const updateUserOrder = catchAsync(async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const orderData = req.body;

  const result = await updateOrderIntoDB(userId, orderData);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Order Updated Successfully",
    data: result,
  });
});

/***********************************
 *        DELETE API's
 ***********************************/

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId);

  const result = await deleteUserFromDB(userId);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User Deleted Successfully",
    data: result,
  });
});

export const userController = {
  getAllUser,
  createNewUser,
  getSingleUser,
  updateUser,
  deleteUser,
  updateUserOrder,
};
