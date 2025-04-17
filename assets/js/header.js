document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");
  
    menu.addEventListener("click", () => {
      nav.classList.toggle("active");
      document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
    });
  });
  