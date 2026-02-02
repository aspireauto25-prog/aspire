import { ZodError } from "zod";

import { CONTACT_INQUIRY_PENDING } from "@/constants/contact";
import { contactSchema } from "@/lib/schemas/contact.schema";
import { formatZodErrors } from "@/utils/zod";
import { PAGE_LIMIT } from "@/constants/pagination";
import supabase from "@/config/database";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const isRecent = searchParams.get("recent") || false;
  const limitParam = searchParams.get("limit");
  const pageParam = searchParams.get("page");
  const search = searchParams.get("search");
  const status = searchParams.get("status");

  const page = (pageParam && parseInt(pageParam)) || 1;
  const limit = limitParam && parseInt(limitParam);

  let query = supabase
    .from("contact_inquiries")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  if (page && limit) {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    query = query.range(from, to);
  }

  if (status) query = query.eq("status", status);

  if (isRecent) {
    const oneWeekAgo = new Date();

    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    query = query.gte("created_at", oneWeekAgo.toISOString());
  }

  if (search) {
    query = query.or(
      `name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%,subject.ilike.%${search}%,message.ilike.%${search}%`,
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
      { status: 200 },
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
    const body = await request.json();

    const input = contactSchema.parse(body);

    const { data, error } = await supabase
      .from("contact_inquiries")
      .insert([
        {
          ...input,
          status: CONTACT_INQUIRY_PENDING,
        },
      ])
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
