// Toggle sidebar for mobile view
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const main = document.querySelector(".main");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
  main.classList.toggle("expanded");
});
