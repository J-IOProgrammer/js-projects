const menu_open = document.querySelector('.menu-open');
const menu_close = document.querySelector('.menu-close');
const layer = document.querySelector('.layer-1');

menu_open.onclick = () => {
    layer.classList.add('check');
}

menu_close.onclick = () => {
    layer.classList.remove('check');
}