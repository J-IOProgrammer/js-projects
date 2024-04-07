const progress = document.querySelector('.progress-bar');
window.addEventListener('scroll' , function(){
    const winScroll = this.window.scrollY;
    const height = this.document.documentElement.scrollHeight - this.window.innerHeight;
    const scrolled = (winScroll/height) * 100;
    progress.style.width = `${scrolled}%`;
});