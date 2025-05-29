// let a1:string = '1';
// a1 = '10';

// // use commnad tsc folderName/fileName= fileName-> as your choice
// // tsc -> to convert a ts into js

// function add3(a: number, b:number): number {
//     return a + b;
// }
// const y = add3(1, 3);
// console.log(y);
//--------------Use command to run this -> ts-node index.ts

//------------to install latest version of the node -> nvm install --lts
// To use the installed version immediately:   => nvm use --lts
// a1 = 'y';
// console.log(a1);








//---------------Basic types---------------- // 6-Building Types-----------------
//-----------number----------------
// let num: number = 1234_567_565;
// let num1: bigint = 123443545n; // target should be ES2020 in tsconfig.json
// console.log("num:", num);
// console.log("num1:", num1);


//-----------string----------------
// let character: string = 'Coding';
// let isAvailable: boolean = true;


// -----Array---------------
// let numArray: number[] = [1,2,3,4];
// let charArr: string[]=['a', 'b'];





//---------undefined----------
// let val: undefined = undefined;

// let val;
// console.log(val) // this is also a part of the undefined


//--------Null----------
// let val1: null = null;




//-------------Object----------------
// let obj: {name: string, age: number} = {
//      name: 'Rajendra',
//      age: 10,
// }






//----Object-------------
// let obj: object ={
//     name: 'Rajendra',
//     age: '20',

// }
// let obj1 = {...obj}; // ... -> Spread operator -> Used to copy 
// console.log(obj1)



//-----------Any Type------------------
// In TypeScript, the any type allows a variable to hold any type of value (string, number, object, array, etc.
// let numVal: any;
// numVal = 1;
// numVal = 'a';


// function testAnyType(val: any) {
//     console.log(val)
// }


// ---------------to avoid writing type----------------
// function testAnyType(val) {  // "noImplicitAny": false,   /* Enable error reporting for expressions and declarations with an implied 'any' type. */

//     console.log(val)
// }





// let valArray: [number, string] = [1, 'a'];




//----------Array--------------------
// let numArray: number[] = [1,2,3,4];
// let charArr: string[]=['a', 'b'];

//charArr.forEach(val => val.includes('a'));
//numArray.forEach(val => val.toFixed(2));



//-------------------tuples-----------------
// let arr: [number, string] = [1, 'Alice'];
// let coordinates3D: [number,number, number] = [10, 20, 30]; //(x, y, z) axis

// //localhost: 4200?name=Technyks&phone=1234567890
// let userData: [string, number] = ['Tech', 2232434343];



// let response: [number, string] = [200, "Success"]//http response
// response.push(0); // drawback of tuples in the ts
// console.log("Response val:", response); // output => [200, 'Success' , 0]







//-------------------enum---------------------------
// An enum (enumeration) is a way to define a set of named constants (fixed values).
// It improves code readability and helps prevent errors from using arbitrary values.
// ----------------Syntax-----------------
// enum enumName {

// }


// enum Color { // there is Indexing system byDefault start from a 0(Zero)
//     Red,
//     Green,
//     Blue
// }
// console.log(Color.Red);
// console.log(Color.Blue);
// console.log(Color.Green);

 

// enum Color { // there is Indexing system byDefault start from a 0(Zero)
//     App_Name = 'my_app_name',
//     Red = 'blue....',
//     Green = 'green..',
//     Blue = 'blue'
// }
// console.log(Color.Red);
// console.log(Color.App_Name);



// // 1:53 min





// let color: Color = Color.Green;
// console.log(color); // green..


// const Small = 1;
// const Medium = 2;
// const Large = 3;

// let size = Medium;




//---------------to make it easy we can use enum------------------
// const enum Size {
//     Small = 1,
//     Medium, 
//     Large,
// }


// enum Size {
//     Small = 1,
//     Medium, 
//     Large,
// }

// let size: Size = Size.Large;
// console.log('size', size);







//-----------------Unknown Type--------------------------
// let notSure: unknown = 'a';

// if (typeof notSure === 'number') {
//     notSure.toFixed(2); // // eg. => "19.46"
// } else if (typeof notSure === 'string') {
//     notSure.length;
// }




//-------------------never Type---------------
// function infiniteLoop(): never {
//     while(true) {
//         //dosomething endlessly
//         console.log(1);
//     }
// }
// infiniteLoop();



// function throwError(message: string): never {
//      throw new Error(message);
// }
// throwError('Something went wrong');







//--------------void type-----------------
// The void type is used when a function does not return any value

// function logMessage(message: string): void{
//     console.log(message);
//     return null; // error only pass void or undefined
// return undefined; // correct
// }








//------------type inference---------------------
// let username = 'Nikhil'; // autimatically detect the type of variable


//-----------type assertions----------------
// let someValue: any = 'Hello World';
// let strLength: number = (someValue as string).length;
// console.log(strLength);




//----------------union type--------------------
// let id: string | number; // id can be string or number
// id = 'abc';
// id = 101;



// function printId(id: string | number) {
//     console.log(`id: ${id}`); // 'id' + id
// }

// printId('abc');
// printId(101);





//---------type narrowing---------------
// function printIdFn(id: string | number) {
//     if(typeof  id === 'string') {
//        console.log('id is a string: ', id.toUpperCase());
//     } else {
//     console.log(`id: ${id}`); // 'id' + id
//     }
// }
// printIdFn('xyz');
// printIdFn(1);







//---------------interface------------------
// interface Person { // synxat

// }


// interface Person{
//     name: string;
//     age: number;
//     greet(): void;
// }

// let person: Person={
//     name: 'abc',
//     age: 10,
//     greet() {
//         console.log('Hi');
//     }
// };
// person.greet(); // Hi








//----------------Interface with a Functions------------------
// interface MathOp{
//     (a: number, b:number): number;
// }
// const add: MathOp = (x, y)=> x + y;
// const sub: MathOp = (x, y)  => x - y;
// console.log(add(1, 2));
// console.log(sub(3, 2));





//--------type alias--------------------
//type AliasName = TypeDefinition; // syntax

// type UserId = string;
// let userId: UserId = 'abc'; // type to string



// type Person2 = {
//     name: string;
//     age: number;
// }
// let person2:Person2= {
//     name: 'rajendra',
//     age: 20,
// }
// console.log(person2.name);












// ------complex problem with Union---------------
// type ID = string | number;

// let userId1: ID = 'abc';
// let userid3: ID = 2232;
// console.log(userId1);













//----------------interface vs type alias-------------------

// interface User {
//     name: string,
//     phone: number
// }

// interface Customer extends User {
//     address: string,

// }

// let muCustomer: Customer = {
//     name: 'X',
//     phone: 2323,
//     address: "Dhangadhi",
// }
// type Vehicle = {
//     name: string,
//     model: string
// };
 
// //& -> intersection types
// type Car = Vehicle & {
//     isEllectric: boolean,
// }
