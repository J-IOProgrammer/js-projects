const accordion = document.querySelectorAll(".accordion-title");

accordion.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle('active');
    const content = item.nextElementSibling; // The brother of item
    if(content.style.height) {
        content.style.height = null;
    } else {
        content.style.height = content.scrollHeight + 'px'; // based on the content height
        
    }
  });
});
