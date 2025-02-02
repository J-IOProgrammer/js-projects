const notification = document.querySelector("h1");
const select = document.querySelector(".select");
const buttons = document.getElementsByTagName("button");

for (button of buttons) {
  button.addEventListener("click", () => {
    const add = Number(notification.getAttribute("data-count") || 0);
    notification.setAttribute("data-count", add + 1);
  });
}
