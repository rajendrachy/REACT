// Promises are the special type of the Objects
//------------------Creating a Promises---------------------------
// const p = new Promise() // error

// ----------------So create a function or pass the function--------------
// const p = new Promise((resolve, reject) => {
//      resolve({name:"Rajendra Chaudhary"})
//     reject('promises is rejected')

// })



//--------------setTimeout--------------------------

const resolvebtn = document.querySelector("#resolve-btn");
const rejectebtn = document.querySelector("#reject-btn");

const p = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve("Rajendra chaudhary");
   }, 4000)
});





// -----------addEvent Listener----------------
// const p = new Promise((resolve, reject) => {
//     resolvebtn.addEventListener("click", () => {
//         resolve("Promise resolve");
//     })

//     rejectebtn.addEventListener('click', () => {
//         reject("Promise rejected");
//     })
// })  

// p.then((data) => {
//     console.log(data); // resolve data passed i.e -> Problem resolve
// }).catch((err) => {
//     console.log(err); // reject error handling using a catch
// })




// //----------setTimeout-------------
// setTimeout(() => {
//     console.log('hi');
// }, 4000);



