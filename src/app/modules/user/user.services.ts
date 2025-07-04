import orderValidation from "../orders/order.validation";
import TUser, { TOrders } from "./user.interface";
import { UserModel } from "./user.model";
import UserValidation from "./user.validation";
import bcrypt from "bcryptjs";
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

    if (!data) {
      throw Error("User not found");
    }

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

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newUser.password, salt);

    createNewUser.password = hash;

    const response = await createNewUser.save();

    return response;
  } catch (error: any) {
    throw Error(error.message);
  }
};

/***************************
 *      PUT Method
 ***************************/

export const updateUserIntoDB = async (updateData: TUser) => {
  const filter = { userId: updateData.userId };
  const updates = {
    userId: updateData.userId,
    fullName: {
      firstName: updateData.fullName.firstName,
      lastName: updateData.fullName.lastName,
    },
    address: {
      street: updateData.address.street,
      city: updateData.address.city,
      country: updateData.address.street,
    },
    username: updateData.username,
    age: updateData.age,
    email: updateData.email,
    isActive: updateData.isActive,
    hobbies: updateData.hobbies,
  };

  try {
    const res = await UserModel.updateOne(filter, updates);

    if (res.matchedCount === 0) {
      throw Error("User not found");
    }

    return res;
  } catch (error: any) {
    console.log(error.message);
    throw Error("User not found");
  }
};

export const updateOrderIntoDB = async (
  userId: number,
  orderData: { orders: TOrders[] },
) => {
  try {
    orderValidation.parse(orderData.orders); //order validation with zod

    const res = await UserModel.updateOne(
      { userId },
      {
        orders: orderData.orders,
      },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      },
    );

    return null;
  } catch (error: any) {
    console.log(error.message);
    throw Error(error.message);
  }
};

/***************************
 *      DELETE Method
 ***************************/
export const deleteUserFromDB = async (userId: number) => {
  try {
    const res = await UserModel.deleteOne({ userId });

    if (res.deletedCount === 0) {
      throw Error("User not found");
    }

    return null;
  } catch (error: any) {
    console.log(error.message);
    throw Error("User not found");
  }
};
