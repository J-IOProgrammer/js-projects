const profileImg = document.querySelector('img')
const socialIcons = document.querySelector('.icon')

profileImg.onclick = () => {
    profileImg.classList.toggle('active')
    socialIcons.classList.toggle('hide')
}