import { model, Schema } from "mongoose";
import TUser, { TOrders, TUserModel } from "./user.interface";
const orderSchema = new Schema<TOrders>({
  productName: String,
  price: Number,
  quantity: Number,
});

const userSchema = new Schema<TUser, TUserModel>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, require: true },
  },
  age: {
    type: Number,
    required: true,
  },
  email: { type: String, required: true },
  isActive: Boolean,
  hobbies: {
    type: [String],
  },
  address: {
    street: String,
    city: String,
    country: String,
  },
  orders: {
    type: [orderSchema],
  },
});

export const UserModel = model<TUser, TUserModel>("User", userSchema);

userSchema.statics.isUserExist = async function (id: number) {
  const isExist = await UserModel.findOne({ id });

  return isExist;
};
