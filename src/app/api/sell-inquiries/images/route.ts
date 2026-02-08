import { ZodError } from "zod";

import { formatZodErrors } from "@/utils/zod";
import { sellInquiryImageSchema } from "@/lib/schemas/sellInquiry.schema";
import supabase from "@/config/database";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const input = sellInquiryImageSchema.parse(body);

    const inputImages = input.images.map((image) => ({
      car_id: input.car_id,
      ...image,
    }));

    const { data, error } = await supabase
      .from("sell_inquiry_images")
      .insert(inputImages)
      .select();

    if (error)
      return Response.json({ message: error.message }, { status: 500 });

    return Response.json(data, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors = formatZodErrors(error);

      return Response.json({ fieldErrors }, { status: 400 });
    }

    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
