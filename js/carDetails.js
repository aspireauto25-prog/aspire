// Car data - In real implementation, this would come from a database
const carData = {
  id: 1,
  name: "Tesla Model 3",
  category: "Electric Luxury Sedan",
  price: 95,
  year: 2023,
  mileage: "8,500 km",
  condition: "Excellent",
  availability: "Available",
  rating: 4.8,
  reviewCount: 245,
  description:
    "Experience the future of driving with the Tesla Model 3. This all-electric sedan combines impressive performance with zero emissions. With instant torque, autopilot capabilities, and a minimalist interior featuring a 15-inch touchscreen, the Model 3 offers a truly modern driving experience. Perfect for both city commuting and long-distance travel with up to 353 miles of range.",
  detailedDescription: `
                <p>The Tesla Model 3 represents a revolution in automotive technology. As Tesla's most affordable vehicle, it doesn't compromise on features or performance. The Model 3 delivers exhilarating acceleration, reaching 0-60 mph in just 3.1 seconds in Performance trim.</p>
                <p class="mt-4">The minimalist interior is dominated by a 15-inch touchscreen that controls nearly all vehicle functions. Premium materials throughout the cabin create a sophisticated environment, while the glass roof provides an open, airy feeling.</p>
                <p class="mt-4">Advanced safety features include Automatic Emergency Braking, Collision Warning, Lane Departure Avoidance, and the industry-leading Autopilot system for assisted driving on highways.</p>
            `,
  features: [
    "Full Self-Driving Capability",
    "Premium Interior Package",
    "Glass Roof",
    "15-inch Touchscreen Display",
    "Wireless Phone Charging",
    "Premium Audio System",
    "Heated Seats All Around",
    "Dual Motor All-Wheel Drive",
    "Over-the-Air Updates",
    "Sentry Mode & Dog Mode",
  ],
  specifications: {
    engine: "Dual Motor AWD",
    horsepower: "450 HP",
    acceleration: "3.1 sec 0-60 mph",
    topSpeed: "162 mph",
    range: "353 miles",
    charging: "250 kW Supercharging",
    seating: "5 Adults",
    cargo: "15 cu ft",
    transmission: "Single Speed Automatic",
    driveType: "All-Wheel Drive",
    weight: "4,065 lbs",
    warranty: "4 years / 50,000 miles",
    battery: "8 years / 120,000 miles",
  },
  images: [
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  ],
  includes: [
    "Free Supercharging for 1 year",
    "Full Insurance Coverage",
    "24/7 Roadside Assistance",
    "Free Delivery & Pickup",
    "Unlimited Mileage",
    "Cleaning Service",
  ],
  requirements: [
    "Valid Driver's License",
    "Credit Card for Security Deposit",
    "Minimum Age: 25",
    "Insurance Documentation",
  ],
  similarCars: [
    {
      id: 2,
      name: "BMW i4",
      category: "Electric Sedan",
      price: 89,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Mercedes EQS",
      category: "Electric Luxury",
      price: 125,
      image:
        "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Audi e-tron GT",
      category: "Electric Sports",
      price: 110,
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ],
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

  // Initialize date pickers
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  document.getElementById("pickup-date").value = today;
  document.getElementById("pickup-date").min = today;
  document.getElementById("return-date").value = tomorrowStr;
  document.getElementById("return-date").min = tomorrowStr;

  // Populate car data
  populateCarData();

  // Initialize image gallery
  initImageGallery();

  // Initialize booking calculator
  updateBookingTotal();
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

// Populate car data
function populateCarData() {
  // Basic info
  document.getElementById("car-name").textContent = carData.name;
  document.getElementById("car-category").textContent = carData.category;
  document.getElementById(
    "car-price"
  ).innerHTML = `$${carData.price}<span class="text-lg">/day</span>`;
  document.getElementById("car-year").textContent = carData.year;
  document.getElementById("car-mileage").textContent = carData.mileage;
  document.getElementById("car-condition").textContent = carData.condition;
  document.getElementById("availability-badge").textContent =
    carData.availability;
  document.getElementById(
    "car-rating"
  ).innerHTML = `${carData.rating} <i class="fas fa-star text-yellow-400"></i>`;
  document.getElementById(
    "car-review-count"
  ).textContent = `(${carData.reviewCount} reviews)`;
  document.getElementById("car-description").innerHTML =
    carData.detailedDescription;

  // Availability badge
  const availabilityBadge = document.getElementById("availability-badge");
  if (carData.availability === "Available") {
    availabilityBadge.className =
      "px-4 py-2 rounded-full text-sm font-bold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
  } else {
    availabilityBadge.className =
      "px-4 py-2 rounded-full text-sm font-bold bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
  }

  // Features
  const featuresContainer = document.getElementById("features-list");
  featuresContainer.innerHTML = "";
  carData.features.forEach((feature) => {
    const li = document.createElement("li");
    li.className = "flex items-center mb-3";
    li.innerHTML = `
                    <i class="fas fa-check text-primary mr-3"></i>
                    <span>${feature}</span>
                `;
    featuresContainer.appendChild(li);
  });

  // Specifications
  const specContainer = document.getElementById("specifications-list");
  specContainer.innerHTML = "";
  Object.entries(carData.specifications).forEach(([key, value]) => {
    const div = document.createElement("div");
    div.className =
      "flex justify-between py-3 border-b border-gray-200 dark:border-gray-800";
    div.innerHTML = `
                    <span class="text-gray-600 dark:text-gray-400">${formatSpecKey(
                      key
                    )}</span>
                    <span class="font-bold">${value}</span>
                `;
    specContainer.appendChild(div);
  });

  // What's included
  const includesContainer = document.getElementById("includes-list");
  includesContainer.innerHTML = "";
  carData.includes.forEach((item) => {
    const li = document.createElement("li");
    li.className = "flex items-center mb-3";
    li.innerHTML = `
                    <i class="fas fa-check-circle text-primary mr-3"></i>
                    <span>${item}</span>
                `;
    includesContainer.appendChild(li);
  });

  // Requirements
  const requirementsContainer = document.getElementById("requirements-list");
  requirementsContainer.innerHTML = "";
  carData.requirements.forEach((item) => {
    const li = document.createElement("li");
    li.className = "flex items-center mb-3";
    li.innerHTML = `
                    <i class="fas fa-info-circle text-primary mr-3"></i>
                    <span>${item}</span>
                `;
    requirementsContainer.appendChild(li);
  });

  // Similar cars
  const similarCarsContainer = document.getElementById(
    "similar-cars-container"
  );
  similarCarsContainer.innerHTML = "";
  carData.similarCars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.className =
      "bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300";
    carCard.innerHTML = `
                    <img src="${car.image}" alt="${car.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h4 class="font-bold text-lg mb-2">${car.name}</h4>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">${car.category}</p>
                        <div class="flex justify-between items-center">
                            <div class="text-2xl font-bold text-primary">$${car.price}<span class="text-sm font-normal">/day</span></div>
                            <a href="car-details.html?id=${car.id}" class="text-primary hover:underline font-medium">View →</a>
                        </div>
                    </div>
                `;
    similarCarsContainer.appendChild(carCard);
  });
}

// Format specification keys
function formatSpecKey(key) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

// Image gallery
let currentImageIndex = 0;

function initImageGallery() {
  const mainImage = document.getElementById("main-image");
  const thumbnailsContainer = document.getElementById("thumbnails");

  // Set first image
  mainImage.src = carData.images[0];

  // Create thumbnails
  thumbnailsContainer.innerHTML = "";
  carData.images.forEach((image, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.className = `thumbnail w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
      index === 0 ? "border-primary" : "border-transparent"
    }`;
    thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${
      index + 1
    }" class="w-full h-full object-cover">`;
    thumbnail.addEventListener("click", () => changeMainImage(index));
    thumbnailsContainer.appendChild(thumbnail);
  });
}

// Change main image
function changeMainImage(index) {
  currentImageIndex = index;
  const mainImage = document.getElementById("main-image");
  mainImage.src = carData.images[index];

  // Update active thumbnail
  document.querySelectorAll(".thumbnail").forEach((thumb, i) => {
    thumb.className = `thumbnail w-24 h-24 rounded-lg overflow-hidden cursor-pointer border-2 ${
      i === index ? "border-primary" : "border-transparent"
    }`;
  });
}

// Next/Prev image
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % carData.images.length;
  changeMainImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + carData.images.length) % carData.images.length;
  changeMainImage(currentImageIndex);
}

// Booking functions
function updateBookingTotal() {
  const pickupDate = new Date(document.getElementById("pickup-date").value);
  const returnDate = new Date(document.getElementById("return-date").value);
  const days = Math.ceil((returnDate - pickupDate) / (1000 * 60 * 60 * 24));

  if (days > 0) {
    const subtotal = days * carData.price;
    const insurance = document.getElementById("insurance").checked
      ? 15 * days
      : 0;
    const total = subtotal + insurance;

    document.getElementById("days-count").textContent = days;
    document.getElementById("subtotal").textContent = `$${subtotal}`;
    document.getElementById("insurance-cost").textContent = `$${insurance}`;
    document.getElementById("total-cost").textContent = `$${total}`;

    // Update min return date
    const minReturnDate = new Date(pickupDate);
    minReturnDate.setDate(minReturnDate.getDate() + 1);
    document.getElementById("return-date").min = minReturnDate
      .toISOString()
      .split("T")[0];

    // If current return date is before new minimum, update it
    if (returnDate < minReturnDate) {
      document.getElementById("return-date").value = minReturnDate
        .toISOString()
        .split("T")[0];
      updateBookingTotal(); // Recalculate
    }
  }
}

function submitBooking() {
  const pickupDate = document.getElementById("pickup-date").value;
  const returnDate = document.getElementById("return-date").value;
  const location = document.getElementById("pickup-location").value;
  const insurance = document.getElementById("insurance").checked;

  if (!pickupDate || !returnDate || !location) {
    alert("Please fill all required fields");
    return;
  }

  // Calculate days and total
  const days = Math.ceil(
    (new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24)
  );
  const total = days * carData.price + (insurance ? 15 * days : 0);

  // Show success message
  document.getElementById("booking-success").classList.remove("hidden");
  document.getElementById("booking-success").innerHTML = `
                <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center mr-4">
                            <i class="fas fa-check text-green-600 dark:text-green-300 text-xl"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-xl">Booking Confirmed!</h3>
                            <p class="text-gray-600 dark:text-gray-300">We'll contact you shortly with confirmation details.</p>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">Car:</span>
                            <span class="font-bold">${carData.name}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">Pickup Date:</span>
                            <span class="font-bold">${pickupDate}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">Return Date:</span>
                            <span class="font-bold">${returnDate}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">Location:</span>
                            <span class="font-bold">${location}</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-gray-600 dark:text-gray-400">Total:</span>
                            <span class="font-bold text-primary text-xl">$${total}</span>
                        </div>
                    </div>
                    <button onclick="window.print()" class="w-full mt-6 px-4 py-3 bg-primary text-white rounded-lg font-bold hover:bg-red-700 transition-colors">
                        <i class="fas fa-print mr-2"></i> Print Confirmation
                    </button>
                </div>
            `;

  // Scroll to success message
  document
    .getElementById("booking-success")
    .scrollIntoView({ behavior: "smooth" });
}

// Toggle favorite
function toggleFavorite() {
  const heart = document.getElementById("favorite-heart");
  if (heart.classList.contains("far")) {
    heart.classList.remove("far");
    heart.classList.add("fas", "text-red-500");
    showNotification("Added to favorites!");
  } else {
    heart.classList.remove("fas", "text-red-500");
    heart.classList.add("far");
    showNotification("Removed from favorites");
  }
}

// Share car
function shareCar() {
  if (navigator.share) {
    navigator.share({
      title: carData.name,
      text: `Check out this ${carData.name} for rent at AutoElite!`,
      url: window.location.href,
    });
  } else {
    navigator.clipboard.writeText(window.location.href);
    showNotification("Link copied to clipboard!");
  }
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className =
    "fixed top-6 right-6 bg-gray-800 text-white px-6 py-4 rounded-xl shadow-2xl animate-slide-in-right z-50";
  notification.innerHTML = `
                <div class="flex items-center">
                    <i class="fas fa-check-circle text-green-400 text-xl mr-3"></i>
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

// Print page
function printPage() {
  window.print();
}
