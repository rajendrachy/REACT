"use strict";
// //----------Input and Form Handling----------------
// const nameInput = document.querySelector("#name") as HTMLInputElement;
// const idInput = document.querySelector("#ids") as HTMLInputElement;
// const btn = document.querySelector("#btn") as HTMLButtonElement;
// const container = document.querySelector("#contianer") as HTMLDivElement;
// btn.addEventListener("click", (e: Event) => {
//   e.preventDefault();
//   const p = document.createElement("p");
//   p.innerHTML = `Name: ${nameInput.value} <br/> <br/> ID: ${idInput.value}`;
//   container.appendChild(p);
//   nameInput.value = "";
//   idInput.value = "";
// });
//--------------Practicing------------------
// const names = document.querySelector("#name") as HTMLInputElement;
// const id = document.querySelector("#ids") as HTMLInputElement;
// const btn = document.querySelector("#btn") as HTMLButtonElement;
// // const container = document.querySelector("#container") as HTMLDivElement;
// const Tbdy = document.querySelector("#t-bdy") as HTMLTableSectionElement;
// const options = document.querySelector("#options") as HTMLSelectElement;
// btn.addEventListener('click', (e:Event) => {
//    e.preventDefault();
//    const selectedOption = (document.querySelector("#options") as HTMLSelectElement).value;
//    Tbdy.innerHTML += `
//    <tr> 
//      <td>${names.value}</td>
//      <td>${id.value}</td>
//       <td>${selectedOption}</td>
//    </tr>
// `;
// names.value = "";
// id.value = "";
// })
//------------practicing---------
// const names = document.querySelector("#name") as HTMLInputElement;
// const ids = document.querySelector("#ids") as HTMLInputElement;
// const options = document.querySelector("#sel") as HTMLSelectElement;
// const btn = document.querySelector("#btn") as HTMLButtonElement;
// const tBody = document.querySelector("#t-bdy") as HTMLTableSectionElement;
// const check = document.querySelector("#check") as HTMLInputElement;
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   tBody.innerHTML += `
//        <tr>
//          <td>${names.value}</td>
//          <td>${ids.value}</td>
//          <td>${options.value}</td>
//          <td>${check.checked ? "Yes": "No"}</td>
//        </tr>
//   `;
//   names.value = "";
//   ids.value = "";
//   options.value = "";
//   check.checked = false;
// });
