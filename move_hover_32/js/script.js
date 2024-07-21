const boxes = document.querySelector(".content").children;
const box_width = boxes[0].querySelector(".inner").offsetWidth;
const box_height = boxes[0].querySelector(".inner").offsetHeight;

const div_element = document.createElement("div");
div_element.style.position = "absolute";
div_element.style.width = box_width + "px";
div_element.style.height = box_height + "px";
div_element.style.backgroundColor = "yellow";
div_element.style.transition = "all 0.5s ease";

div_element.style.left = boxes[0].querySelector(".inner").offsetLeft + "px";
div_element.style.top = boxes[0].querySelector(".inner").offsetTop + "px";

document.querySelector(".grid-box").appendChild(div_element);

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    const x = this.offsetLeft;
    const y = this.offsetTop;
    div_element.style.left = x + "px";
    div_element.style.top = y + "px";
    div_element.style.width = this.offsetWidth + "px";
    div_element.style.height = this.offsetHeight + "px";
  });
}
