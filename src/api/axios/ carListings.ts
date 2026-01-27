"use client";

import { CarListing } from "@/lib/types/carListing.types";
import api from ".";

export const createCarListing = async (data: CarListing) =>
  await api.post(`/api/cars/listings`, data);

export const uploadListingCarImages = async (
  car_id: number,
  images: { url: string; featured?: boolean }[],
) => await api.post(`/api/car-images/listings`, { car_id, images });
