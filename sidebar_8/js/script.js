const btn = document.querySelector('.btn');
const sidebar = document.querySelector('.sidebar');
btn.addEventListener('click' , function() {
    sidebar.classList.toggle('active');
    sidebar.style.visibility = 'visible';
});