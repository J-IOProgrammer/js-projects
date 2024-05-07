const accordion = document.querySelectorAll(".accordion-title");

accordion.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle('active');
  });
});
