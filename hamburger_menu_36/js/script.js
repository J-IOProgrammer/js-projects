const close_btn = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

close_btn.addEventListener("click", () => {
  close_btn.classList.toggle("close");
  nav.classList.toggle("show");
});
