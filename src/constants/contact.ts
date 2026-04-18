import config from "@/config";

export const CONTACT_INQUIRY_PENDING = 1;
export const CONTACT_INQUIRY_RESPONDED = 2;

export const subjects = [
  "Car Rental Inquiry",
  "Car Purchase Inquiry",
  "Car Sale Inquiry",
  "Car Servicing and Maintenance",
  "Corporate and Business Services",
  "Feedback and Suggestions",
  "Other Inquiry",
];

export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61584306850096";
export const TIKTOK_URL = "https://www.tiktok.com/@aspire.automotive";
export const WHATSAPP_URL = `https://wa.me/${config.whatsapp}`;

export const PHONE = "0497790788";
export const EMAIL = "info@aspireauto.com.au";
export const LOCATION = "29B Foxwood Way, Langford WA 6147";

export const contactFilters = [
  { label: "All", value: "" },
  { label: "Pending", value: CONTACT_INQUIRY_PENDING },
  { label: "Responded", value: CONTACT_INQUIRY_RESPONDED },
];
