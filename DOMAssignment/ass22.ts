
const para = document.querySelector("#greeting") as HTMLParagraphElement;

function updataGreeting(text: string) {
  para.innerText = `My name is : ${text}`;
  para.style.backgroundColor = "green";
}

updataGreeting('Rajendra Chaudhary');
