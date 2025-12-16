// Initialize theme
document.addEventListener("DOMContentLoaded", function () {
  // Set theme
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

  // Initialize video background
  const video = document.getElementById("hero-video");
  if (video) {
    video.playbackRate = 0.8; // Slow down video
  }

  // Initialize counters animation
  animateCounters();

  // Initialize car details
  initializeCarDetails();
});

// Toggle dark/light mode
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

// Animate counters
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(animateCounters, 1);
    } else {
      counter.innerText = target;
    }
  });
}

// Car data with detailed specifications
const cars = [
  {
    id: 1,
    name: "Honda Accord",
    category: "Executive Sedan",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    detailedImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    seats: 5,
    transmission: "Automatic",
    fuel: "Petrol",
    engine: "1.5L Turbocharged",
    horsepower: "192 HP",
    fuelEfficiency: "14.5 km/l",
    features: [
      "Leather Seats",
      "Sunroof",
      "Apple CarPlay",
      "Android Auto",
      "Lane Assist",
      "Adaptive Cruise Control",
      "Dual Zone Climate Control",
      "Push Button Start",
    ],
    description:
      "The Honda Accord offers a perfect blend of comfort, efficiency, and advanced technology. With its spacious interior, refined ride quality, and comprehensive safety features, it's ideal for both daily commuting and long journeys.",
    available: true,
    rating: 4.7,
  },
  {
    id: 2,
    name: "Hyundai i20",
    category: "Compact Hatchback",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    detailedImage:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    engine: "1.2L Kappa",
    horsepower: "83 HP",
    fuelEfficiency: "18.5 km/l",
    features: [
      "Touchscreen Infotainment",
      "Rear Camera",
      "Wireless Charging",
      "Voice Command",
      "Auto AC",
      "LED DRLs",
      "Alloy Wheels",
      "Remote Locking",
    ],
    description:
      "The Hyundai i20 is a stylish and practical hatchback perfect for city driving. With its modern design, feature-packed interior, and excellent fuel efficiency, it's an ideal choice for urban commuting and weekend getaways.",
    available: true,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Toyota Fortuner",
    category: "Premium SUV",
    price: 85,
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    detailedImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    seats: 7,
    transmission: "Automatic",
    fuel: "Diesel",
    engine: "2.8L Turbo Diesel",
    horsepower: "204 HP",
    fuelEfficiency: "12.5 km/l",
    features: [
      "4WD Capability",
      "Leather Upholstery",
      "Panoramic Sunroof",
      "360 Camera",
      "Ventilated Seats",
      "JBL Audio",
      "Wireless Charging",
      "Ambient Lighting",
    ],
    description:
      "The Toyota Fortuner is a robust and luxurious SUV that combines rugged capability with premium comfort. Perfect for both city driving and off-road adventures, it offers ample space for the entire family with top-notch safety features.",
    available: true,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Mercedes-Benz C-Class",
    category: "Luxury Sedan",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1732624696173-d3301dd410bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    detailedImage:
      "https://images.unsplash.com/photo-1732624696173-d3301dd410bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    seats: 5,
    transmission: "Automatic 9G-TRONIC",
    fuel: "Petrol",
    engine: "2.0L Turbo",
    horsepower: "255 HP",
    fuelEfficiency: "11.5 km/l",
    features: [
      "MBUX System",
      "Burmester Audio",
      "Ambient Lighting",
      "Memory Seats",
      "Heated Seats",
      "Panoramic Roof",
      "Wireless Charging",
      "Head-up Display",
    ],
    description:
      "Experience luxury redefined with the Mercedes-Benz C-Class. This executive sedan offers cutting-edge technology, exceptional comfort, and dynamic performance that sets new standards in its class.",
    available: true,
    rating: 4.9,
  },
  {
    id: 5,
    name: "Tesla Model 3",
    category: "Electric Luxury",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    detailedImage:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    engine: "Dual Motor AWD",
    horsepower: "450 HP",
    fuelEfficiency: "Equivalent to 50 km/l",
    features: [
      "Autopilot",
      "Premium Audio",
      "Glass Roof",
      "Wireless Updates",
      "Phone Key",
      "Dog Mode",
      "Sentry Mode",
      "Netflix/YouTube",
    ],
    description:
      "The Tesla Model 3 represents the future of automotive technology. With instant acceleration, zero emissions, and over 500 km of range, it offers a silent, smooth, and sustainable driving experience.",
    available: true,
    rating: 4.8,
  },
  {
    id: 6,
    name: "BMW 3 Series",
    category: "Sports Sedan",
    price: 90,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    detailedImage:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    seats: 5,
    transmission: "8-Speed Automatic",
    fuel: "Petrol",
    engine: "2.0L TwinPower Turbo",
    horsepower: "255 HP",
    fuelEfficiency: "13.5 km/l",
    features: [
      "Live Cockpit Pro",
      "Harman Kardon Audio",
      "Parking Assistant",
      "Gesture Control",
      "Wireless Charging",
      "Ambient Lighting",
      "Head-up Display",
      "Driving Assistant",
    ],
    description:
      "The BMW 3 Series combines sporty dynamics with executive luxury. With precise handling, premium interior, and advanced driver assistance systems, it delivers the ultimate driving experience.",
    available: true,
    rating: 4.7,
  },
];

// Initialize car details
function initializeCarDetails() {
  const container = document.getElementById("detailed-cars-container");
  if (!container) return;

  cars.forEach((car, index) => {
    const carElement = document.createElement("div");
    carElement.className = `detailed-car-card bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-slide-up border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]`;
    carElement.style.animationDelay = `${index * 0.1}s`;
    carElement.innerHTML = `
                    <div class="relative h-64 overflow-hidden">
                        <img src="${car.image}" alt="${
      car.name
    }" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110">
                        <div class="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                            $${
                              car.price
                            }<span class="text-sm font-normal">/day</span>
                        </div>
                        <div class="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                            ${
                              car.rating
                            } <i class="fas fa-star text-yellow-400 ml-1"></i>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-2xl font-bold mb-1">${
                                  car.name
                                }</h3>
                                <p class="text-gray-500 dark:text-gray-400">${
                                  car.category
                                }</p>
                            </div>
                            <span class="px-3 py-1 rounded-full text-sm font-medium ${
                              car.available
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                            }">
                                ${car.available ? "Available" : "Booked"}
                            </span>
                        </div>
                        
                        <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">${
                          car.description
                        }</p>
                        
                        <div class="grid grid-cols-2 gap-4 mb-6">
                            <div class="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl">
                                <i class="fas fa-user-friends text-primary text-xl mb-2"></i>
                                <div class="font-bold">${car.seats} Seats</div>
                            </div>
                            <div class="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl">
                                <i class="fas fa-gas-pump text-primary text-xl mb-2"></i>
                                <div class="font-bold">${car.fuel}</div>
                            </div>
                            <div class="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl">
                                <i class="fas fa-cogs text-primary text-xl mb-2"></i>
                                <div class="font-bold">${car.transmission}</div>
                            </div>
                            <div class="text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl">
                                <i class="fas fa-tachometer-alt text-primary text-xl mb-2"></i>
                                <div class="font-bold">${car.horsepower}</div>
                            </div>
                        </div>
                        
                        <div class="flex space-x-3">
                            <a href="car-details.html" class="text-center btn-primary flex-1 py-3 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300">
                                <i class="fas fa-info-circle mr-2"></i> Details
                            </a>
                            <button onclick="quickBookCar(${
                              car.id
                            })" class="px-6 py-3 rounded-xl font-bold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
                                <i class="fas fa-calendar-check mr-2"></i> Book
                            </button>
                        </div>
                    </div>
                `;
    container.appendChild(carElement);
  });
}

// Quick book car
function quickBookCar(carId) {
  const car = cars.find((c) => c.id === carId);
  if (!car) return;

  // Set car in booking form
  document.getElementById("booking-car-select").value = car.name;

  // Scroll to booking section with animation
  document
    .getElementById("booking-section")
    .scrollIntoView({ behavior: "smooth" });

  // Show notification
  showNotification(`Added ${car.name} to booking selection!`);
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className =
    "fixed top-6 right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl animate-slide-in-right z-50";
  notification.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-check-circle text-xl mr-3"></i>
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

// Submit booking
function submitBooking() {
  const car = document.getElementById("booking-car-select").value;
  const pickupDate = document.getElementById("pickup-date").value;
  const dropoffDate = document.getElementById("dropoff-date").value;

  if (!car || !pickupDate || !dropoffDate) {
    showNotification("Please fill all booking details!");
    return;
  }

  // Calculate days
  const pickup = new Date(pickupDate);
  const dropoff = new Date(dropoffDate);
  const diffTime = Math.abs(dropoff - pickup);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const selectedCar = cars.find((c) => c.name === car);
  const totalPrice = diffDays * selectedCar.price;

  // Show success animation
  const bookingForm = document.getElementById("booking-form");
  bookingForm.classList.add("animate-shake");

  setTimeout(() => {
    bookingForm.classList.remove("animate-shake");
    showNotification(`Booking confirmed for ${car}! Total: $${totalPrice}`);

    // Reset form
    document.getElementById("pickup-date").value = new Date()
      .toISOString()
      .split("T")[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    document.getElementById("dropoff-date").value = tomorrow
      .toISOString()
      .split("T")[0];
  }, 500);
}

// Update dropoff date minimum
function updateDropoffMinDate() {
  const pickupDate = document.getElementById("pickup-date").value;
  const dropoffInput = document.getElementById("dropoff-date");

  if (pickupDate) {
    const minDropoff = new Date(pickupDate);
    minDropoff.setDate(minDropoff.getDate() + 1);
    dropoffInput.min = minDropoff.toISOString().split("T")[0];

    // If current value is before minimum, update it
    if (new Date(dropoffInput.value) < minDropoff) {
      dropoffInput.value = dropoffInput.min;
    }
  }
}

// Initialize date pickers
const today = new Date().toISOString().split("T")[0];
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowStr = tomorrow.toISOString().split("T")[0];

document.getElementById("pickup-date").value = today;
document.getElementById("pickup-date").min = today;
document.getElementById("dropoff-date").value = tomorrowStr;
document.getElementById("dropoff-date").min = tomorrowStr;

// Back to top button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Initialize all functionality
document.addEventListener("DOMContentLoaded", function () {
  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slide-up");
      }
    });
  }, observerOptions);

  // Observe elements to animate on scroll
  document.querySelectorAll(".card-3d, .detailed-car-card").forEach((el) => {
    observer.observe(el);
  });

  document.querySelectorAll(".service-card").forEach((el) => {
    observer.observe(el);
  });

  // Initialize counters when in view
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters();
        counterObserver.unobserve(entry.target);
      }
    });
  });

  counterObserver.observe(document.querySelector(".video-background"));
});

// Close modal with escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDetailedCarModal();
  }
});
