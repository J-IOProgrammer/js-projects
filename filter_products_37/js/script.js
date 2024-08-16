const indicator = document.querySelector(".indicator").children;
const main = document.querySelector(".items").children;

for (let i = 0; i < indicator.length; i++) {
  indicator[i].onclick = function () {
    for (let j = 0; j < indicator.length; j++) {
      indicator[j].classList.remove("active");
    }
    this.classList.add("active");
    const displayItems = this.getAttribute("data-filter");
    for (let k = 0; k < main.length; k++) {
      main[k].style.display = "none";
      if(main[k].getAttribute('data-category') == displayItems || displayItems == 'all'){
        main[k].style.display = "block";
      }
    }
  };
}
