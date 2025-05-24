import TUser from './user.interface';
import { UserModel } from './user.model';

export const createUserIntoDB = async (newUser: TUser) => {
  try {
    // await UserModel.isUserExist(newUser.userId as number);
    const res = await UserModel.create(newUser);
    console.log(res);
  } catch (error: any) {
    console.log(error.message);
  }
};
