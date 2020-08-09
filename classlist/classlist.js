var content = document.querySelector(".content");
var addBtn = document.querySelector("#add");
var removeBtn = document.querySelector("#remove");
var toggle1Btn = document.querySelector("#toggle1");
var toggle2Btn = document.querySelector("#toggle2");

addBtn.onclick = function () {
    if (!content.classList.contains("active")) {
        content.classList.add("active");
    }
}

removeBtn.onclick = function () {
    if (content.classList.contains("active")) {
        content.classList.remove("active");
    }
}

function toggle() {
    if (content.classList.contains("active")) {
        content.classList.remove("active");
    } else {
        content.classList.add("active");
    }
}

toggle1Btn.onclick = toggle;
toggle2Btn.onclick = toggle;