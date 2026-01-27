import bcrypt from "bcryptjs";

import { changePasswordSchema } from "@/lib/schemas/auth.schema";
import supabase from "@/config/database";

export const POST = async (req: Request) => {
  const body = await req.json();

  if (!body.id) {
    return Response.json({ error: "User id is required." }, { status: 400 });
  }

  const input = changePasswordSchema.parse(body);

  const { data: currentData, error: currentError } = await supabase
    .from("users")
    .select("*")
    .eq("id", body.id);

  if (currentError) {
    return Response.json({ error: currentError }, { status: 500 });
  }

  const isPasswordValid = bcrypt.compareSync(
    input.currentPassword,
    currentData[0]?.password
  );

  if (!isPasswordValid) {
    return Response.json({ error: "Incorrect password." }, { status: 401 });
  }

  const hashedPassword = bcrypt.hashSync(input.newPassword);

  const { error } = await supabase
    .from("users")
    .update({ password: hashedPassword, updated_at: new Date().toISOString() })
    .eq("id", body.id)
    .select();

  if (error) return Response.json({ error }, { status: 500 });

  return Response.json(
    { message: "Password updated successfully." },
    { status: 200 }
  );
};
