
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  function closeMenu() {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}
