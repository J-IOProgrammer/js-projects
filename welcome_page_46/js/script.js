const intro = document.querySelector('.intro')
const logos = document.querySelectorAll('.logo')

window.addEventListener('load', function() {

    this.setTimeout(()=> {
        logos.forEach((logo, index) => {
            this.setTimeout(()=> {
                logo.classList.add('active')
            }, (index+1)*400)
        })
    })

    this.setTimeout(()=> {
        logos.forEach((logo, index) => {
            this.setTimeout(()=> {
                logo.classList.remove('active')
                logo.classList.add('fade')
            }, (index+1)*50)
        })
    }, 2000)

    this.setTimeout(()=> {
        intro.style.top = '-100vh'
    }, 2400)
})