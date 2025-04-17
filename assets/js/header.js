document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  const closeMenu = () => {
    nav.classList.remove("active");
    menuToggle.classList.remove("open");
    document.body.style.overflow = "";
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isActive = nav.classList.toggle("active");
    menuToggle.classList.toggle("open", isActive);
    document.body.style.overflow = isActive ? "hidden" : "";
    menuToggle.setAttribute("aria-expanded", isActive.toString());
  });

  // Fecha ao clicar fora do menu
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      closeMenu();
    }
  });

  // Fecha ao clicar em qualquer link
  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Acessibilidade: fecha com tecla Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
});
