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
//     throw new Error('error in program'); // promises rejucted
// }
// console.log(makeRequest());








//-----------------Async and Await--------------------------
async function makeRequest() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const responsePromise = fetch(url)
    responsePromise.then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
}
makeRequest(); // function call












