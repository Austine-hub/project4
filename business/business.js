// business.js

// === DATA: Ajanja Divisions ===
const divisions = [
  {
    id: "life-sciences",
    icon: "🧬",
    title: "Life Sciences",
    desc: "Ajanja Life Sciences International — advancing biotechnology, pharmaceuticals, nutraceuticals.",
    items: [
      "Ajanja BioGenics — Personalized medicine & genetic research",
      "Ajanja MedSupply — Smart medical logistics & devices"
    ]
  },
  {
    id: "energy",
    icon: "⚡",
    title: "Energy & Environment",
    desc: "Ajanja Renewable Energy Consortium — powering the world with sustainable innovations.",
    items: [
      "Ajanja SolarGrid — AI-optimized solar microgrids",
      "Ajanja GreenFuel — Biofuels & hydrogen R&D"
    ]
  },
  {
    id: "logistics",
    icon: "🚚",
    title: "Logistics & Infrastructure",
    desc: "Ajanja Transport & Logistics Holdings — accelerating global connectivity.",
    items: [
      "Ajanja SkyPort — Drone-based air freight systems",
      "Ajanja InfraTech — Smart cities & modular construction"
    ]
  },
  {
    id: "finance",
    icon: "💰",
    title: "Finance & Investment",
    desc: "Ajanja Capital & Banking Group — next-gen fintech for Africa and beyond.",
    items: [
      "Ajanja Pay — Blockchain-secured digital banking",
      "Ajanja Equity — Venture funding for African startups"
    ]
  },
  {
    id: "defense",
    icon: "🛡️",
    title: "Defense & Aerospace",
    desc: "Ajanja Defense & Aerospace Systems — security, aviation, space tech.",
    items: [
      "Ajanja Orbitals — Low-orbit satellite systems",
      "Ajanja SecureNet — Cyberdefense AI platforms"
    ]
  },
  {
    id: "technology",
    icon: "💻",
    title: "Technology",
    desc: "Ajanja Technology Solutions Group — digital transformation experts.",
    items: [
      "Ajanja QuantumX — Future-focused quantum computing",
      "Ajanja GridAI — Infrastructure AI for big data"
    ]
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "Healthcare",
    desc: "Ajanja Healthcare Services International — reimagining care delivery.",
    items: [
      "Ajanja TeleMed — Cross-border virtual clinics",
      "Ajanja Wellness — Lifestyle & longevity programs"
    ]
  },
  {
    id: "real-estate",
    icon: "🏛️",
    title: "Real Estate",
    desc: "Ajanja Real Estate & Infrastructure Development — sustainable megaprojects.",
    items: [
      "Ajanja SmartLiving — Tech-powered green housing",
      "Ajanja UrbanX — City-scale eco-redevelopment"
    ]
  },
  {
    id: "telecom",
    icon: "📱",
    title: "Telecommunications",
    desc: "Ajanja Global Telecommunications — connecting the last mile.",
    items: [
      "Ajanja Stream — 5G & rural broadband",
      "Ajanja Connect — Satellite internet ecosystems"
    ]
  },
  {
    id: "industry",
    icon: "🔨",
    title: "Industrial Manufacturing",
    desc: "Ajanja Industrial Manufacturing Corporation — precision manufacturing & automation.",
    items: [
      "Ajanja RoboFab — Autonomous factory systems",
      "Ajanja AutoCore — Next-gen electric mobility parts"
    ]
  }
];

// === FUNCTION: Render Divisions to Card Grid ===
function renderDivisions() {
  const cardGrid = document.getElementById("card-grid");

  divisions.forEach(({ id, icon, title, desc, items }) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="division-category" id="${id}">
        <h3>${icon} ${title}</h3>
        <p>${desc}</p>
        <ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    `;
    cardGrid.appendChild(card);
  });
}

// === FUNCTION: Toggle Mobile Menu ===
function setupMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// === FUNCTION: Toggle Dark Mode ===
function setupDarkModeToggle() {
  const darkToggle = document.getElementById("toggle-dark");
  darkToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
}

// === INITIALIZE EVERYTHING ===
document.addEventListener("DOMContentLoaded", () => {
  renderDivisions();
  setupMobileMenu();
  setupDarkModeToggle();
});
