const divs = document.querySelector("#box");
const btns = document.querySelector("#btn") as HTMLButtonElement;

function toggleClass(text: string): void {

btns.addEventListener("click", (e: Event) => {
  btns.innerText = `${text}`;
    btns.style.backgroundColor = "red";
    
})
   
}
toggleClass("Active");
