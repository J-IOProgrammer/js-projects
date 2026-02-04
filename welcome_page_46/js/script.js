const intro = document.querySelector('.intro')
const logos = document.querySelectorAll('.logo')

window.addEventListener('load', function() {

    this.setTimeout(()=> {
        logos.forEach(logo => {
            this.setTimeout(()=> {
                logo.classList.add('active')
            }, 400)
        })
    })

    this.setTimeout(()=> {
        logo.forEach(logo => {
            this.setTimeout(()=> {
                logo.classList.remove('active')
                logo.classList.add('fade')
            })
        })
    }, 2000)

    this.setTimeout(()=> {
        intro.style.top = '-100vh'
    }, 2000)
})