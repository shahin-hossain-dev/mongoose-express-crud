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

/***********************************
 *        get api's
 ***********************************/
const getAllUser = async (req: Request, res: Response) => {
  const data = await getAllUsersFromDB();

  // res.status(200).json({
  //   status: true,
  //   message: "user fetched successfully",
  //   data,
  // });

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User fetched Successfully",
    data,
  });
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const query: number = parseInt(req.params.userId);
    const data = await getSingleUserFromDB(query);

    res.status(200).json({
      status: true,
      message: "User fetched successfully",
      data,
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

/***********************************
 *        post api's
 ***********************************/

const createNewUser = async (req: Request, res: Response) => {
  try {
    const userData = await req.body;
    const result = await createUserIntoDB(userData);

    // res.status(201).json({
    //   status: true,
    //   message: "User created successfully",
    //   data: response,
    // });
    sendResponse(res, {
      statusCode: status.CREATED,
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
      data: error.message,
    });
  }
};

/***********************************
 *        PUT API's
 ***********************************/

const updateUser = async (req: Request, res: Response) => {
  try {
    const updateBody: TUser = req.body;
    const result = await updateUserIntoDB(updateBody);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "User Fetched Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: error.message,
      error: {
        code: 404,
        description: error.message,
      },
    });
  }
};

const updateUserOrder = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.userId);
    const orderData = req.body;

    const data = await updateOrderIntoDB(userId, orderData);
    res.status(200).json({
      status: true,
      message: "Order updated Successfully",
      data,
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

/***********************************
 *        DELETE API's
 ***********************************/

const deleteUser = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.userId);

  try {
    const data = await deleteUserFromDB(userId);

    res.status(200).json({
      status: true,
      message: "User Deleted Successfully",
      data,
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

export const userController = {
  getAllUser,
  createNewUser,
  getSingleUser,
  updateUser,
  deleteUser,
  updateUserOrder,
};
