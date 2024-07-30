const input_btn = document.querySelector("#input-file");
const image_preview_div = document.querySelector("#image-preview");
const uploaded_image = image_preview_div.querySelector(".uploaded-image");
const text_prev = image_preview_div.querySelector(".text-prev");

input_btn.addEventListener("change", function () {
    const file = this.files[0];
});
