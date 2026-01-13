"use client";

import { RentalCar } from "@/lib/types/rentalCar.types";
import api from ".";

export const createRentalCar = async (data: RentalCar) =>
  await api.post(`/api/cars/rent`, data);

export const updateRentalCar = async (id: number, data: RentalCar) =>
  await api.put(`/api/cars/rent/${id}`, data);
