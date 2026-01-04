import { ZodError } from "zod";

import { CONTACT_STATUS_PENDING } from "@/constants/contact";
import { contactSchema } from "@/lib/schemas/contact.schema";
import supabase from "@/config/database";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const input = contactSchema.parse(body);

    const { data, error } = await supabase
      .from("contacts")
      .insert([
        {
          ...input,
          status: CONTACT_STATUS_PENDING,
        },
      ])
      .select();

    if (error) return Response.json({ error: error.message }, { status: 500 });

    return Response.json(data[0], { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json({ errors: error.flatten() }, { status: 400 });
    }

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
