let items = document.querySelector(".slider-item").children;
let nextSlide = document.querySelector(".right-slide");
let backSlide = document.querySelector(".left-slide");

nextSlide.onclick = function () {
  next();
};

backSlide.onclick = function () {
  next();
};
