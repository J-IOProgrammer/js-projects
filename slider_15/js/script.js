const imageBox = document.querySelector(".imageBox");
const slides = imageBox.getElementsByTagName("img");
let i = 0;

function goToNextSlide() {
  slides[i].classList.remove("active");
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
}

function goToPreviousSlide() {
  slides[i].classList.remove("active");
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.add("active");
}
