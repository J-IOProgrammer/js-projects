const sliders = document.querySelector(".slider").children;
const indicator = document.querySelector(".slide-indicator").children;

for (i = 0; i < indicator.length; i++) {
  indicator[i].addEventListener("click", function () {
    for (j = 0; j < indicator.length; j++) {
      indicator[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}
