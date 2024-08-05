const close_btn = document.querySelector(".close");
const nav = document.querySelector("nav");

close_btn.addEventListener("click", () => {
  nav.classList.toggle("show");
});
