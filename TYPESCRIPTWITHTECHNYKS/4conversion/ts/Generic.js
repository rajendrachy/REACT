"use strict";
// Generic => Generics are the way to create components(functions, classes or interface)
// that work with different types without 
// lossing type safety
//------Dynamically TypeCast generic function---------
// function genericIdentity<T>(arg: T) : T {
//     return arg;
// }
// console.log(genericIdentity<string>("Rajendra"));
// console.log(genericIdentity<number>(100)); 
// console.log(genericIdentity("Rajendra Chaudhary")); // byDefault any type
// //------------generic Interface------------
// interface KeyPair<T, U> {
//     key: T,
//     value: U,
// }
// let keyPairValue: KeyPair<string, number> = {
//   key: "Rajendra Chaudhary",
//   value: 2311981617,
// };
//--------------generic constraints------------------
// function getLength<T extends {length: number}> (item: T): number {
//     return item.length;
// }
// console.log("The Length is:", getLength("Hello"));
// console.log(getLength([1, 2, 3]));
// console.log(getLength(123)); // error
//------------generic classes----------------
// class Box<T> { // byDefault any type
//     content: T;
//     constructor(value: T) {
//         this.content = value;
//     }
//     getContents(): T {
//         return this.content;
//     }
// }
// const numberBox = new Box(100); // byDefault any type
// console.log(numberBox.getContents());
// const stringBox = new Box("Hello");
// console.log(stringBox.getContents());
//------------------generic class----------------
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    getStack() {
        return this.items;
    }
}
const numberStack = new Stack();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.getStack()); // [10, 20]
console.log(numberStack.pop()); // 20
console.log(numberStack.getStack()); // [10]
