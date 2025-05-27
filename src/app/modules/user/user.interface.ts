import { Model } from 'mongoose';

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
};

export default TUser;

export interface TUserModel extends Model<TUser> {
  isUserExist(id: number): Promise<TUser | null>;
}
