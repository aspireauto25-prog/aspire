import { PAGE_LIMIT } from "@/constants/pagination";

export function getPageNumbers(totalPages: number): number[] {
  return Array.from({ length: totalPages }, (_, index) => index + 1);
}

export function getCountFrom(currentPage: number): number {
  return Number.parseInt(PAGE_LIMIT) * (currentPage - 1) + 1;
}

export function getCountTo(currentPage: number, total: number): number {
  const countTo = Number.parseInt(PAGE_LIMIT) * currentPage;

  return countTo < total ? countTo : total;
}
