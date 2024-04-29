const open = document.querySelector('#open');
const modalContainer = document.querySelector('.modal-container');
const clodeModal = document.querySelector('#close');

open.addEventListener('click' , function(){
    modalContainer.classList.add('show-modal');
})

clodeModal.addEventListener('click' , function(){
    modalContainer.classList.remove('show-modal');
})