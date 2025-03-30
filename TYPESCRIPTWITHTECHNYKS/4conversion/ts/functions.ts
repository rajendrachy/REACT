// Regular function
// function addNumber(a: number, b: number): number {
//     return a + b;
// }

// console.log(addNumber(2, 6));



// // functionexpression
// const divide = function(a: number, b:number): number {
//     return a / b;
// }
// console.log(divide(8, 2));







//--------arrow function----------

// const multply = (a: number, b:number): number => {
//     return a * b;
// }
// console.log(multply(2, 3));







//----------------optional and default parameters---------------

//optional parameters
// function greet(username: string, greeting?: string): string {
//     // if(!greeting) {
//     //     return '';
//     // }
//     // return greeting + ' ' + username;
//     //return `${greeting ? greeting : ''} ${username}`; // ternary operator
//     return greeting ? `${greeting} ${username}`: `${username}`; // ternary operator

// }

// console.log(greet('Rajendra'));


// // default parameters
// function greet1(username: string, greeting: string = 'Hi'): string {
//     return `${greeting} ${username}`;
// }
// console.log(greet1('Rajendra', 'Hey'));














//------------function Overloading-------------

// function getLength(value: string): number; //Return the number
// function getLength(value: any[]): number;  //Return the number
// function getLength(value: any): number {
//    return value.length;
// }

// console.log(getLength('hello'));
// console.log(getLength([1, 2, 3, 4]));
// console.log(getLength('Hello33'));












//----------------Rest Parameters--------------------
// Rest parameters in TypeScript (and JavaScript) allow a function to accept an undefined number of arguments. 

// function sum(...numbers: number[]): number{
//     return numbers.reduce((total, num) => {
//         return total + num;

//     }, 0)
// }
// console.log(sum(1, 2, 3, 4));


// function greet1(greeting: string, ...names: string[]): void {
//     names.forEach((name) => {
//         console.log(`${greeting} ,${name}`);
//     })
// }
// console.log("Hello", 'codewith', 'codeman', 'code2025');

