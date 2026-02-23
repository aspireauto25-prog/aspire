import supabase from "@/config/database";

interface Params {
  params: Promise<{
    type: string;
  }>;
}

export const GET = async (_: Request, { params }: Params) => {
  const { type } = await params;

  const { data, error } = await supabase
    .from("legal_documents")
    .select("*", { count: "exact" })
    .eq("type", type)
    .maybeSingle();

  if (error) return Response.json({ message: error.message }, { status: 500 });

  return Response.json(data, { status: 200 });
};
