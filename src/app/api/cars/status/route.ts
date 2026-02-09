import supabase from "@/config/database";

export const GET = async () => {
  const { data, error } = await supabase
    .from("cars_count_by_status")
    .select("*");

  if (error) return Response.json({ message: error.message }, { status: 500 });

  return Response.json(data, { status: 200 });
};
