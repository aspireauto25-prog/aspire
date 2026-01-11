"use client";

import axios from "axios";

import { Car } from "@/lib/types/car.types";

export const createCar = async (data: Car) =>
  await axios.post(`/api/cars`, data);

export const uploadCarImages = async (
  car_id: number,
  images: { url: string; featured?: boolean }[]
) => await axios.post(`/api/car-images`, { car_id, images });
