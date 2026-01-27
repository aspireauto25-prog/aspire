import { z } from "zod";

export const saleCarSchema = z.object({
  car_id: z.number("Car id is required."),
  full_price: z.number("Car full price is required."),
  discount_price: z.number().optional(),
});
