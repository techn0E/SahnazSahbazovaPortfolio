const languageButtons = document.querySelectorAll(".lang");
const translatable = document.querySelectorAll("[data-en][data-az]");
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.body.classList.toggle("lang-az", lang === "az");
  translatable.forEach((el) => {
    el.textContent = el.dataset[lang];
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.title = lang === "az"
    ? "Şahnaz Şahbazova — Akademik Portfolio"
    : "Şahnaz Şahbazova — Academic Portfolio";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
