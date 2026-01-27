export interface CarListing {
  brand: string;
  condition: string;
  description?: string;
  mileage?: number;
  model: string;
  owner_email: string;
  owner_name: string;
  owner_phone: string;
  price?: number;
  variant?: string;
  year?: number;
}

export interface PaginatedCarListings {
  currentPage: number;
  data: CarListing[];
  total: number;
  totalPages: number;
}
