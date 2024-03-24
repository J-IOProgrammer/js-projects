var Person = {
  name: "fatemeh",
  family: "mirfotohi",
  fullname: function () {
    return this.name + " " + this.family;
  },
};
function changeText() {
  document.getElementById("result-tag").innerHTML = "Text is changed";
}

function changeInputValue() {
  document.getElementById("show-text-input-value").innerHTML = Math.random();
}
