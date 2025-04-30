const select = document.querySelector("#countrySelect") as HTMLSelectElement;
const p = document.querySelector("#selectCountry") as HTMLParagraphElement;


select.addEventListener('change', () => {
    console.log("Hello");


    if(select) {
        p.innerHTML = `The Selected Country is : ${select.value}`
        console.log(select.value)
    }
    

})






