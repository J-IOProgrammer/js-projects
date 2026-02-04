const intro = document.querySelector('.intro')
const logos = document.querySelectorAll('.logo')

window.addEventListener('load', function() {

    this.setTimeout(()=> {
        logos.forEach(logo => {
            this.setTimeout(()=> {
                logo.classList.add('active')
            })
        })
    })

    this.setTimeout(()=> {
        intro.style.top = '-100vh'
    }, 2000)
})