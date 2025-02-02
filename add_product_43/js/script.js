const notification = document.querySelector("h1");
const select = document.querySelector(".select");
const buttons = document.getElementsByTagName("button");

for (button of buttons) {
  button.addEventListener("click", (event) => {
    const add = Number(notification.getAttribute("data-count") || 0);
    notification.setAttribute("data-count", add + 1);
    notification.classList.add("zero");

    let parent = event.target.parentNode;
    let clone = parent.cloneNode(true);
    select.appendChild(clone);
    if (clone) {
      notification.onclick = () => {
        select.classList.toggle('display');
      };
    }
  });
}
