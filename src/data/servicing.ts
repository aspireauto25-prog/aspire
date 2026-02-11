export const servicePackages = [
  {
    id: 1,
    name: "Basic Servicing",
    price: 99,
    duration: "1-2 hours",
    popular: false,
    features: [
      "Oil & filter change- includes castrol engine oil and oil filter",
      "All Fluid level check & top-ups",
      "Tyre pressure & tread check",
      "Brake inspection",
      "Lights & safety check",
      "Road test & report any fault found.",
    ],
    recommendedFor: "Regular maintenance every 5,000 km",
  },
  {
    id: 2,
    name: "Logbook Servicing",
    price: 199,
    duration: "3-4 hours",
    popular: true,
    features: [
      "Manufacturer service schedule followed",
      "Logbook stamped and signed",
      "Service reminder reset",
      "Service report completed",
      "Diagnostic scan completed",
      "Engine oil replaced (manufacturer-approved grade)",
      "Oil filter replaced",
      "Coolant level & condition checked",
      "Brake fluid level & condition checked",
      "Power steering fluid checked (if applicable)",
      "Transmission fluid checked (where applicable)",
      "Windscreen washer fluid topped up",
      "Battery condition tested",
      "Battery terminals clean and secure",
      "Charging system checked",
      "Dashboard warning lights checked",
      "Tyre tread depth measured",
      "Tyre pressures set to manufacturer specification",
      "Tyres inspected for damage / uneven wear",
      "Wheel rotation, nuts/bolts checked and re-torqued to specification.",
    ],
    recommendedFor: "Comprehensive service every 10,000 km",
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
    recommendedFor: "Complete overhaul every 30,000 km",
  },
];

export const maintenanceSchedule = [
  {
    mileage: "Every 10,000 km / 6 months",
    services: ["Oil & Filter Change", "Tire Rotation", "Brake Inspection"],
  },
  {
    mileage: "Every 20,000 km / 12 months",
    services: ["Spark Plugs", "Transmission Fluid", "Brake Fluid"],
  },
  {
    mileage: "Every 40,000 km / 24 months",
    services: ["Wheel Alignment", "Suspension Check", "Hybrid Fan Clean"],
  },
  {
    mileage: "Every 100,000 km / 5 years",
    services: [
      "Spark Plugs",
      "Transmission Fluid Replacement",
      "Suspension & Filters",
    ],
  },
  {
    mileage: "Every 160,000 km / 8 years",
    services: ["Timing Belt", "Coolant Check", "Major Service"],
  },
  {
    mileage: "60,000-80,000 km (rental use)",
    services: ["Air Filter", "Cabin Filter", "CVT Fluid"],
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
