"use client";

import { RentalCar } from "@/lib/types/rentalCar.types";
import api from ".";

export const createRentalCar = async (data: RentalCar) => await api.post(`/api/cars/rent`, data);
