import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken";

import { TOKEN_EXPIRATION_IN_DAYS } from "@/constants/token";
import config from "@/config";

function createJWT(data: Record<string, unknown>) {
  return jwt.sign(data, config.jwtSecret, {
    expiresIn: TOKEN_EXPIRATION_IN_DAYS,
  });
}

function isTokenExpired(authToken: string) {
  const { exp } = jwtDecode(authToken);

  if (!exp) return true;

  return Date.now() >= exp * 1000;
}

async function verifyJWT(authToken: string) {
  return await new Promise((resolve, reject) => {
    jwt.verify(authToken, config.jwtSecret, (error, data) => {
      if (error) return reject(error);

      resolve(data);
    });
  });
}

export { createJWT, isTokenExpired, verifyJWT };
