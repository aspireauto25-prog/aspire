export interface Inquiry {
  created_at: string;
  email: string;
  id: number;
  subject: string;
  message: string;
  name: string;
  phone: string;
  status: number;
}

export interface PaginatedInquiries {
  currentPage: number;
  data: Inquiry[];
  total: number;
  totalPages: number;
}
