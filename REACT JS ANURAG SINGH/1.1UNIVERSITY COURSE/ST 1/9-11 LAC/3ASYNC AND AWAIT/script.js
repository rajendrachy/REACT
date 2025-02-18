// LINK YT -> https://www.youtube.com/watch?v=qHKGk-RPtpA


//______________Async and Await Function______________________

// const p = function makeRequest() { 
//     return 'hello';
// }
// console.log(p);






// // -------Creating async function---------
// async function makeRequest() { // async (async is a keyword) function return promises automatically
//    return 'hello'; // fulfilled while return 
// }
// console.log(makeRequest());






//------------throw------------------------
// function hi() {
//     console.log('hello');
//     //throw 'error in program'; // function End -> below console.log() is not run due to throw keyword
//     // or,
//     throw new Error('error in program'); // new is a Constructor

//     console.log('hii'); // 
// }
// console.log(hi()); // Output -> Hello and then Error 









// -----------If we want to reject promises-----------------------
// async function makeRequest() {
//     throw new Error('error in program'); // promises rejected
// }
// console.log(makeRequest());








//-----------------Async and Await--------------------------
// ---------API-------------------
// async function makeRequest() {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     const responsePromise = fetch(url)
//     responsePromise.then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     })
// }
// makeRequest(); // function call











// ---------------Same thing using a AWAIT keyword---------------------------
// async function makeRequest() { // async work as a synchronization function means run the program line by line where it end start again from there
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     const responsePromise = await fetch(url) // We know the fetch always return the promis
//     // await work -> Promises result return
//     //console.log('hi');
//     console.log(responsePromise);
   
// }
// makeRequest(); // function call



// // function addTwoNUmber() {
// //     return 5 + 8;
// // }








//------------------Getting the data not a result------------------
async function makeRequest() { // async work as a synchronization function means run the program line by line where it end start again from there
    const url = 'https://jsonplaceholder.typicode.com/users';
    const responsePromise = await fetch(url) // We know the fetch always return the promis
    const data = await responsePromise.json(); // await is only valid inside async function // Using type="module" in the script link we can use await outside the async function
    console.log(data); // get all data
   
}
makeRequest();






// --------------Using type="module" in the script link we can use await outside the async function------------------------

// const url = 'https://jsonplaceholder.typicode.com/users';
// const responsePromise = await fetch(url) // We know the fetch always return the promis
// const data = await responsePromise.json(); // await is only valid inside async function // Using type="module" in the script link we can use await outside the async function
// console.log(data);  // .json() converts the response body from a readable stream to a JavaScript object.


















