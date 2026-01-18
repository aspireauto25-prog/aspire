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
  created_at: number;
  fuel_type?: string;
  id: number;
  license_plate: string;
  mileage?: number;
  model: string;
  seat_capacity?: number;
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
