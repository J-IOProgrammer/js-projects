const click_btn = document.querySelector(".click-btn");
const close_btn = document.querySelector(".close-btn");
const alert_box = document.querySelector(".alert-box");
let timer;

click_btn.addEventListener("click", function () {
  showAlertBox();
});

function showAlertBox() {
    alert_box.classList.remove('hide');
    alert_box.classList.add('show');
    if(alert_box.classList.contains('hidden')) {
        alert_box.classList.remove('hidden');
    }
    timer = setTimeout(() => {
        hideAlertBox();
    }, 5000);
}

function hideAlertBox() {
    alert_box.classList.remove('show');
    alert_box.classList.add('hide');
}