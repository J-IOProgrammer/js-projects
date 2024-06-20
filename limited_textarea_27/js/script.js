const textarea = document.querySelector('#textarea');
const textarea_text_warning = document.querySelector('#textarea-warning');
let MAX_CHARS = 250;

textarea.addEventListener('input', () => {
    const total_chars = textarea.nodeValue.length;
})