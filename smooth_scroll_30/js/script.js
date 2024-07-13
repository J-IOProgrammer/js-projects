const sections = document.querySelectorAll('section');
const li_tags = document.querySelectorAll('nav .container ul li');
let currentId;

window.addEventListener('scroll', function(){
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(this.scrollY >= sectionTop) {
            currentId = section.getAttribute('id');
        }
    })
})