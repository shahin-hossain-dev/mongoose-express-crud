import { Model } from "mongoose";

export type TOrders = {
  productName: string;
  quantity: number;
  price: number;
};

type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies?: string[];
  address: {
    street: string;
    city: string;
    country: string;
  };
  orders?: TOrders[];
};

export default TUser;

export interface TUserModel extends Model<TUser> {
  isUserExist(id: number): Promise<TUser | null>;
}
