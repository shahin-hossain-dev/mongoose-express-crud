import { UserModel } from "../user/user.model";

/************************
 *      Get methods
 ************************/

export const getAllOrdersFromDB = async (userId: number) => {
  try {
    const filter = { userId };

    const data = await UserModel.findOne(filter, { orders: 1 });

    if (!data) {
      throw Error("Order not found");
    }

    return data;
  } catch (error: any) {
    console.log(error.message);
    throw Error(error.message);
  }
};

export const getTotalPriceFromDB = async (userId: number) => {
  try {
    const res = await UserModel.aggregate([
      { $match: { userId } },
      { $project: { orders: 1 } },
      { $unwind: "$orders" },
      {
        $group: {
          _id: "_id",
          totalPrice: {
            $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
          },
        },
      },
      { $project: { totalPrice: 1 } },
    ]);

    if (!res) {
      throw Error("User not found");
    }

    return { totalPrice: res[0].totalPrice };
  } catch (error: any) {
    console.log(error.message);
    throw Error("User not found");
  }
};
