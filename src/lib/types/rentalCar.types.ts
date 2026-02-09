import { CarImage } from "./car.types";

export interface RentalCar {
  car_id: number;
  daily_rate: number;
  weekly_rate?: number;
  monthly_rate?: number;
}

export interface RentalCarWithDetails extends RentalCar {
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

export interface PaginatedRentalCars {
  currentPage: number;
  data: RentalCarWithDetails[];
  total: number;
  totalPages: number;
}
