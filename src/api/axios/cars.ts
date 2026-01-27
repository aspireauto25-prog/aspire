"use client";

import { Car } from "@/lib/types/car.types";
import api from ".";

export const createCar = async (data: Car) => await api.post(`/api/cars`, data);

export const uploadCarImages = async (
  car_id: number,
  images: { url: string; featured?: boolean }[],
) => await api.post(`/api/car-images`, { car_id, images });

export const deleteCar = async (id: number) =>
  await api.delete(`/api/cars/${id}`);

export const updateCarStatus = async (id: number, status?: number) =>
  await api.patch(`/api/cars/${id}`, { status });
