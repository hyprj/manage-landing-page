new Glide(".glide").mount();

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".nav");
const header = document.querySelector(".header");

navToggle.addEventListener("click", () => {
  navToggle.hasAttribute("data-visible")
    ? navToggle.setAttribute("data-visible", false)
    : navToggle.setAttribute("data-visible", true);
  primaryNav.toggleAttribute("data-visible");
  header.toggleAttribute("data-overlay");
});
