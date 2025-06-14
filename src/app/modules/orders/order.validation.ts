import { z } from "zod";

const orderValidation = z.array(
  z.object({
    productName: z.string(),
    price: z.number(),
    quantity: z.number(),
  }),
);

export default orderValidation;
