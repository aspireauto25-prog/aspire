import supabase from "@/config/database";

export const GET = async () => {
  try {
    const { data, error } = await supabase
      .from("cars_count_by_status")
      .select("*");

    if (error) return Response.json(error, { status: 500 });

    return Response.json(data, { status: 200 });
  } catch {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
