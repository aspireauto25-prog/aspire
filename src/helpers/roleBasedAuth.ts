import { cookies } from "next/headers";

import { TOKEN } from "@/constants/contants";
import { User } from "@/lib/types/user.types";
import { verifyJWT } from "@/utils/jwt";

async function isAllowedByRoles(roles: string[]) {
  const authToken = (await cookies()).get(TOKEN)?.value;

  if (!authToken) {
    throw {
      error: "Unauthorized",
      status: 401,
    };
  }

  const authUser = (await verifyJWT(authToken).catch((error) => error)) as User;

  if (!roles.includes(authUser?.role)) {
    throw {
      error: "Forbidden",
      status: 401,
    };
  }

  return true;
}

export default isAllowedByRoles;
