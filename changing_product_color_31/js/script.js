function changeImage(clicked_image) {
    const product_images = document.querySelector('.img-thumb').children;

    for(let i = 0 ; i < product_images.length ; i++){
        product_images[i].classList.remove('active');
    }

    clicked_image.classList.add('active');

    document.querySelector('.img-main-product').src = clicked_image.children[0].src;
}