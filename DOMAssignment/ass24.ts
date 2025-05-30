const namee = document.querySelector("#name") as HTMLInputElement;
const ids = document.querySelector("#ids") as HTMLInputElement;
const btnn = document.querySelector("#btn") as HTMLButtonElement;

const container = document.querySelector("#div") as HTMLDivElement;


function handleFormSubmit(e: Event) {
  e.preventDefault();
  console.log("Click");

  const nameee = namee.value;
  const idss = ids.value;
  console.log(nameee);
console.log(idss);


  const pa = document.createElement('p');

  pa.innerHTML += `
       <p>Name: ${nameee}</p>
       <p>IDS: ${idss}</p>
  `;
  container.appendChild(pa);
namee.value = "";
ids.value = "";
}
btnn.addEventListener("click", handleFormSubmit);
