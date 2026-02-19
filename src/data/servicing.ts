import { GiCarWheel } from "react-icons/gi";
import { HiMiniPause } from "react-icons/hi2";
import { MdOutlineAir } from "react-icons/md";

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
      "100 points safety inspection carried out.",
    ],
    recommendedFor: "Regular maintenance every 10,000 km",
  },
  {
    id: 2,
    name: "Logbook Servicing",

    price: 199,
    duration: "3-4 hours",
    popular: true,
    features: [
      "Manufacturer service schedule followed",
      [
        "Logbook stamped and signed",
        "Service reminder reset",
        "Service report completed",
      ],
      "Diagnostic scan completed",
      "Engine oil replaced (manufacturer-approved grade)",
      [
        "Oil filter replaced",
        "Coolant level & condition checked",
        "Brake fluid level & condition checked",
        "Power steering fluid checked (if applicable)",
        "Transmission fluid checked (where applicable)",
        "Windscreen washer fluid topped up",
      ],
      "Battery condition tested",
      [
        "Battery terminals clean and secure",
        "Charging system checked",
        "Dashboard warning lights checked",
      ],
      "Tyre tread depth measured",
      [
        "Tyre pressures set to manufacturer specification",
        "Tyres inspected for damage / uneven wear",
        "Wheel rotation, nuts/bolts checked and re-torqued to specification.",
      ],
    ],
    recommendedFor: "Comprehensive service every 20,000 km",
  },
  // {
  //   id: 3,
  //   name: "Full Service",
  //   price: 299,
  //   duration: "5-6 hours",
  //   popular: false,
  //   features: [
  //     "Everything in Premium Service",
  //     "Spark Plugs Replacement",
  //     "Transmission Fluid",
  //     "Coolant Flush",
  //     "Power Steering Fluid",
  //     "Suspension Check",
  //     "AC System Service",
  //     "Wheel Alignment",
  //     "Comprehensive Report",
  //   ],
  //   recommendedFor: "Complete overhaul every 30,000 km",
  // },
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

export const moreServicesData = [
  {
    Icon: HiMiniPause,
    id: "brake-service",
    title: "Brake Services",
    description:
      "Keeping your car brakes in working order is essential for safety. Worn brakes mean longer stopping distances – and difficulty stopping quickly in emergency situations or wet conditions. If it’s been a while since your brakes were checked, put your safety first and book online.",
    subsections: [
      {
        title: "What does a Brake Service include?",
        content:
          "This depends on what type of car brakes your vehicle has: disc brakes or drum brakes. Your mechanic will need to look at different components and maintenance areas on each of these as part of the service checklist.",
      },
      {
        title: "Our Disc Brake Service includes:",
        items: [
          "High tech on-car disc machining (so brake pads fit flush against the disc rotors)",
          "Brake pad replacement",
          "Inspection and repacking of front wheel bearings (if applicable)",
          "Full inspection of hydraulics",
          "Disc Brake Service report",
        ],
      },
      {
        title: "Our Drum Brake Service includes:",
        items: [
          "Shoe replacement",
          "Machining of brake drums",
          "Full system inspection",
          "Cleaning and adjustment of brake components",
          "Bearings cleaned, inspected and repacked (if applicable)",
        ],
      },
    ],
  },
  {
    Icon: MdOutlineAir,
    id: "air-conditioning",
    title: "Air Conditioning Services",
    description:
      "Manufacturers recommend an air conditioning service every two years. A 're-gas' often solves issues, evacuating existing gas, refilling with new refrigerant, and replacing lubricating oil. Regular servicing helps avoid bad air flow, hot air, or unpleasant smells.",
    subsections: [
      {
        title: "Fixing your car's Air Conditioning System",
        content:
          "If your AC isn't working, it could be a simple aircon regas or a sign of issues with the compressor, blower motor, expansion valve, or evaporator. Our technicians will diagnose and fix the issue efficiently.",
      },
      {
        title: "Our Air Conditioning Services",
        items: [
          "Air conditioning regas and recharge",
          "Refrigerant leak testing",
          "Compressor and component inspection",
          "Blower motor and expansion valve repair",
          "Evaporator cleaning and maintenance",
        ],
      },
    ],
  },
  {
    Icon: GiCarWheel,
    id: "tyre-replacement",
    title: "Tyre Replacement Services",
    description:
      "We supply and install high-quality tyres to suit all vehicle types and budgets. Proper tyre replacement improves handling, braking, fuel efficiency, and overall safety.",
    subsections: [
      {
        title: "Our tyre services include:",
        items: [
          "New tyre supply (economy, mid-range, and premium brands)",
          "Removal and disposal of old tyres",
          "Professional tyre fitting using modern equipment",
          "Tyre pressure set to manufacturer specifications",
          "Visual inspection for damage and uneven wear",
        ],
      },
      {
        title: "Wheel Balancing",
        content:
          "Ensures weight is evenly distributed. Unbalanced wheels cause vibration, uneven wear, and steering issues. Benefits include smooth driving and extended tyre life.",
      },
      {
        title: "Wheel Alignment",
        content:
          "Ensures wheels are set to manufacturer specs (camber, caster, toe). Misaligned wheels cause rapid wear and affect stability.",
        items: [
          "Computerised alignment check",
          "Adjustment of camber, caster, and toe angles",
          "Steering wheel centring",
          "Pre- and post-alignment measurement report",
        ],
      },
    ],
  },
];
