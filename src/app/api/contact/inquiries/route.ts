import { ZodError } from "zod";

import { formatZodErrors } from "@/utils/zod";
import { PAGE_LIMIT } from "@/constants/pagination";
import supabase from "@/config/database";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const pageParam = searchParams.get("page");
  const pageSizeParam = searchParams.get("pagesize");
  const search = searchParams.get("search");
  const status = searchParams.get("status");

  const page = pageParam && parseInt(pageParam);
  const pageSize = pageSizeParam && parseInt(pageSizeParam);

  let query = supabase
    .from("contacts")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  if (page && pageSize) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    query = query.range(from, to);
  }

  if (status) query = query.eq("status", status);

  if (search) {
    query = query.or(
      `name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%,subject.ilike.%${search}%`
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
        totalPages: pageSize ? Math.ceil((count ?? 0) / pageSize) : PAGE_LIMIT,
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
