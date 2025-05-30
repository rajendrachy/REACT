var divs = document.querySelector("#box");
var btns = document.querySelector("#btn");
function toggleClass(text) {
    btns.addEventListener("click", function (e) {
        btns.innerText = "".concat(text);
        btns.style.backgroundColor = "red";
    });
}
toggleClass("Active");
