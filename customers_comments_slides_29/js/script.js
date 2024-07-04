const sliders = document.querySelector(".slider").children;
const indicator = document.querySelector(".slide-indicator").children;

for (i = 0; i < indicator.length; i++) {
  indicator[i].addEventListener("click", function () {
    this.classList.add("active");
  });
}
