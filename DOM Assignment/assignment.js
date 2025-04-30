"use strict";
const names = document.querySelector("#task");
const btn = document.querySelector("#btn");
const div = document.querySelector("#container");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const ul = document.createElement("ul");
    //  const li = document.createElement("li");
    ul.innerHTML = `
 <li> Task: ${names.value} </li>
 `;
    //
    div.appendChild(ul);
    names.value = "";
});
