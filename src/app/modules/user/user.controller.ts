import { Request, Response } from 'express';

const getAllUser = async (req: Request, res: Response) => {
  //handle req, res
};

const createNewUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const userController = {
  getAllUser,
  createNewUser,
};
