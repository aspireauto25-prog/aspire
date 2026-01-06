import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken";

import config from "@/config";

const TOKEN_EXPIRATION = "30d"; // 30 days

function createJWT(data: Record<string, unknown>) {
  return jwt.sign(data, config.jwtSecret, {
    expiresIn: TOKEN_EXPIRATION,
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
