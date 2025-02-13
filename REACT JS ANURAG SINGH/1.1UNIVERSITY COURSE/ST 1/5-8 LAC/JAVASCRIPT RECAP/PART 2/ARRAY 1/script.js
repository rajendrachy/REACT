//-----------  1.Array -----------------

// const fruitsCollection = ["apple", "Banana", "Grapes", "Dates"]; // length -->> 4 // Creating Array

// console.log(fruitsCollection[0]); // apple,  index -->> 0
// console.log(typeof(fruitsCollection)); //object // Type of Array => Objects
// console.log(typeof {}); // object
// console.log(typeof []);  // object
// console.log(typeof [].concat); // function





// ------------- 2----------------
// const userName = "Rajendra chaudhary";
// const fruitCollection = [
//     'Apple', 
//     'Banana', 
//     "Grapes", 
//     'Dates', 
//     23, 
//     null, 
//     undefined, 
//     true, 
//     false,
    
// ]

// console.log(fruitCollection.length); // -->> 9
// console.log(userName.length); // 18





//------------ 3 ------------

// const userName = "Rajendra Chaudhary";
// const fruitCollection = ["Apple", "Banana", "Grapes", {name : 'Rajendra', as : {age : 23}}, ];
// console.log(fruitCollection);
// console.log(fruitCollection[10]); // undefined
// console.log("The Length is : ", fruitCollection.length);


// fruitCollection[10] = 'My name is @chyrajendra';
// console.log(fruitCollection);
// console.log(fruitCollection.length); // insert value + 1



// --------------- 4 PUSH --------------

// const fruitCollection = ['Apple', 'Banana', 'Grapes', 'Dates'];
// fruitCollection.push('leamon');
// console.log(fruitCollection);
// fruitCollection.push('I am ready');
// console.log(fruitCollection);
// fruitCollection.push('sdfhl', 88, null, ''); // push more element together 
// console.log(fruitCollection);





// ---------------------5 -> POP------------------------

// const fruitCollection = ['Apple', 'Banana', 'Grapes', 'Dates'];
// fruitCollection.pop();  // last element is removed
// console.log(fruitCollection);
// fruitCollection.pop();  // last element is removed
// fruitCollection.pop();  // last element is removed
// console.log(fruitCollection); // Output -->>  Apple
// fruitCollection.pop();  // last element is removed
// console.log(fruitCollection);
// fruitCollection.pop();






// -------------------- 6-.. -------------------

const newObject = {};
const newArray = [];
console.log(newArray);
newArray.firstName = 'Rajendra';
newArray.push("chaudhary");
newArray.push("12")
console.log(newArray); // length -->> 0 
newObject.firstName = "Rajendra";
console.log(newArray);


