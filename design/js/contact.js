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

  // Initialize contact form
  initContactForm();

  // Initialize map
  initMap();

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

// Initialize contact form
function initContactForm() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitContactForm();
  });

  // Form validation
  const inputs = form.querySelectorAll("input, textarea, select");
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this);
    });
  });
}

// Validate field
function validateField(field) {
  const errorElement = document.getElementById(`${field.id}-error`);

  if (!field.value.trim()) {
    field.classList.add("border-red-500");
    if (errorElement) errorElement.textContent = "This field is required";
    return false;
  }

  // Email validation
  if (field.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      field.classList.add("border-red-500");
      if (errorElement) errorElement.textContent = "Please enter a valid email";
      return false;
    }
  }

  // Phone validation
  if (field.id === "phone") {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(field.value.replace(/\D/g, ""))) {
      field.classList.add("border-red-500");
      if (errorElement)
        errorElement.textContent = "Please enter a valid phone number";
      return false;
    }
  }

  field.classList.remove("border-red-500");
  if (errorElement) errorElement.textContent = "";
  return true;
}

// Submit contact form
function submitContactForm() {
  const form = document.getElementById("contact-form");
  const fields = ["name", "email", "phone", "subject", "message"];
  let isValid = true;

  // Validate all fields
  fields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (!validateField(field)) {
      isValid = false;
    }
  });

  if (!isValid) {
    showNotification("Please fill all required fields correctly", "error");
    return;
  }

  // Show loading
  const submitBtn = document.getElementById("submit-btn");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
  submitBtn.disabled = true;

  // Simulate API call
  setTimeout(() => {
    // Success message
    showNotification(
      "Thank you! Your message has been sent successfully.",
      "success"
    );

    // Reset form
    form.reset();

    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;

    // Show confirmation
    document.getElementById("confirmation").classList.remove("hidden");
    document
      .getElementById("confirmation")
      .scrollIntoView({ behavior: "smooth" });
  }, 1500);
}

// Initialize map
function initMap() {
  // This would be replaced with actual Google Maps API
  // For now, we'll use a static image with interactive markers
  const locations = [
    {
      id: 1,
      name: "Main Office",
      address: "123 Auto Street, Downtown",
      phone: "+1 (555) 123-4567",
      lat: 40.7128,
      lng: -74.006,
    },
    {
      id: 2,
      name: "Airport Branch",
      address: "Airport Terminal A, Gate 3",
      phone: "+1 (555) 123-4568",
      lat: 40.6413,
      lng: -73.7781,
    },
    {
      id: 3,
      name: "Northside",
      address: "456 North Avenue, Northside",
      phone: "+1 (555) 123-4569",
      lat: 40.7589,
      lng: -73.9851,
    },
  ];

  const mapContainer = document.getElementById("map-container");
  locations.forEach((location) => {
    const marker = document.createElement("div");
    marker.className =
      "absolute w-8 h-8 bg-primary rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform";
    marker.style.left = `${30 + Math.random() * 40}%`;
    marker.style.top = `${30 + Math.random() * 40}%`;
    marker.innerHTML =
      '<div class="w-full h-full rounded-full bg-primary border-2 border-white flex items-center justify-center"><i class="fas fa-map-marker-alt text-white"></i></div>';

    // Tooltip
    const tooltip = document.createElement("div");
    tooltip.className =
      "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block";
    tooltip.innerHTML = `
                    <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl min-w-64">
                        <h4 class="font-bold text-lg mb-2">${location.name}</h4>
                        <p class="text-gray-600 dark:text-gray-300 mb-1">${location.address}</p>
                        <p class="text-primary font-medium">${location.phone}</p>
                    </div>
                `;

    marker.appendChild(tooltip);
    marker.classList.add("group");

    marker.addEventListener("mouseenter", () => {
      tooltip.classList.remove("hidden");
    });

    marker.addEventListener("mouseleave", () => {
      tooltip.classList.add("hidden");
    });

    mapContainer.appendChild(marker);
  });
}

// Initialize FAQ
function initFAQ() {
  const faqData = [
    {
      question: "What are your business hours?",
      answer:
        "Our main office is open Monday to Friday from 8:00 AM to 8:00 PM, and Saturday to Sunday from 9:00 AM to 6:00 PM. For 24/7 emergency roadside assistance, call our support line.",
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

  const container = document.getElementById("faq-container");
  faqData.forEach((item, index) => {
    const faqItem = document.createElement("div");
    faqItem.className =
      "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg faq-item";
    faqItem.innerHTML = `
                    <button onclick="toggleFAQItem(${index})" class="w-full flex justify-between items-center">
                        <h3 class="text-lg font-bold text-left">${item.question}</h3>
                        <i id="faq-icon-${index}" class="fas fa-plus text-primary"></i>
                    </button>
                    <div id="faq-answer-${index}" class="hidden mt-4">
                        <p class="text-gray-600 dark:text-gray-300">${item.answer}</p>
                    </div>
                `;
    container.appendChild(faqItem);
  });
}

// Toggle FAQ item
function toggleFAQItem(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);

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

// Open chat widget
function openChat() {
  const chatWidget = document.getElementById("chat-widget");
  chatWidget.classList.remove("hidden");
}

function closeChat() {
  const chatWidget = document.getElementById("chat-widget");
  chatWidget.classList.add("hidden");
}

function sendChatMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();

  if (!message) return;

  const messagesContainer = document.getElementById("chat-messages");

  // User message
  const userMessage = document.createElement("div");
  userMessage.className = "flex justify-end mb-4";
  userMessage.innerHTML = `
                <div class="bg-primary text-white p-3 rounded-xl max-w-xs">
                    ${message}
                </div>
            `;
  messagesContainer.appendChild(userMessage);

  // Clear input
  input.value = "";

  // Auto reply after delay
  setTimeout(() => {
    const replies = [
      "Thanks for your message! How can I help you today?",
      "One of our agents will respond shortly. Is there anything specific you'd like to know?",
      "We're here to help! Could you provide more details about your inquiry?",
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];

    const botMessage = document.createElement("div");
    botMessage.className = "flex justify-start mb-4";
    botMessage.innerHTML = `
                    <div class="bg-gray-200 dark:bg-gray-700 p-3 rounded-xl max-w-xs">
                        <span class="font-bold text-primary">AutoElite Support:</span> ${reply}
                    </div>
                `;
    messagesContainer.appendChild(botMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 1000);

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
