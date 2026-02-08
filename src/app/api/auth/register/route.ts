import { cookies } from "next/headers";
import { ZodError } from "zod";
import bcrypt from "bcryptjs";

import { formatZodErrors } from "@/utils/zod";
import { registerSchema } from "@/lib/schemas/auth.schema";
import { TOKEN } from "@/constants/contants";
import { User } from "@/lib/types/user.types";
import { USER_ROLE_ADMIN, USER_ROLE_CUSTOMER } from "@/constants/user";
import { verifyJWT } from "@/utils/jwt";
import supabase from "@/config/database";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const input = registerSchema.parse(body);

    const authToken = (await cookies()).get(TOKEN)?.value;

    if (!authToken) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const authUser = (await verifyJWT(authToken).catch(
      (error) => error,
    )) as User;

    if (authUser?.role !== USER_ROLE_ADMIN) {
      return Response.json({ message: "Forbidden" }, { status: 403 });
    }

    const hashedPassword = bcrypt.hashSync(input.password);

    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          address: input.address,
          email: input.email,
          name: input.name,
          password: hashedPassword,
          phone: input.phone,
          role: input.role || USER_ROLE_CUSTOMER,
        },
      ])
      .select("*");

    if (error)
      return Response.json(
        { message: "Error creating user." },
        { status: 500 },
      );

    return Response.json({ user: data }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors = formatZodErrors(error);

      return Response.json({ fieldErrors }, { status: 400 });
    }

    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
