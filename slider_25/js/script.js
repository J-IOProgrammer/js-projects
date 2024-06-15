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

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalItems) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalItems - 1;
    }
    index--;
  }
  for (let i = 0; i < totalItems; i++) {
    items[i].classList.remove('active'); 
  }
  items[index].classList.add("active");
}
