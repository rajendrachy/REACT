
const divss = document.querySelector("#div") as HTMLDivElement;
const btnss = document.querySelector("#btn") as HTMLButtonElement;
const closeBtn = document.querySelector("#close") as HTMLButtonElement;

function openModel(e: Event) {
console.log("OpenModel");
divss.style.display = "block";
}



function closeModel(e: Event) {
console.log("CloseModel");
divss.style.display = "none";
divss.style.backgroundColor = "red";
 btnss.style.backgroundColor = 'green';
}

btnss.addEventListener("click", openModel);
closeBtn.addEventListener("click", closeModel);




