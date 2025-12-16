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

  // Initialize counters
  animateCounters();

  // Initialize team slider
  initTeamSlider();

  // Initialize timeline
  initTimeline();
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

// Animate counters
function animateCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target + "+";
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 16);
  });
}

// Team slider
function initTeamSlider() {
  const teamMembers = [
    {
      name: "Michael Rodriguez",
      position: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "20+ years in automotive industry",
      social: ["linkedin", "twitter"],
    },
    {
      name: "Sarah Chen",
      position: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w-400&q=80",
      bio: "Expert in fleet management",
      social: ["linkedin", "instagram"],
    },
    {
      name: "James Wilson",
      position: "Head of Service",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Master mechanic with 15 years experience",
      social: ["linkedin"],
    },
    {
      name: "Emma Thompson",
      position: "Customer Experience",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Dedicated to exceptional service",
      social: ["linkedin", "twitter", "instagram"],
    },
  ];

  const container = document.getElementById("team-container");
  teamMembers.forEach((member, index) => {
    const memberDiv = document.createElement("div");
    memberDiv.className =
      "team-member bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl animate-slide-up";
    memberDiv.style.animationDelay = `${index * 0.1}s`;
    memberDiv.innerHTML = `
                    <div class="relative h-64 overflow-hidden">
                        <img src="${member.image}" alt="${
      member.name
    }" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                            <div>
                                <h4 class="text-white text-xl font-bold">${
                                  member.name
                                }</h4>
                                <p class="text-primary font-medium">${
                                  member.position
                                }</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <p class="text-gray-600 dark:text-gray-300 mb-4">${
                          member.bio
                        }</p>
                        <div class="flex space-x-3">
                            ${member.social
                              .map(
                                (social) => `
                                <a href="#" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                    <i class="fab fa-${social}"></i>
                                </a>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                `;
    container.appendChild(memberDiv);
  });
}

// Initialize timeline
function initTimeline() {
  const timelineData = [
    {
      year: "2010",
      title: "Company Founded",
      desc: "Started with 5 cars in downtown location",
    },
    {
      year: "2013",
      title: "Expansion",
      desc: "Opened 3 new locations across the city",
    },
    {
      year: "2016",
      title: "Fleet Upgrade",
      desc: "Added luxury and electric vehicles",
    },
    {
      year: "2019",
      title: "Mobile App Launch",
      desc: "Released award-winning booking app",
    },
    {
      year: "2022",
      title: "International",
      desc: "Expanded to 3 countries",
    },
    {
      year: "2023",
      title: "Green Initiative",
      desc: "50% electric fleet conversion",
    },
  ];

  const container = document.getElementById("timeline-container");
  timelineData.forEach((item, index) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = `timeline-item ${
      index % 2 === 0 ? "md:text-right" : "md:text-left md:ml-auto"
    } mb-12 md:w-1/2 animate-slide-up`;
    timelineItem.style.animationDelay = `${index * 0.1}s`;
    timelineItem.innerHTML = `
                    <div class="relative">
                        <div class="absolute top-0 ${
                          index % 2 === 0 ? "md:-right-4" : "md:-left-4"
                        } w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
                        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                            <div class="text-primary font-bold text-lg mb-2">${
                              item.year
                            }</div>
                            <h4 class="text-xl font-bold mb-2">${
                              item.title
                            }</h4>
                            <p class="text-gray-600 dark:text-gray-300">${
                              item.desc
                            }</p>
                        </div>
                    </div>
                `;
    container.appendChild(timelineItem);
  });
}

// FAQ toggle
function toggleFAQ(id) {
  const answer = document.getElementById(`faq-answer-${id}`);
  const icon = document.getElementById(`faq-icon-${id}`);

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
