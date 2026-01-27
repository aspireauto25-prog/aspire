import { z } from "zod";

export const rentalCarSchema = z.object({
  car_id: z.number("Car id is required."),
  daily_rate: z.number("Daily rate is required."),
  monthly_rate: z.number().optional(),
  weekly_rate: z.number().optional(),
});
