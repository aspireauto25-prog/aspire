import { cookies } from "next/headers";

import { TOKEN } from "@/constants/contants";
import { User } from "@/lib/types/user.types";
import { USER_ROLE_ADMIN } from "@/constants/user";
import { verifyJWT } from "@/utils/jwt";
import supabase from "@/config/database";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export const PUT = async (req: Request, { params }: Params) => {
  const { id } = await params;

  const authToken = (await cookies()).get(TOKEN)?.value;

  if (!authToken) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const authUser = (await verifyJWT(authToken).catch((error) => error)) as User;

  if (authUser?.role !== USER_ROLE_ADMIN && authUser.id != id) {
    return Response.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();

  if (!id) {
    return Response.json({ error: "User ID is required" }, { status: 400 });
  }

  const input = { updated_at: new Date().toISOString() } as User;

  if (body.address) input.address = body.address;
  if (body.email) input.email = body.email;
  if (body.name) input.name = body.name;
  if (body.phone) input.phone = body.phone;

  const { data, error } = await supabase
    .from("users")
    .update(input)
    .eq("id", id)
    .select()
    .single();

  if (error) return Response.json({ error }, { status: 500 });

  delete data.password;

  return Response.json(data, { status: 200 });
};
