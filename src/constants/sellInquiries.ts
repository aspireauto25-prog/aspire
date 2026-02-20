export const SELL_INQUIRY_PENDING = 1;
export const SELL_INQUIRY_RESPONDED = 2;

export const sellInquiryFilters = [
  { label: "All", value: "" },
  { label: "Pending", value: SELL_INQUIRY_PENDING },
  { label: "Responded", value: SELL_INQUIRY_RESPONDED },
];
