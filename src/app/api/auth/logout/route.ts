import { NextResponse } from "next/server";

import { TOKEN } from "@/constants/contants";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.delete(TOKEN);

  return response;
}
