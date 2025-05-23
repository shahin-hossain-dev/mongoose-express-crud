import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullname: {
    firstName: { type: String, required: true },
    lastName: { type: String, require: true },
    required: true,
  },
});

export const User = model('User', userSchema);
