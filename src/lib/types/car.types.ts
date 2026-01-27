export interface CarImage {
  created_at: number;
  featured: boolean;
  url: string;
}

export interface Car {
  brand: string;
  car_images?: CarImage[];
  category: string;
  chassis_number: string;
  color?: string;
  description?: string;
  drive_type: string;
  engine_capacity?: number;
  engine_number?: string;
  features?: string[];
  fuel_type?: string;
  id: number;
  license_plate: string;
  mileage?: number;
  model: string;
  price: number;
  seat_capacity?: number;
  status: number;
  transmission_type?: string;
  variant: string;
  year: number;
}

export interface PaginatedCars {
  currentPage: number;
  data: Car[];
  total: number;
  totalPages: number;
}
