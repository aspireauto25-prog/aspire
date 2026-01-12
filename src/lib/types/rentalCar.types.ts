import { Car } from "./car.types";

export interface RentalCar {
  car_id: number;
  daily_rate: number;
  weekly_rate?: number;
  monthly_rate?: number;
}

export interface RentalCarWithDetails extends RentalCar {
  cars: Car;
  created_at: number;
  id: number;
  status: string;
  updated_at: number;
}

export interface PaginatedRentalCars {
  currentPage: number;
  data: RentalCarWithDetails[];
  total: number;
  totalPages: number;
}
