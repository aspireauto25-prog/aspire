import supabase from "@/config/database";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export const GET = async (req: Request, { params }: Params) => {
  const { id } = await params;

  if (!id) {
    return Response.json({ error: "Blog ID is required." }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("cars")
    .select(`*`)
    .eq("id", id)
    .single();

  if (error) return Response.json({ error }, { status: 500 });

  return Response.json(data, { status: 200 });
};
