const textarea = document.querySelector("#textarea");
const textarea_text_warning = document.querySelector("#textarea-warning");
let MAX_CHARS = 250;

textarea.addEventListener("input", () => {
  const remaining_word = MAX_CHARS - textarea.value.length;
  
  const remaning_color = remaining_word < 25 ? 'red' : null;
  console.log(remaning_color);
  textarea_text_warning.textContent = `${remaining_word} characters`;
  textarea_text_warning.style.color = remaning_color;

  if (remaining_word === 0) {
    textarea_text_warning.textContent = `You are not allowed to write much more!`;
  }
});
