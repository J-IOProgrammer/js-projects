const textarea = document.querySelector("#textarea");
const textarea_text_warning = document.querySelector("#textarea-warning");
let MAX_CHARS = 250;

textarea.addEventListener("input", () => {
  const remaining_word = MAX_CHARS - textarea.value.length;
  if (remaining_word === 0) {
    textarea_text_warning.textContent = `You are not allowed to write much more! ${remaining_word}`;
  }
});