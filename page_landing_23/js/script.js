function changeImage(address) {
  document.querySelector(".flower").src = address;
}

function changeBackgroundColor(color) {
  const section = document.querySelector('.section');
  section.style.background = color;
}
