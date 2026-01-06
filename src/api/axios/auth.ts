import axios from "axios";

import { LoginCredentials } from "@/lib/types/auth.types";

export const login = async (credentials: LoginCredentials) =>
  await axios.post("/api/auth/login", credentials);

export const logout = async () => await axios.post("/api/auth/logout");
