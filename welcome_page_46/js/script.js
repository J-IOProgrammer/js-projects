const intro = document.querySelector('.intro')

window.addEventListener('load', function() {
    this.setTimeout(()=> {
        intro.style.top = '-100vh'
    }, 2000)
})