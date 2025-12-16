// Service packages data
const servicePackages = [
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

// Maintenance schedule
const maintenanceSchedule = [
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

document.addEventListener("DOMContentLoaded", function () {
  // Initialize theme
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    document.getElementById("theme-toggle-icon").classList.remove("fa-moon");
    document.getElementById("theme-toggle-icon").classList.add("fa-sun");
  } else {
    document.documentElement.classList.remove("dark");
    document.getElementById("theme-toggle-icon").classList.remove("fa-sun");
    document.getElementById("theme-toggle-icon").classList.add("fa-moon");
  }

  // Initialize service packages
  initServicePackages();

  // Initialize maintenance schedule
  initMaintenanceSchedule();

  // Initialize booking form
  initBookingForm();

  // Initialize FAQ
  initFAQ();
});

// Toggle theme
function toggleTheme() {
  const themeToggleIcon = document.getElementById("theme-toggle-icon");

  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
    themeToggleIcon.classList.remove("fa-sun");
    themeToggleIcon.classList.add("fa-moon");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
    themeToggleIcon.classList.remove("fa-moon");
    themeToggleIcon.classList.add("fa-sun");
  }
}

// Initialize service packages
function initServicePackages() {
  const container = document.getElementById("service-packages");
  servicePackages.forEach((pkg, index) => {
    const packageDiv = document.createElement("div");
    packageDiv.className = `service-card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up ${
      pkg.popular ? "border-2 border-primary" : ""
    }`;
    packageDiv.style.animationDelay = `${index * 0.1}s`;
    packageDiv.innerHTML = `
                    ${
                      pkg.popular
                        ? `
                        <div class="bg-primary text-white py-2 text-center font-bold">
                            <i class="fas fa-crown mr-2"></i> Most Popular
                        </div>
                    `
                        : ""
                    }
                    
                    <div class="p-8">
                        <div class="text-center mb-6">
                            <h3 class="text-2xl font-bold mb-2">${pkg.name}</h3>
                            <div class="flex items-center justify-center text-gray-600 dark:text-gray-400">
                                <i class="fas fa-clock mr-2"></i>
                                <span>${pkg.duration}</span>
                            </div>
                        </div>
                        
                        <div class="text-center mb-8">
                            <div class="text-5xl font-bold text-primary">$${
                              pkg.price
                            }</div>
                            <p class="text-gray-600 dark:text-gray-400">One-time service</p>
                        </div>
                        
                        <ul class="space-y-3 mb-8">
                            ${pkg.features
                              .map(
                                (feature) => `
                                <li class="flex items-center">
                                    <i class="fas fa-check text-primary mr-3"></i>
                                    <span>${feature}</span>
                                </li>
                            `
                              )
                              .join("")}
                        </ul>
                        
                        <div class="mb-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-xl">
                            <p class="text-sm text-gray-600 dark:text-gray-300">
                                <i class="fas fa-info-circle text-primary mr-2"></i>
                                ${pkg.recommendedFor}
                            </p>
                        </div>
                        
                        <button onclick="selectPackage(${
                          pkg.id
                        })" class="w-full ${
      pkg.popular
        ? "btn-primary"
        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
    } py-3 rounded-xl font-bold transition-colors">
                            <i class="fas fa-calendar-check mr-2"></i> Book This Service
                        </button>
                    </div>
                `;
    container.appendChild(packageDiv);
  });
}

// Initialize maintenance schedule
function initMaintenanceSchedule() {
  const container = document.getElementById("maintenance-schedule");
  maintenanceSchedule.forEach((item, index) => {
    const scheduleItem = document.createElement("div");
    scheduleItem.className =
      "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg animate-slide-up";
    scheduleItem.style.animationDelay = `${index * 0.1}s`;
    scheduleItem.innerHTML = `
                    <div class="flex items-start mb-4">
                        <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                            <i class="fas fa-tachometer-alt text-primary"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-lg">${item.mileage}</h4>
                            <div class="flex flex-wrap gap-2 mt-2">
                                ${item.services
                                  .map(
                                    (service) => `
                                    <span class="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full text-sm">${service}</span>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>
                    <button onclick="bookMileageService('${
                      item.mileage
                    }')" class="text-primary hover:underline font-medium">
                        <i class="fas fa-tools mr-2"></i> Schedule Service
                    </button>
                `;
    container.appendChild(scheduleItem);
  });
}

// Initialize booking form
function initBookingForm() {
  const form = document.getElementById("service-booking-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    bookService();
  });

  // Set minimum date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  document.getElementById("service-date").min = tomorrow
    .toISOString()
    .split("T")[0];
}

// Initialize FAQ
function initFAQ() {
  const faqData = [
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

  const container = document.getElementById("faq-container");
  faqData.forEach((item, index) => {
    const faqItem = document.createElement("div");
    faqItem.className = "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg";
    faqItem.innerHTML = `
                    <button onclick="toggleServiceFAQ(${index})" class="w-full flex justify-between items-center">
                        <h3 class="text-lg font-bold text-left">${item.question}</h3>
                        <i id="service-faq-icon-${index}" class="fas fa-plus text-primary"></i>
                    </button>
                    <div id="service-faq-answer-${index}" class="hidden mt-4">
                        <p class="text-gray-600 dark:text-gray-300">${item.answer}</p>
                    </div>
                `;
    container.appendChild(faqItem);
  });
}

// Select service package
function selectPackage(packageId) {
  const pkg = servicePackages.find((p) => p.id === packageId);
  if (!pkg) return;

  // Update form
  document.getElementById("service-type").value = pkg.name;
  document.getElementById("estimated-price").value = `$${pkg.price}`;

  // Show success message
  showNotification(`${pkg.name} selected! Fill out the form to book.`);

  // Scroll to booking form
  document
    .getElementById("booking-form")
    .scrollIntoView({ behavior: "smooth" });
}

// Book mileage-based service
function bookMileageService(mileage) {
  document.getElementById("service-type").value = `${mileage} Service`;
  document.getElementById("estimated-price").value = `From $99`;
  showNotification(
    `Scheduling ${mileage} service. Fill out the form to continue.`
  );
  document
    .getElementById("booking-form")
    .scrollIntoView({ behavior: "smooth" });
}

// Book service
function bookService() {
  const form = document.getElementById("service-booking-form");
  const requiredFields = [
    "name",
    "phone",
    "email",
    "car-model",
    "service-type",
    "service-date",
    "service-time",
  ];
  let isValid = true;

  // Validate required fields
  requiredFields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (!field.value.trim()) {
      field.classList.add("border-red-500");
      isValid = false;
    } else {
      field.classList.remove("border-red-500");
    }
  });

  if (!isValid) {
    showNotification("Please fill all required fields", "error");
    return;
  }

  // Show loading
  const submitBtn = document.getElementById("service-submit-btn");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin mr-2"></i> Booking...';
  submitBtn.disabled = true;

  // Simulate booking
  setTimeout(() => {
    // Show success
    const confirmation = document.getElementById("booking-confirmation");
    const serviceType = document.getElementById("service-type").value;
    const serviceDate = document.getElementById("service-date").value;
    const serviceTime = document.getElementById("service-time").value;

    confirmation.innerHTML = `
                    <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                        <div class="flex items-center mb-4">
                            <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-4">
                                <i class="fas fa-check text-green-600 dark:text-green-300 text-xl"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xl">Service Booked Successfully!</h3>
                                <p class="text-gray-600 dark:text-gray-300">We'll send confirmation details to your email.</p>
                            </div>
                        </div>
                        <div class="space-y-3">
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Service Type:</span>
                                <span class="font-bold">${serviceType}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Date & Time:</span>
                                <span class="font-bold">${serviceDate} at ${serviceTime}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="text-gray-600 dark:text-gray-400">Car Model:</span>
                                <span class="font-bold">${
                                  document.getElementById("car-model").value
                                }</span>
                            </div>
                        </div>
                    </div>
                `;
    confirmation.classList.remove("hidden");

    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

    // Reset form
    form.reset();

    // Scroll to confirmation
    confirmation.scrollIntoView({ behavior: "smooth" });
  }, 1500);
}

// Toggle FAQ
function toggleServiceFAQ(index) {
  const answer = document.getElementById(`service-faq-answer-${index}`);
  const icon = document.getElementById(`service-faq-icon-${index}`);

  if (answer.classList.contains("hidden")) {
    answer.classList.remove("hidden");
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
  } else {
    answer.classList.add("hidden");
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
  }
}

// Show notification
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `fixed top-6 right-6 ${
    type === "success" ? "bg-green-600" : "bg-red-600"
  } text-white px-6 py-4 rounded-xl shadow-2xl animate-slide-in-right z-50`;
  notification.innerHTML = `
                <div class="flex items-center">
                    <i class="fas ${
                      type === "success"
                        ? "fa-check-circle"
                        : "fa-exclamation-circle"
                    } text-xl mr-3"></i>
                    <span class="font-medium">${message}</span>
                </div>
            `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add(
      "opacity-0",
      "transition-opacity",
      "duration-300"
    );
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Emergency service
function requestEmergencyService() {
  document.getElementById("emergency-modal").classList.remove("hidden");
}

function closeEmergencyModal() {
  document.getElementById("emergency-modal").classList.add("hidden");
}

function submitEmergencyRequest() {
  const phone = document.getElementById("emergency-phone").value;
  const location = document.getElementById("emergency-location").value;
  const problem = document.getElementById("emergency-problem").value;

  if (!phone || !location || !problem) {
    showNotification("Please fill all emergency details", "error");
    return;
  }

  showNotification(
    "Emergency service dispatched! Help is on the way.",
    "success"
  );
  closeEmergencyModal();

  // Simulate call
  setTimeout(() => {
    alert(
      `Emergency service technician will call ${phone} within 5 minutes. Stay safe!`
    );
  }, 1000);
}
