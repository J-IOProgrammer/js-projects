let li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
    li[i].onclick = (e)=> {
        e.target.className = "active";
    }
}
