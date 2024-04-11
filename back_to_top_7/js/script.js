const goTop = document.querySelector(".go-top");
window.addEventListener('scroll',function() {
    if (this.window.scrollY > 250) {
        goTop.classList.add('active');
    } else {
        goTop.classList.remove('active');
    }
});