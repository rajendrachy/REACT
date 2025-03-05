// let a1:string = '1';
// a1 = '10';

// // use commnad tsc folderName/fileName= fileName-> as your choice
// // tsc -> to convert a ts into js

// function add3(a: number, b:number): number {
//     return a + b;
// }
// const y = add3(1, 3);
// console.log(y);

// a1 = 'y';
// console.log(a1);






//---------------Basic types----------------
//-----------number----------------
// let num: number = 1234_567_565;
// let num1: bigint = 123443545n; // target should be ES2020 in tsconfig.json
// console.log("num:", num);
// console.log("num1:", num1);


//-----string----------------
// let character: string = 'Coding';
// let isAvailable: boolean = true;


// -----Array---------------
// let numArray: number[] = [1,2,3,4];
// let charArr: string[]=['a', 'b'];


//---------undefinde----------
// let val: undefined = undefined;



//--------Null----------
// let val1: null = null;



//----Object-------------
let obj: object ={
    name: 'Rajendra',
    age: '20',

}
let obj1 = {...obj}; // ... -> Spread operator
console.log(obj1)



// let obj: {name: string, age: number} = {
//      name: 'Rajendra',
//      age: 10,
// }


//1hr:30min