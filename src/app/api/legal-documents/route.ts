import { ZodError } from "zod";

import { cookies } from "next/headers";
import { formatZodErrors } from "@/utils/zod";
import { legalDocumentsSchema } from "@/lib/schemas/legalDocuments.schema";
import { TOKEN } from "@/constants/contants";
import { User } from "@/lib/types/user.types";
import { USER_ROLE_ADMIN } from "@/constants/user";
import { verifyJWT } from "@/utils/jwt";
import supabase from "@/config/database";

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

    const input = legalDocumentsSchema.parse(body);

    const { data, error } = await supabase
      .from("legal_documents")
      .upsert(
        {
          ...input,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "type" },
      )
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
