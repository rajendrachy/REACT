"use strict";
const select = document.querySelector("#countrySelect");
const p = document.querySelector("#selectCountry");
select.addEventListener('change', () => {
    console.log("Hello");
    if (select) {
        p.innerHTML = `The Selected Country is : ${select.value}`;
        console.log(select.value);
    }
});
