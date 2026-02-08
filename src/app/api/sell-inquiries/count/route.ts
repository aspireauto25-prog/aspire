import { SELL_INQUIRY_PENDING } from "@/constants/sellInquiries";
import supabase from "@/config/database";

export const GET = async () => {
  try {
    const { count: totalCount, error: totalError } = await supabase
      .from("sell_inquiries")
      .select("*", { count: "exact", head: true });

    const { count: pendingCount, error: pendingError } = await supabase
      .from("sell_inquiries")
      .select("*", { count: "exact", head: true })
      .eq("status", SELL_INQUIRY_PENDING);

    if (totalError) return Response.json(totalError, { status: 500 });

    if (pendingError) return Response.json(pendingError, { status: 500 });

    return Response.json({ totalCount, pendingCount }, { status: 200 });
  } catch {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
