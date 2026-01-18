export interface SaleCar {
  car_id: number;
  full_price: number;
  discount_price?: number;
}

export interface SaleCarWithDetails extends SaleCar {
  brand: string;
  category: string;
  chassis_number: string;
  created_at: number;
  fuel_type?: string;
  id: number;
  license_plate: string;
  mileage?: number;
  model: string;
  status: number;
  seat_capacity?: number;
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
