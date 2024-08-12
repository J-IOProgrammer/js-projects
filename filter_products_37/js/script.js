const indicator = document.querySelector(".indicator").children;
const main = document.querySelector(".items").children;

for (let i = 0; i < indicator.length; i++) {
  indicator[i].onclick = function () {
    for (let j = 0; j < indicator.length; j++) {
      indicator[j].classList.remove("active");
    }
    this.classList.add("active");
  };
}
