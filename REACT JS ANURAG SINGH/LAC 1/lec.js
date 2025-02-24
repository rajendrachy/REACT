let cont1 = document.querySelector(".container1");
let cont2 = document.querySelector(".container2");
let input = document.querySelector("#in");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    cont2.appendChild(input);
    cont2.style.backgroundColor = "red";
});

let bt = document.querySelector("#bt");

bt.addEventListener("click", function () {
    cont1.append(input);
});


