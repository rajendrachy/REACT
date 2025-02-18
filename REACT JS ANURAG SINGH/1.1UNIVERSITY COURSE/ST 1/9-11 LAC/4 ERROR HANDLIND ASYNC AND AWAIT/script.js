// let a;
// console.log(a); // Undefined



// console.log(a); // error -> a is not defined
// consol.log("hello"); // while error occure in the JS the after program not Run , so we use try and catch


// //---------------usign a try catch ------------------------
// try {
//     console.log(a);
// }  catch(err) {
//     console.log(err); // type of error is Object
//     console.dir(err); // full explain error
// }
// console.log(3+9); // output -> 12







// ------------------try and catch mainly used in the async and await --------------------

// const user = {
//   name: 'Anurag',
//   age: 34,
// }

// try { // try block run in all the cases
//   console.log(user.address)
//   console.log(user.name);
// } catch (err) { // if error exist then run
//   console.dir(err.message)
// } finally { // run in all cases. When error exist and when error not exist
//   console.log('hello world')
// }
// console.log(3 + 7)









async function makeAsyncRequest() {
    try {
      const url =
        'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }
  
  makeAsyncRequest()



