import bcrypt from "bcryptjs";

import { changePasswordSchema } from "@/lib/schemas/auth.schema";
import supabase from "@/config/database";

export const POST = async (req: Request) => {
  const body = await req.json();

  if (!body.id) {
    return Response.json({ message: "User id is required." }, { status: 400 });
  }

  const input = changePasswordSchema.parse(body);

  const { data: currentData, error: currentError } = await supabase
    .from("users")
    .select("*")
    .eq("id", body.id)
    .maybeSingle();

  if (currentError) {
    return Response.json(
      { message: "Error fetching user data." },
      { status: 500 },
    );
  }

  const isPasswordValid = bcrypt.compareSync(
    input.currentPassword,
    currentData?.password,
  );

  if (!isPasswordValid) {
    return Response.json({ message: "Incorrect password." }, { status: 401 });
  }

  const hashedPassword = bcrypt.hashSync(input.newPassword);

  const { error } = await supabase
    .from("users")
    .update({ password: hashedPassword, updated_at: new Date().toISOString() })
    .eq("id", body.id)
    .select();

  if (error) return Response.json({ message: error.message }, { status: 500 });

  return Response.json(
    { message: "Password updated successfully." },
    { status: 200 },
  );
};
