import { Request, Response } from 'express';
import { createUserIntoDB, getAllUsersFromDB } from './user.services';

const getAllUser = async (req: Request, res: Response) => {
  const data = await getAllUsersFromDB();

  res.status(200).json({
    status: true,
    message: 'user fetched successfully',
    data,
  });
};

const createNewUser = async (req: Request, res: Response) => {
  try {
    const userData = await req.body;

    const response = await createUserIntoDB(userData);

    res.status(201).json({
      status: true,
      message: 'User created successfully',
      data: response,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      data: error.message,
    });
  }
};

export const userController = {
  getAllUser,
  createNewUser,
};
