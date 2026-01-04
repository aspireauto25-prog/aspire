import supabase from "@/config/database";

import { CONTACT_STATUS_PENDING } from "@/constants/contactStatus";

export async function POST(request: Request) {
  const input = await request.json();

  const { data, error } = await supabase
    .from("contacts")
    .insert([
      {
        email: input.email,
        message: input.message,
        name: input.name,
        phone: input.phone,
        status: CONTACT_STATUS_PENDING,
        subject: input.subject,
      },
    ])
    .select();

  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json(data, { status: 201 });
}
