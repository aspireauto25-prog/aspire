import { ZodError } from "zod";

import { CAR_STATUS_AVAILABLE } from "@/constants/car";
import { carSchema } from "@/lib/schemas/car.schema";
import { formatZodErrors } from "@/utils/zod";
import supabase from "@/config/database";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const input = carSchema.parse(body);

    const { data, error } = await supabase
      .from("cars")
      .insert([
        {
          ...input,
          status: CAR_STATUS_AVAILABLE,
        },
      ])
      .select();

    if (error) return Response.json({ error: error.message }, { status: 500 });

    return Response.json(data[0], { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = formatZodErrors(error);

      return Response.json(formattedErrors, { status: 400 });
    }

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
