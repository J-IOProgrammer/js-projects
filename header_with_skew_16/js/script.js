let skewed = document.querySelector(".angel");
window.addEventListener("scroll", function () {
  let value = -10 + this.window.scrollY / 65;
  skewed.style.transform = "skewY(" + value + "deg)";
});
