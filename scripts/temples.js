const menuButton = document.getElementById("menu");
const menu = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  menu.classList.toggle("open");
});
