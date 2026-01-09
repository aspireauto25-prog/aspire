"use client";

import axios from "axios";

import { User } from "@/lib/types/user.types";

export const updateUser = async (id: number, data: User) =>
  await axios.put(`/api/user/${id}`, data);
