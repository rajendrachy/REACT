
// -------1---------------
// const heading = document.querySelector("#heading") as HTMLHeadingElement;
// const btn = document.querySelector("#btn") as HTMLButtonElement;

// btn.addEventListener('click', () => {
//    heading.innerText = "Rajendra";
//    heading.style.color = "blue";
//    heading.style.backgroundColor = "gray";
// });















//----------Input and Form Handling----------------
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form") as HTMLFormElement;
    const username = document.getElementById("username") as HTMLInputElement;
    const error = document.getElementById("error") as HTMLDivElement;
  
    form.addEventListener("submit", (e: SubmitEvent) => {
      e.preventDefault();
  
      if (username.value.trim().length < 3) {
        error.textContent = "Name must be at least 3 characters!";
      } else {
        error.textContent = "";
        alert(`Hello, ${username.value}!`);
      }
    });
  });
  
  
  