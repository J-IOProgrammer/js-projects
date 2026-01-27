const selectAll = document.getElementById("select-all")
const selectionInputs = document.querySelectorAll("#Select")
const deleteAllBtn = document.getElementById("delete-all-btn")

selectAll.onclick = () => {
    if (selectAll.checked == true) {
        for (i = 0 ; i < selectionInputs.length ; i++) {
            selectionInputs[i].checked = true
        }
        deleteAllBtn.classList.add('active')
    } else {
        for (i = 0 ; i < selectionInputs.length ; i++) {
            selectionInputs[i].checked = false
        }
        deleteAllBtn.classList.remove('active')
    }
}