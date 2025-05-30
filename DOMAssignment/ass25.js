var divss = document.querySelector("#div");
var btnss = document.querySelector("#btn");
var closeBtn = document.querySelector("#close");
function openModel(e) {
    console.log("OpenModel");
    divss.style.display = "block";
}
function closeModel(e) {
    console.log("CloseModel");
    divss.style.display = "none";
    divss.style.backgroundColor = "red";
    btnss.style.backgroundColor = 'green';
}
btnss.addEventListener("click", openModel);
closeBtn.addEventListener("click", closeModel);
