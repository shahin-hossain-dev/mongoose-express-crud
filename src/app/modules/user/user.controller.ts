import { Request, Response } from 'express';
import { createUserIntoDB } from './user.services';

const getAllUser = async (req: Request, res: Response) => {
  //handle req, res

  res.status(200).json({
    greeting: 'Hello World',
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
