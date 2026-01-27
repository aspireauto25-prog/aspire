"use client";

import { SaleCar } from "@/lib/types/saleCar.types";
import api from ".";

export const createSaleCar = async (data: SaleCar) =>
  await api.post(`/api/cars/sale`, data);

export const updateSaleCar = async (id: number, data: SaleCar) =>
  await api.put(`/api/cars/sale/${id}`, data);

export const deleteSaleCar = async (id: number) =>
  await api.delete(`/api/cars/sale/${id}`);
