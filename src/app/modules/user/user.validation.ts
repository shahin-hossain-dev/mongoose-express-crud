import { z } from 'zod';

const UserValidation = z.object({
  userId: z.number(),
  fullName: z.object({
    firstName: z.string().max(30, 'FirstName character will be under 30'),
    lastName: z.string().max(30, 'lastName character will be under 30'),
  }),
  password: z.string().min(6, 'Password at least 6 character'),
  age: z.number(),
  username: z.string().max(20, 'Username max character is 20'),
  email: z.string().email().max(30, 'Email Max Character is 30'),
  address: z.object({
    street: z.string().max(30, 'Street Max is 30'),
    city: z.string().max(30, 'City Max is 30'),
    country: z.string().max(30, 'Country Max 30'),
  }),
  hobbies: z.array(z.string()).optional(),
  isActive: z.boolean().default(true),
});

export default UserValidation;
