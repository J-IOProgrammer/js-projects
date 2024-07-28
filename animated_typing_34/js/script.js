const texts = ["PHP Programmer", "WordPress Developer", "Java Developer"];
let count = 0;
let index = 0;
let current_text = "";
let letter = "";

// This is a self invoke function
(function type() {
  if (count === texts.length) {
    count = 0;
  }
  current_text = texts[count];
  letter = current_text.slice(0, ++index);

  document.querySelector(".type").textContent = letter;

  if (letter.length === current_text.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 300);
})();
