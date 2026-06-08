import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

import { TOKEN } from "@/constants/contants";
import { LOGIN_ROUTE } from "@/constants/routes";

// Edge-safe expiry check: only decodes the token (no `jsonwebtoken`, which is
// not supported in the proxy runtime). Signature verification still happens in
// the route handlers via `verifyJWT`.
function isExpired(token?: string) {
  if (!token) return true;

  try {
    const { exp } = jwtDecode(token);

    return !exp || Date.now() >= exp * 1000;
  } catch {
    return true;
  }
}

export function proxy(request: NextRequest) {
  const token = request.cookies.get(TOKEN)?.value;

  if (!isExpired(token)) return NextResponse.next();

  const response = NextResponse.redirect(new URL(LOGIN_ROUTE, request.url));

  response.cookies.delete(TOKEN);

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};
