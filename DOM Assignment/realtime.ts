const EnterVal = document.querySelector("#enterValue") as HTMLInputElement;
const error = document.querySelector("#errorMsg") as HTMLDivElement;


function controlEnterVal(e: Event): void {
     const val = EnterVal.value;
     console.log(EnterVal.value);


     const isNUmeric = /^[0-9]*$/.test(val);


     if(!isNUmeric) {
        error.textContent = "please enter digit only (0-9)";
     } else {
        error.textContent = "";
     }
}

EnterVal.addEventListener('input', controlEnterVal);






