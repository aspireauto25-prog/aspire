export interface SellInquiry {
  brand: string;
  condition: string;
  description?: string;
  id: number;
  mileage?: number;
  model: string;
  owner_email: string;
  owner_name: string;
  owner_phone: string;
  price?: number;
  sell_inquiry_images: SellInquiryImage[];
  status: number;
  variant?: string;
  year?: number;
}

export interface SellInquiryImage {
  created_at: number;
  url: string;
}

export interface PaginatedSellInquiries {
  currentPage: number;
  data: SellInquiry[];
  total: number;
  totalPages: number;
}
