"use strict";
const EnterVal = document.querySelector("#enterValue");
const error = document.querySelector("#errorMsg");
function controlEnterVal(e) {
    const val = EnterVal.value;
    console.log(EnterVal.value);
    const isNUmeric = /^[0-9]*$/.test(val);
    if (!isNUmeric) {
        error.textContent = "please enter digit only (0-9)";
    }
    else {
        error.textContent = "";
    }
}
EnterVal.addEventListener('input', controlEnterVal);



