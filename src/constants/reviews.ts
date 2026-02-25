export const REVIEWS_STATUS_PENDING = 1;
export const REVIEWS_STATUS_APPROVED = 2;

export const services = [
  "Car Rental",
  "Car Purchase",
  "Car Sale",
  "Car Servicing and Maintenance",
  "Consultation",
];

export const reviewFilters = [
  { label: "All", value: "" },
  { label: "Pending", value: REVIEWS_STATUS_PENDING },
  { label: "Approved", value: REVIEWS_STATUS_APPROVED },
];
