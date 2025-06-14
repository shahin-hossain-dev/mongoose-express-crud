import { UserModel } from "../user/user.model";

export const getAllOrdersFromDB = async (userId: number) => {
  try {
    const filter = { userId };

    const data = await UserModel.findOne(filter, { orders: 1 });
    return data;
  } catch (error: any) {
    console.log(error.message);
    throw Error(error.message);
  }
};
