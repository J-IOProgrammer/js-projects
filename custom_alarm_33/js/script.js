const click_btn = document.querySelector(".click-btn");
const close_btn = document.querySelector(".close-btn");
const alert_box = document.querySelector(".alert-box");

click_btn.addEventListener("click", function () {
  showAlertBox();
});

function showAlertBox() {
    if(alert_box.classList.contains('hidden')) {
        alert_box.classList.remove('hidden');
    }
}
