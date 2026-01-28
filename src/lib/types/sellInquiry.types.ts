export interface SellInquiry {
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

export interface PaginatedSellInquiries {
  currentPage: number;
  data: SellInquiry[];
  total: number;
  totalPages: number;
}
