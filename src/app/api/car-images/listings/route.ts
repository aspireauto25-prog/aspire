import { ZodError } from "zod";

import { formatZodErrors } from "@/utils/zod";

import supabase from "@/config/database";
import { carListingImageSchema } from "@/lib/schemas/carListings.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const input = carListingImageSchema.parse(body);

    const inputImages = input.images.map((image) => ({
      car_id: input.car_id,
      ...image,
    }));

    const { data, error } = await supabase
      .from("car_listing_images")
      .insert(inputImages)
      .select();

    if (error) return Response.json({ error: error.message }, { status: 500 });

    return Response.json(data, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = formatZodErrors(error);

      return Response.json(formattedErrors, { status: 400 });
    }

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
