import { NextResponse } from "next/server";
import { ZodError } from "zod";
import bcrypt from "bcryptjs";

import { createJWT } from "@/utils/jwt";
import { formatZodErrors } from "@/utils/zod";
import { loginSchema } from "@/lib/schemas/auth.schema";
import { TOKEN } from "@/constants/contants";
import { TOKEN_EXPIRATION_IN_SECONDS } from "@/constants/token";
import { USER_STATUS_BLOCKED, USER_STATUS_INACTIVE } from "@/constants/user";
import supabase from "@/config/database";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const input = loginSchema.parse(body);

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", input.email);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    if (data?.length == 0) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isPasswordValid = bcrypt.compareSync(
      input.password,
      data[0]?.password
    );

    if (!isPasswordValid) {
      return Response.json({ error: "Invalid credentials" }, { status: 401 });
    }

    if (data[0].status == USER_STATUS_INACTIVE) {
      return Response.json(
        { error: "User account is inactive." },
        { status: 403 }
      );
    }

    if (data[0].status == USER_STATUS_BLOCKED) {
      return Response.json(
        { error: "User account is blocked." },
        { status: 403 }
      );
    }

    delete data[0].password;

    const token = createJWT(data[0]);

    const response = NextResponse.json({ user: data[0], token });

    response.cookies.set(TOKEN, token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: TOKEN_EXPIRATION_IN_SECONDS,
    });

    return response;
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = formatZodErrors(error);

      return Response.json(formattedErrors, { status: 400 });
    }

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
