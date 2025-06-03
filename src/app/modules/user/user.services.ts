import TUser from "./user.interface";
import { UserModel } from "./user.model";
import UserValidation from "./user.validation";

/*********************
 *    GET Method
 *********************/

export const getAllUsersFromDB = async () => {
  try {
    const data = UserModel.find().select({
      userId: 1,
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      address: 1,
    });
    return data;
  } catch (error: any) {
    throw Error("Error: ", error.message);
  }
};

export const getSingleUserFromDB = async (userId: number) => {
  try {
    const data = await UserModel.findOne({ userId }).select("-password");

    return data;
  } catch (error: any) {
    console.log(error);

    // const errorMessage: { error: { status: string; description: string } } = {
    //   error: { status: '404', description: 'User not found' },
    // };

    throw Error("User not found");
  }
};

/***************************
 *      POST Method
 ***************************/

export const createUserIntoDB = async (newUser: TUser) => {
  try {
    // await UserModel.isUserExist(newUser.userId as number);
    const data = UserValidation.parse(newUser); //validation

    const createNewUser = new UserModel(newUser);
    const response = await createNewUser.save();

    return response;
  } catch (error: any) {
    throw Error(error.message);
  }
};

/***************************
 *      PUT Method
 ***************************/
