import { ZodError } from "zod";

import { formatZodErrors } from "@/utils/zod";
import { PAGE_LIMIT } from "@/constants/pagination";
import supabase from "@/config/database";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const pageParam = searchParams.get("page");
  const limitParam = searchParams.get("limit");
  const search = searchParams.get("search");
  const status = searchParams.get("status");

  const page = pageParam && parseInt(pageParam);
  const limit = limitParam && parseInt(limitParam);

  let query = supabase
    .from("contacts")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  if (page && limit) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    query = query.range(from, to);
  }

  if (status) query = query.eq("status", status);

  if (search) {
    query = query.or(
      `name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%,subject.ilike.%${search}%,message.ilike.%${search}%`
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
        totalPages: limit ? Math.ceil((count ?? 0) / limit) : PAGE_LIMIT,
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
