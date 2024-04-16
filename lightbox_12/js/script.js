const imageBox = document.querySelectorAll('.imageBox');

/* imageBox.addEventListener('click' , function(){
    imageBox.classList.toggle('active');
}); */

imageBox.forEach(box => box.addEventListener('click' , function(){
    box.classList.toggle('active');
}))