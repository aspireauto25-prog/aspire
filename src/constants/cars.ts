export const CAR_STATUS_AVAILABLE = 1;
export const CAR_STATUS_MAINTENANCE = 2;
export const CAR_STATUS_BOOKED = 3;
export const CAR_STATUS_RENTED = 4;
export const CAR_STATUS_SOLD = 5;
export const CAR_STATUS_UNAVAILABLE = 6;

export const categories = [
  "Sedan",
  "SUV",
  "Truck",
  "Coupe",
  "Convertible",
  "Hatchback",
  "Minivan",
  "Sports Car",
  "Electric Vehicle",
  "Luxury",
  "Hybrid",
];

export const comfortFeatures = [
  "Air Conditioning",
  "Power Windows",
  "Power Seats",
  "Heated Seats",
  "Sunroof",
  "Keyless Entry",
  "Push Button Start",
  "Remote Start",
];

export const driveTypes = [
  { label: "Front-Wheel Drive (FWD)", value: "FWD" },
  { label: "Rear-Wheel Drive (RWD)", value: "RWD" },
  { label: "All-Wheel Drive (AWD)", value: "AWD" },
  { label: "Four-Wheel Drive (4WD)", value: "4WD" },
];

export const fuelTypes = [
  "Petrol",
  "Diesel",
  "Electric",
  "Hybrid",
  "Plug-in Hybrid",
  "CNG",
  "LPG",
];

export const safetyFeatures = [
  "ABS",
  "Airbags",
  "Stability Control",
  "Rear Camera",
  "Parking Sensors",
  "Lane Assist",
  "Blind Spot Monitor",
  "Adaptive Cruise",
];

export const seatCapacities = ["2", "4", "5", "6", "7", "8", "9"];

export const techFeatures = [
  "Touchscreen",
  "Navigation",
  "Bluetooth",
  "Apple CarPlay",
  "Android Auto",
  "Premium Sound",
  "USB Ports",
  "Wireless Charging",
];

export const transmissionTypes = [
  "Manual",
  "Automatic",
  "CVT",
  "Dual-Clutch",
  "Semi-Automatic",
];

export const carStatuses = [
  {
    label: "Available",
    value: CAR_STATUS_AVAILABLE,
  },
  {
    label: "Booked",
    value: CAR_STATUS_BOOKED,
  },
  {
    label: "Rented",
    value: CAR_STATUS_RENTED,
  },
  {
    label: "Sold",
    value: CAR_STATUS_SOLD,
  },
  {
    label: "Maintenance",
    value: CAR_STATUS_MAINTENANCE,
  },
  {
    label: "Unavailable",
    value: CAR_STATUS_UNAVAILABLE,
  },
];

export const carConditions = ["Excellent", "Very Good", "Good", "Fair", "Poor"];
