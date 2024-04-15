const background = document.querySelector('#background');
window.addEventListener('scroll' , function(){
    background.style.opacity = 1 - +this.window.scrollY / 600;
});