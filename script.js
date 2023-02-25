const hamburgerBtn = document.querySelector("[data-mobile-menu-btn]");
const mobileMenu = document.querySelector("[data-mobile-nav]");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  hamburgerBtn.classList.toggle("active");
  console.log(mobileMenu);
});
