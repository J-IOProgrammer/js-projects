const header = this.document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle('stick' , this.window.scrollY > 0);
});
