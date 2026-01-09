"use client";

import axios from "axios";

import { Car } from "@/lib/types/car.types";

export const createCar = async (data: Car) =>
  await axios.post(`/api/cars`, data);
