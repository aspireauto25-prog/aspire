// Car data
const carsData = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "Electric Luxury",
    price: 95,
    image:
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seats: 5,
    transmission: "Automatic",
    fuel: "Electric",
    features: ["Autopilot", "Premium Audio", "Glass Roof"],
    available: true,
    rating: 4.8,
    popular: true,
    tags: ["electric", "luxury", "automatic"],
  },
  {
    id: 2,
    name: "BMW X5",
    category: "Premium SUV",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seats: 7,
    transmission: "Automatic",
    fuel: "Petrol",
    features: ["Panoramic Roof", "Parking Assistant", "Premium Sound"],
    available: true,
    rating: 4.7,
    popular: true,
    tags: ["suv", "luxury", "automatic"],
  },
  {
    id: 3,
    name: "Toyota Camry",
    category: "Executive Sedan",
    price: 49,
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seats: 5,
    transmission: "Automatic",
    fuel: "Hybrid",
    features: ["Safety Sense", "Apple CarPlay", "Dual Zone"],
    available: true,
    rating: 4.5,
    popular: false,
    tags: ["sedan", "economy", "hybrid"],
  },
  {
    id: 5,
    name: "Range Rover Sport",
    category: "Luxury SUV",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seats: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    features: ["Terrain Response", "Panoramic Roof", "Climate Seats"],
    available: false,
    rating: 4.9,
    popular: false,
    tags: ["suv", "luxury", "offroad"],
  },
  {
    id: 7,
    name: "Audi e-tron GT",
    category: "Electric Sports",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seats: 4,
    transmission: "Automatic",
    fuel: "Electric",
    features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen"],
    available: true,
    rating: 4.9,
    popular: true,
    tags: ["electric", "sports", "luxury"],
  },
  {
    id: 8,
    name: "Porsche 911",
    category: "Sports Car",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    features: ["Sport Chrono", "PDK Transmission", "Sport Exhaust"],
    available: true,
    rating: 4.9,
    popular: false,
    tags: ["sports", "luxury", "performance"],
  },
  {
    id: 9,
    name: "Hyundai i20",
    category: "Compact Hatchback",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seats: 5,
    transmission: "Manual",
    fuel: "Petrol",
    features: ["Touchscreen", "Rear Camera", "Wireless Charging"],
    available: true,
    rating: 4.3,
    popular: false,
    tags: ["compact", "economy", "manual"],
  },
  {
    id: 11,
    name: "Ford Mustang",
    category: "Muscle Car",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seats: 4,
    transmission: "Automatic",
    fuel: "Petrol",
    features: ["V8 Engine", "Convertible", "Premium Sound"],
    available: true,
    rating: 4.7,
    popular: true,
    tags: ["sports", "muscle", "convertible"],
  },
  {
    id: 12,
    name: "Volvo XC90",
    category: "Family SUV",
    price: 109,
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    seats: 7,
    transmission: "Automatic",
    fuel: "Hybrid",
    features: ["Pilot Assist", "Bowers & Wilkins", "Air Suspension"],
    available: true,
    rating: 4.8,
    popular: false,
    tags: ["suv", "family", "safety"],
  },
];

let currentCars = [...carsData];
let currentFilters = {
  category: "all",
  transmission: "all",
  fuel: "all",
  seats: "all",
  priceRange: [0, 200],
  sortBy: "default",
};

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

  // Initialize price slider
  initPriceSlider();

  // Load initial cars
  renderCars();

  // Initialize event listeners
  initEventListeners();

  // Update car count
  updateCarCount();
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

// Initialize price slider
function initPriceSlider() {
  const priceSlider = document.getElementById("price-slider");
  const priceValue = document.getElementById("price-value");

  priceSlider.addEventListener("input", function () {
    priceValue.textContent = `Up to $${this.value}/day`;
    currentFilters.priceRange = [0, parseInt(this.value)];
    applyFilters();
  });
}

// Initialize event listeners
function initEventListeners() {
  // Category filter
  document.querySelectorAll(".category-filter").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".category-filter")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentFilters.category = this.dataset.category;
      applyFilters();
    });
  });

  // Transmission filter
  document.querySelectorAll('input[name="transmission"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      currentFilters.transmission = this.value;
      applyFilters();
    });
  });

  // Fuel filter
  document.querySelectorAll('input[name="fuel"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      currentFilters.fuel = this.value;
      applyFilters();
    });
  });

  // Seats filter
  document.querySelectorAll('input[name="seats"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      currentFilters.seats = this.value;
      applyFilters();
    });
  });

  // Sort by
  document
    .getElementById("sort-select")
    .addEventListener("change", function () {
      currentFilters.sortBy = this.value;
      applyFilters();
    });

  // Search
  document
    .getElementById("search-input")
    .addEventListener("input", function () {
      applyFilters();
    });

  // Reset filters
  document
    .getElementById("reset-filters")
    .addEventListener("click", function () {
      resetFilters();
    });

  // Toggle filter sidebar on mobile
  //   document
  //     .getElementById("toggle-filters")
  //     .addEventListener("click", function () {
  //       document.getElementById("filter-sidebar").classList.toggle("hidden");
  //     });
}

// Apply filters
function applyFilters() {
  let filteredCars = [...carsData];
  const searchQuery = document
    .getElementById("search-input")
    .value.toLowerCase();

  // Search filter
  if (searchQuery) {
    filteredCars = filteredCars.filter(
      (car) =>
        car.name.toLowerCase().includes(searchQuery) ||
        car.category.toLowerCase().includes(searchQuery)
    );
  }

  // Category filter
  if (currentFilters.category !== "all") {
    if (currentFilters.category === "popular") {
      filteredCars = filteredCars.filter((car) => car.popular);
    } else if (currentFilters.category === "electric") {
      filteredCars = filteredCars.filter(
        (car) => car.fuel.toLowerCase() === "electric"
      );
    } else {
      filteredCars = filteredCars.filter((car) =>
        car.tags.includes(currentFilters.category)
      );
    }
  }

  // Transmission filter
  if (currentFilters.transmission !== "all") {
    filteredCars = filteredCars.filter(
      (car) => car.transmission.toLowerCase() === currentFilters.transmission
    );
  }

  // Fuel filter
  if (currentFilters.fuel !== "all") {
    filteredCars = filteredCars.filter(
      (car) => car.fuel.toLowerCase() === currentFilters.fuel
    );
  }

  // Seats filter
  if (currentFilters.seats !== "all") {
    filteredCars = filteredCars.filter(
      (car) => parseInt(currentFilters.seats) <= car.seats
    );
  }

  // Price filter
  filteredCars = filteredCars.filter(
    (car) =>
      car.price >= currentFilters.priceRange[0] &&
      car.price <= currentFilters.priceRange[1]
  );

  // Sort
  if (currentFilters.sortBy === "price-low") {
    filteredCars.sort((a, b) => a.price - b.price);
  } else if (currentFilters.sortBy === "price-high") {
    filteredCars.sort((a, b) => b.price - a.price);
  } else if (currentFilters.sortBy === "rating") {
    filteredCars.sort((a, b) => b.rating - a.rating);
  } else if (currentFilters.sortBy === "name") {
    filteredCars.sort((a, b) => a.name.localeCompare(b.name));
  }

  currentCars = filteredCars;
  renderCars();
  updateCarCount();
}

// Reset filters
function resetFilters() {
  document.querySelectorAll(".category-filter").forEach((btn) => {
    btn.classList.remove("active");
  });
  document.getElementById("category-all").classList.add("active");

  document.querySelectorAll('input[name="transmission"]').forEach((radio) => {
    radio.checked = false;
  });
  document.getElementById("transmission-all").checked = true;

  document.querySelectorAll('input[name="fuel"]').forEach((radio) => {
    radio.checked = false;
  });
  document.getElementById("fuel-all").checked = true;

  document.querySelectorAll('input[name="seats"]').forEach((radio) => {
    radio.checked = false;
  });
  document.getElementById("seats-all").checked = true;

  document.getElementById("price-slider").value = 200;
  document.getElementById("price-value").textContent = "Up to $200/day";

  document.getElementById("sort-select").value = "default";
  document.getElementById("search-input").value = "";

  currentFilters = {
    category: "all",
    transmission: "all",
    fuel: "all",
    seats: "all",
    priceRange: [0, 200],
    sortBy: "default",
  };

  currentCars = [...carsData];
  renderCars();
  updateCarCount();
}

// Render cars
function renderCars() {
  const container = document.getElementById("cars-container");
  container.innerHTML = "";

  if (currentCars.length === 0) {
    container.innerHTML = `
                    <div class="col-span-full text-center py-12">
                        <i class="fas fa-car text-6xl text-gray-400 mb-4"></i>
                        <h3 class="text-2xl font-bold mb-2">No cars found</h3>
                        <p class="text-gray-600 dark:text-gray-400">Try adjusting your filters or search term</p>
                        <button onclick="resetFilters()" class="btn-primary px-6 py-3 rounded-full font-bold mt-4">
                            Reset All Filters
                        </button>
                    </div>
                `;
    return;
  }

  currentCars.forEach((car, index) => {
    const carCard = document.createElement("div");
    carCard.className =
      "bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-up";
    carCard.style.animationDelay = `${index * 0.05}s`;
    carCard.innerHTML = `
                    <div class="relative h-48 overflow-hidden">
                        <img src="${car.image}" alt="${
      car.name
    }" class="w-full h-full object-cover">
                        ${
                          car.popular
                            ? '<div class="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">Popular</div>'
                            : ""
                        }
                        ${
                          !car.available
                            ? '<div class="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-bold">Booked</div>'
                            : ""
                        }
                        <div class="absolute top-4 right-4 ${
                          car.available
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        } px-3 py-1 rounded-full text-sm font-bold">
                            ${car.available ? "Available" : "Unavailable"}
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-xl font-bold mb-1">${
                                  car.name
                                }</h3>
                                <p class="text-gray-500 dark:text-gray-400">${
                                  car.category
                                }</p>
                            </div>
                            <div class="text-right">
                                <div class="text-2xl font-bold text-primary">$${
                                  car.price
                                }<span class="text-sm font-normal">/day</span></div>
                                <div class="flex items-center justify-end mt-1">
                                    <i class="fas fa-star text-yellow-400"></i>
                                    <span class="ml-1 text-sm">${
                                      car.rating
                                    }</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex justify-between text-gray-600 dark:text-gray-400 mb-6">
                            <div class="flex items-center">
                                <i class="fas fa-user-friends mr-2"></i>
                                <span>${car.seats} Seats</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-gas-pump mr-2"></i>
                                <span>${car.fuel}</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-cogs mr-2"></i>
                                <span>${car.transmission}</span>
                            </div>
                        </div>
                        
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${car.features
                              .slice(0, 2)
                              .map(
                                (feature) => `
                                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full text-sm">${feature}</span>
                            `
                              )
                              .join("")}
                            ${
                              car.features.length > 2
                                ? '<span class="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded-full text-sm">+' +
                                  (car.features.length - 2) +
                                  " more</span>"
                                : ""
                            }
                        </div>
                        
                        <div class="flex space-x-3">
                            <a href="car-details.html?id=${
                              car.id
                            }" class="btn-primary flex-1 py-3 rounded-xl font-bold text-center">
                                View Details
                            </a>
                            ${
                              car.available
                                ? `
                                <button onclick="quickBook(${car.id})" class="px-6 py-3 rounded-xl font-bold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                                    Book Now
                                </button>
                            `
                                : `
                                <button disabled class="px-6 py-3 rounded-xl font-bold border-2 border-gray-400 text-gray-400 cursor-not-allowed">
                                    Unavailable
                                </button>
                            `
                            }
                        </div>
                    </div>
                `;
    container.appendChild(carCard);
  });
}

// Update car count
function updateCarCount() {
  document.getElementById("car-count").textContent = currentCars.length;
  document.getElementById("total-cars").textContent = carsData.length;
}

// Quick book function
function quickBook(carId) {
  const car = carsData.find((c) => c.id === carId);
  if (car) {
    // In a real app, this would redirect to booking page with car pre-selected
    alert(
      `Quick booking for ${car.name} - $${car.price}/day\nRedirecting to booking page...`
    );
    // window.location.href = `booking.html?car=${carId}`;
  }
}

// Toggle favorite
function toggleFavorite(icon) {
  if (icon.classList.contains("far")) {
    icon.classList.remove("far");
    icon.classList.add("fas", "text-red-500");
  } else {
    icon.classList.remove("fas", "text-red-500");
    icon.classList.add("far");
  }
}

// Toggle grid/list view
function toggleView(view) {
  const container = document.getElementById("cars-container");
  if (view === "list") {
    container.classList.remove(
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-3"
    );
    container.classList.add("grid-cols-1");
  } else {
    container.classList.remove("grid-cols-1");
    container.classList.add("grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3");
  }

  // Update active view buttons
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.classList.remove("bg-primary", "text-white");
    btn.classList.add(
      "bg-gray-200",
      "dark:bg-gray-800",
      "text-gray-700",
      "dark:text-gray-300"
    );
  });
  document
    .getElementById(`view-${view}`)
    .classList.remove(
      "bg-gray-200",
      "dark:bg-gray-800",
      "text-gray-700",
      "dark:text-gray-300"
    );
  document
    .getElementById(`view-${view}`)
    .classList.add("bg-primary", "text-white");
}
