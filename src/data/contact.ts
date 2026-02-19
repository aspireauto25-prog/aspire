import {
  FaEnvelope,
  FaFacebookF,
  FaMapPin,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

import {
  EMAIL,
  FACEBOOK_URL,
  LOCATION,
  PHONE,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "@/constants/contact";

export const contactInfo = [
  {
    icon: FaPhone,
    subtitle: "Speak directly with our team",
    title: "Call Us",
    value: PHONE,
  },
  {
    icon: FaEnvelope,
    subtitle: "Send us your queries",
    title: "Email Us",
    value: EMAIL,
  },
  {
    icon: FaMapPin,
    subtitle: "Come see us in person",
    title: "Visit Us",
    value: LOCATION,
  },
];

export const socialLinks = [
  {
    icon: FaFacebookF,
    link: FACEBOOK_URL,
  },
  {
    icon: FaTiktok,
    link: TIKTOK_URL,
  },
  {
    icon: FaWhatsapp,
    link: WHATSAPP_URL,
  },
];

export const faqData = [
  {
    question: "What are your business hours?",
    answer:
      "Our main office is open Monday to Saturday from 8:00 AM to 6:00 PM. Sunday closed.",
  },
  {
    question: "How quickly can I expect a response to my inquiry?",
    answer:
      "We typically respond to all inquiries within 1-2 business hours. For urgent matters, please call our support line directly for immediate assistance.",
  },
  {
    question: "Do you offer corporate or fleet services?",
    answer:
      "Yes, we provide specialized corporate solutions including fleet management, customized billing, and dedicated account managers. Contact our corporate team for tailored solutions.",
  },
  {
    question: "Can I visit your location without an appointment?",
    answer:
      "Yes, walk-ins are welcome at all our locations. However, we recommend booking an appointment for vehicle viewings or detailed consultations to ensure immediate service.",
  },
];
