// ===== MOBILE NAV TOGGLE =====
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.querySelector(".mobile-menu-close");
  const mobileLinks = document.querySelectorAll(".mobile-nav a");

  if (!navToggle || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", openMenu);
  mobileClose.addEventListener("click", closeMenu);

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });
});


// ===== THEME ACCORDIONS (PUBLICATIONS) =====
document.addEventListener("DOMContentLoaded", () => {
  const themeToggles = document.querySelectorAll(".theme-toggle");

  themeToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.closest(".theme");
      theme.classList.toggle("open");
    });
  });
});