import { cookies } from "next/headers";
import { ZodError } from "zod";

import { formatZodErrors } from "@/utils/zod";
import { PAGE_LIMIT } from "@/constants/pagination";
import { saleCarSchema } from "@/lib/schemas/saleCar.schema";
import { TOKEN } from "@/constants/contants";
import { User } from "@/lib/types/user.types";
import { USER_ROLE_ADMIN } from "@/constants/user";
import { verifyJWT } from "@/utils/jwt";
import supabase from "@/config/database";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const pageParam = searchParams.get("page") ?? "1";
  const limitParam = searchParams.get("limit") ?? PAGE_LIMIT.toString();
  const search = searchParams.get("search");
  const status = searchParams.get("status");

  const page = parseInt(pageParam);
  const limit = parseInt(limitParam);

  let query = supabase
    .from("sale_cars_with_details")
    .select("*", { count: "exact" })
    .is("deleted_at", null)
    .order("created_at", { ascending: false });

  if (page && limit) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    query = query.range(from, to);
  }

  if (status) query = query.eq("status", status);

  if (search) {
    query = query.or(
      `brand.ilike.%${search}%,model.ilike.%${search}%,variant.ilike.%${search}%,license_plate.ilike.%${search}%,chassis_number.ilike.%${search}%`
    );
  }

  try {
    const { data, error, count } = await query;

    if (error) return Response.json(error, { status: 500 });

    return Response.json(
      {
        currentPage: page,
        data,
        total: count,
        totalPages: Math.ceil((count ?? 0) / limit),
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = formatZodErrors(error);

      return Response.json(formattedErrors, { status: 400 });
    }

    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};

export async function POST(request: Request) {
  try {
    const authToken = (await cookies()).get(TOKEN)?.value;

    if (!authToken) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const authUser = (await verifyJWT(authToken).catch(
      (error) => error
    )) as User;

    if (authUser?.role !== USER_ROLE_ADMIN) {
      return Response.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await request.json();

    const input = saleCarSchema.parse(body);

    const { data, error } = await supabase
      .from("sale_cars")
      .insert({
        ...input,
        updated_at: new Date().toISOString(),
      })
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
