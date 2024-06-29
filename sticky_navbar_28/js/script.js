let header = document.querySelector(".header");
let sticky = header.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
