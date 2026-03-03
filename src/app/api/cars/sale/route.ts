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

  const category = searchParams.get("category");
  const limitParam = searchParams.get("limit") ?? PAGE_LIMIT;
  const pageParam = searchParams.get("page") ?? "1";
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");
  const status = searchParams.get("status");

  const page = parseInt(pageParam);
  const limit = parseInt(limitParam);

  let query = supabase
    .from("sale_cars_detail")
    .select("*", { count: "exact" })
    .is("deleted_at", null);

  if (page && limit) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    query = query.range(from, to);
  }

  if (sort) {
    const sortBy = JSON.parse(sort);

    query.order(sortBy.key, sortBy.order);
  } else {
    query.order("created_at", { ascending: false });
  }

  if (status) query = query.eq("status", status);

  if (category) query = query.ilike("category", `%${category}%`);

  if (search) {
    const words = search.trim().split(/\s+/);

    words.forEach((word) => {
      query = query.or(
        `brand.ilike.%${word}%,model.ilike.%${word}%,variant.ilike.%${word}%,license_plate.ilike.%${word}%,chassis_number.ilike.%${word}%`,
      );
    });
  }

  const { data, error, count } = await query;

  if (error) return Response.json({ message: error.message }, { status: 500 });

  return Response.json(
    {
      currentPage: page,
      data,
      total: count,
      totalPages: Math.ceil((count ?? 0) / limit),
    },
    { status: 200 },
  );
};

export async function POST(request: Request) {
  try {
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

    const body = await request.json();

    const input = saleCarSchema.parse(body);

    const { data, error } = await supabase
      .from("sale_cars")
      .insert({
        ...input,
        updated_at: new Date().toISOString(),
      })
      .select()
      .maybeSingle();

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
