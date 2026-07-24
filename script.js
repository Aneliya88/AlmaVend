const menuButton = document.querySelector(".mobile-menu-button");
const navigation = document.querySelector(".main-navigation");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("menu-open");
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("menu-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});