export interface Review {
  car?: string;
  created_at: string;
  email: string;
  id: number;
  name: string;
  ratings: number;
  review: string;
  service_used: string;
  status: number;
  updated_at: string;
}

export interface PaginatedReviews {
  currentPage: number;
  data: Review[];
  total: number;
  totalPages: number;
}
