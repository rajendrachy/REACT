const names = document.querySelector("#task") as HTMLInputElement;
const btn = document.querySelector("#btn") as HTMLButtonElement;
const div = document.querySelector("#container") as HTMLDivElement;


btn.addEventListener("click", (e: Event) => {
 e.preventDefault();

 const ul = document.createElement("ul");
//  const li = document.createElement("li");

 ul.innerHTML = `
 <li> Task: ${names.value} </li>
 `;
//
 div.appendChild(ul);
 names.value = "";

})


