import { model, Schema } from 'mongoose';
import TUser, { TUserModel } from './user.interface';

const userSchema = new Schema<TUser, TUserModel>({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, require: true },
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: { type: String, required: true },
  isActive: Boolean,
  hobbies: {
    type: [String],
    required: true,
  },
  address: {
    street: String,
    city: String,
    country: String,
  },
});

export const UserModel = model<TUser, TUserModel>('User', userSchema);

userSchema.statics.isUserExist = async function (id: number) {
  const isExist = await UserModel.findOne({ id });

  return isExist;
};
