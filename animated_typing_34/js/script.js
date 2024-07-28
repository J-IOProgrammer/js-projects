const texts = ["WordPress Developer", "Java Developer", "PHP Programmer"];
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
})();
