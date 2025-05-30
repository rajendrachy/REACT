var para = document.querySelector("#greeting");
function updataGreeting(text) {
    para.innerText = "My name is : ".concat(text);
    para.style.backgroundColor = "green";
}
updataGreeting('Rajendra Chaudhary');
