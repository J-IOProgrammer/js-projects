let items = document.querySelector(".slider-item").children;
let nextSlide = document.querySelector(".right-slide");
let backSlide = document.querySelector(".left-slide");
let totalItems = items.length;
let index = 0;

nextSlide.onclick = function () {
  next("next");
};

backSlide.onclick = function () {
  next("back");
};

function next(direction) {}
