const input_btn = document.querySelector("#input-file");
const image_preview_div = document.querySelector("#image-preview-div");
const uploaded_image = image_preview_div.querySelector(".uploaded-image");
const text_prev = image_preview_div.querySelector(".text-prev");

input_btn.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    text_prev.style.display = "none";
    uploaded_image.style.display = "block";

    reader.addEventListener("load", function () {
      uploaded_image.setAttribute("src", this.result);
    });

    reader.readAsDataURL(file);
  } else {
    text_prev.style.display = null;
    uploaded_image.style.display = null;
    uploaded_image.setAttribute("src","");
  }

});
