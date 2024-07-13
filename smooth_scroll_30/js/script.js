const sections = document.querySelectorAll("section");
const li_tags = document.querySelectorAll("nav .container ul li");
let currentId;

window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (this.scrollY >= sectionTop - sectionHeight / 3) {
      currentId = section.getAttribute("id");
    }
  });

  li_tags.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(currentId)) {
      li.classList.add("active");
    }
  });
});
