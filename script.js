// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const yOffset = -56; // header height adjustment
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

// Theme toggle (dark / light) with localStorage
const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle?.querySelector(".theme-icon");

const THEME_KEY = "ansh-portfolio-theme";

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light");
    if (themeIcon) themeIcon.textContent = "☀️";
  } else {
    document.body.classList.remove("light");
    if (themeIcon) themeIcon.textContent = "🌙";
  }
}

// Initialize theme
const savedTheme = window.localStorage.getItem(THEME_KEY);
applyTheme(savedTheme === "light" ? "light" : "dark");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light");
    const nextTheme = isLight ? "dark" : "light";
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = String(new Date().getFullYear());
}

// Social links
const LINKEDIN_URL = "https://www.linkedin.com/in/ansh-gupta-b32ab527a";
const GITHUB_URL = "https://github.com/Ansh-Gupta-16?tab=repositories";

const linkedinEl = document.getElementById("linkedinLink");
const githubEl = document.getElementById("githubLink");

if (linkedinEl && LINKEDIN_URL) {
  linkedinEl.href = LINKEDIN_URL;
}

if (githubEl && GITHUB_URL) {
  githubEl.href = GITHUB_URL;
}

