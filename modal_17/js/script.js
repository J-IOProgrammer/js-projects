const open = document.querySelector('#open');
const modalContainer = document.querySelector('.modal-container');

open.addEventListener('click' , function(){
    modalContainer.classList.add('show-modal');
})