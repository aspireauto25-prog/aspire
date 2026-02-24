import { ZodError } from "zod";

import { formatZodErrors } from "@/utils/zod";
import { PAGE_LIMIT } from "@/constants/pagination";
import { REVIEWS_STATUS_DRAFT } from "@/constants/reviews";
import { reviewSchema } from "@/lib/schemas/review.schema";
import supabase from "@/config/database";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const pageParam = searchParams.get("page") ?? "1";
  const limitParam = searchParams.get("limit") ?? PAGE_LIMIT;
  const search = searchParams.get("search");
  const status = searchParams.get("status");

  const page = parseInt(pageParam);
  const limit = parseInt(limitParam);

  let query = supabase
    .from("reviews")
    .select(`*`, { count: "exact" })
    .order("created_at", { ascending: false });

  if (page && limit) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    query = query.range(from, to);
  }

  if (status) query = query.eq("status", status);

  if (search) {
    query = query.or(
      `brand.ilike.%${search}%,model.ilike.%${search}%,variant.ilike.%${search}%`,
    );
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
    const body = await request.json();

    const input = reviewSchema.parse(body);

    const { data, error } = await supabase
      .from("reviews")
      .insert({
        ...input,
        status: REVIEWS_STATUS_DRAFT,
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
