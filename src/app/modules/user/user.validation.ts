import { z } from 'zod';

const UserValidation = z.object({
  id: z.number(),
  fullName: z.object({
    firstName: z.string().max(30, 'FirstName character will be under 30'),
    lastName: z.string().max(30, 'lastName character will be under 30'),
  }),
});
