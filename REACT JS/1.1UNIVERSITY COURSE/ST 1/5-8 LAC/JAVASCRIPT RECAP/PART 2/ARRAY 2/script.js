// ----------  shift => Similar to POP ---------------

// const evenNumber = [0, 2, 4, 6, 8];
// console.log(evenNumber.shift()); // remove the first element of the array i.e -->> 0
// console.log(evenNumber); // [2, 4, 6, 8]
//  // removing element from the last is easier but 
// // removing the element from the first is difficult 


// --------- unshift => Similar to PUSH ------------

// const evenNumber = [0, 2, 4, 6, 8];
// console.log(evenNumber.unshift(-2, -5, -0));
// console.log(evenNumber);




// -------------- Concat-----------------

// const evenNUmber = [0, 2, 4, 6, 8];
// const  number = [1, 3, 5, 7, 9];
// const animals = ['Dog', 'Cat', 'Rat'];

// console.log(evenNUmber.concat(number));
// console.log(evenNUmber); // concat not modift the original element
// console.log(number); // concat not modift the original element
// console.log(animals.concat(evenNUmber, number));



// ----------- indexOf ------------------

// const evenNUmber = [0, 2, 4, 6, 8];
// console.log(evenNUmber.indexOf(6)); // 3 --->>>  written the index  or the give the element index
// console.log(evenNUmber.indexOf(9)); // 9 is not exists so output -->> -1  





// ------------------ includes ---------------------

// const animals = ['Dog', 'cat', 'man', 'duck'];
// console.log(animals.includes('cat')); // true
// console.log(animals.includes('cakjdn')); // false // js is a case-sensitive



// --------------- reverse ----------------------

// const animals = ['Dog', 'cat', 'man', 'duck'];
// console.log(animals.reverse());



// -------------------- sort--------------

// const animals = ['Dog', 'Cat', 'Man', 'Duck']; // the letter should be in the either small and capital
// console.log(animals.sort()); // not sort() for the numbers -->> only alphabetical 
// // but sort() -->> numerically -->> using a function , we study further





// -------------- slice --------------------

// const animals = ['Dog', 'Cat', 'Man', 'Duck']; 
// console.log(animals.slice(1)); // Start from index 1 and Create a new array
// // the prove is below
// console.log(animals); // original array

// console.log(animals.slice(1,3)); // from starting value to index 2 but not include the ending value 
// //                                  slice(StartIdx, EndIdx)


// --------------- splice ----------------

const animals = ['Dog', 'Cat', 'Man', 'Duck']; 
console.log(animals.splice(2, 1)); // Man -->> Splice(startIdx, delete, endIdx);
// splice create a new array and also change the originl array
// the prove is below
console.log(animals); // original array is changed , ->> Man removed from a original Array
console.log(animals.splice(2,1, "Bats"));
console.log(animals); // put Bats in the place of the original array


