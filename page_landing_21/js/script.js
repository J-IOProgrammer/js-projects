const open_button = document.querySelector("#open");
const close_button = document.querySelector("#close");
const container = document.querySelector(".container");

open_button.addEventListener("click", function () {
  container.classList.add("show-nav");
});

close_button.addEventListener("click", function () {
  container.classList.remove("show-nav");
});
