var namee = document.querySelector("#name");
var ids = document.querySelector("#ids");
var btnn = document.querySelector("#btn");
var container = document.querySelector("#div");
function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Click");
    var nameee = namee.value;
    var idss = ids.value;
    console.log(nameee);
    console.log(idss);
    var pa = document.createElement('p');
    pa.innerHTML += "\n       <p>Name: ".concat(nameee, "</p>\n       <p>IDS: ").concat(idss, "</p>\n  ");
    container.appendChild(pa);
    namee.value = "";
    ids.value = "";
}
btnn.addEventListener("click", handleFormSubmit);
