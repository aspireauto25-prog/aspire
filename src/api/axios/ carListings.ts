"use client";

import { CarListing } from "@/lib/types/carListing.types";
import api from ".";

export const createCarListing = async (data: CarListing) =>
  await api.post(`/api/cars/listings`, data);
