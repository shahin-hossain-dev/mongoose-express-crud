import TUser from './user.interface';
import { UserModel } from './user.model';
import UserValidation from './user.validation';

export const createUserIntoDB = async (newUser: TUser) => {
  try {
    // await UserModel.isUserExist(newUser.userId as number);
    const data = UserValidation.parse(newUser);

    const createNewUser = new UserModel(newUser);
    const response = await createNewUser.save();

    return response;
  } catch (error: any) {
    throw Error(error.message);
  }
};
