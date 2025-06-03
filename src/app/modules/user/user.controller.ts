import { Request, Response } from "express";
import {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
} from "./user.services";

/***********************************
 *        get api's
 ***********************************/
const getAllUser = async (req: Request, res: Response) => {
  const data = await getAllUsersFromDB();

  res.status(200).json({
    status: true,
    message: "user fetched successfully",
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
    const response = await createUserIntoDB(userData);

    res.status(201).json({
      status: true,
      message: "User created successfully",
      data: response,
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
    console.log(req.body);
    const updateBody: unknown = req.body;
    await updateUserIntoDB(updateBody);
  } catch (error: any) {
    console.log(error.message);
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

export const userController = {
  getAllUser,
  createNewUser,
  getSingleUser,
  updateUser,
};
