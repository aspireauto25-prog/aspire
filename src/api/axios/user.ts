"use client";

import { User } from "@/lib/types/user.types";
import api from ".";

export const updateUser = async (id: number, data: User) =>
  await api.put(`/api/user/${id}`, data);
