import { CarImage } from "./car.types";

export interface SaleCar {
  car_id: number;
  full_price: number;
  discount_price?: number;
}

export interface SaleCarWithDetails extends SaleCar {
  brand: string;
  category: string;
  chassis_number: string;
  color?: string;
  condition?: string;
  created_at: number;
  description?: string;
  drive_type: string;
  engine_capacity?: number;
  engine_number?: string;
  features?: string[];
  fuel_type?: string;
  id: number;
  images?: CarImage[];
  license_plate: string;
  mileage?: number;
  model: string;
  price: number;
  seat_capacity?: number;
  status: number;
  transmission_type?: string;
  updated_at: number;
  variant: string;
  year: number;
}

export interface PaginatedSaleCars {
  currentPage: number;
  data: SaleCarWithDetails[];
  total: number;
  totalPages: number;
}
