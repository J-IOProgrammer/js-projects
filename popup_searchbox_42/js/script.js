const search_btn = document.querySelector(".search-icon");
const overlay = document.querySelector(".search-overlay");
const search_poup = document.querySelector(".search-popup");

search_btn.addEventListener("click", function () {
  overlay.classList.add("active");
  search_poup.classList.add("active");
});

overlay.addEventListener("click", function () {
    overlay.classList.remove("active");
  search_poup.classList.remove("active");
});
