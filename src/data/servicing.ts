export const servicePackages = [
  {
    id: 1,
    name: "Basic Service",
    price: 99,
    duration: "1-2 hours",
    popular: false,
    features: [
      "Oil & Filter Change",
      "Tire Pressure Check",
      "Brake Inspection",
      "Fluid Level Check",
      "Battery Check",
      "Exterior Lights Check",
    ],
    recommendedFor: "Regular maintenance every 5,000 miles",
  },
  {
    id: 2,
    name: "Premium Service",
    price: 199,
    duration: "3-4 hours",
    popular: true,
    features: [
      "Everything in Basic Service",
      "Air Filter Replacement",
      "Cabin Air Filter",
      "Wiper Blades Replacement",
      "Fuel System Cleaning",
      "30-Point Inspection",
      "Brake Fluid Flush",
      "Computer Diagnostics",
    ],
    recommendedFor: "Comprehensive service every 10,000 miles",
  },
  {
    id: 3,
    name: "Full Service",
    price: 299,
    duration: "5-6 hours",
    popular: false,
    features: [
      "Everything in Premium Service",
      "Spark Plugs Replacement",
      "Transmission Fluid",
      "Coolant Flush",
      "Power Steering Fluid",
      "Suspension Check",
      "AC System Service",
      "Wheel Alignment",
      "Comprehensive Report",
    ],
    recommendedFor: "Complete overhaul every 30,000 miles",
  },
];

export const maintenanceSchedule = [
  {
    mileage: "Every 5,000 miles",
    services: ["Oil Change", "Tire Rotation", "Brake Inspection"],
  },
  {
    mileage: "Every 10,000 miles",
    services: ["Air Filter", "Cabin Filter", "Fuel System Cleaning"],
  },
  {
    mileage: "Every 20,000 miles",
    services: ["Spark Plugs", "Transmission Fluid", "Coolant Check"],
  },
  {
    mileage: "Every 30,000 miles",
    services: ["Wheel Alignment", "Suspension Check", "Complete Inspection"],
  },
  {
    mileage: "Every 50,000 miles",
    services: ["Timing Belt", "Water Pump", "Major Service"],
  },
];

export const faqData = [
  {
    question: "How long does a typical service take?",
    answer:
      "Basic service takes 1-2 hours, premium service takes 3-4 hours, and full service takes 5-6 hours. We offer express service options for basic maintenance.",
  },
  {
    question: "Do you provide loaner cars during servicing?",
    answer:
      "Yes, we provide complimentary loaner cars for services taking more than 4 hours. Luxury vehicles and SUVs may have a small additional charge.",
  },
  {
    question: "What is your warranty on servicing work?",
    answer:
      "All our servicing work comes with a 12-month/12,000-mile warranty. Parts are covered by manufacturer warranties, and labor is guaranteed.",
  },
  {
    question: "Can I wait while my car is being serviced?",
    answer:
      "Yes! We have a comfortable waiting lounge with free WiFi, refreshments, and workstations. You can also track progress through our mobile app.",
  },
];
