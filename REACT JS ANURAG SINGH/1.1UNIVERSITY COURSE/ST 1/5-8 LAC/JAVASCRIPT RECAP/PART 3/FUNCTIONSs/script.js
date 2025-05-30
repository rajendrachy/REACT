// ----------------------e.g. Just practice--------------------------

// console.log("Hi");
// console.log("My name is Rajendra");
// console.log("I am a Web Developer");

// console.log("**************************");

// console.log("Hi");
// console.log("My name is Rajendra");
// console.log("I am a Web Developer");

// console.log("**************************");






// --------------Function creation --------------
// Function is Created to reduce a redudencies in the program

function introduceMe(username = 'Procoder', passion = 'Doctor', age = 30)  {  // function createdconsole.log("Hi"); //==>>>  This is a Function Defination
    // procoder is a default parameter-->> 
    // username is as a variable it is created
    console.log(username);
    console.log("Hi");
    //1 // console.log(`My name is ${username}`);
    // or ,-->> 

    // 2 // -->> 
    console.log(`My name is ${username || 'Procoder'}`);

    
    console.log(`I am a ${passion}`);
    // return 78 // or true;  // or, false// return that value in the place of the undefined as a output in the console

    console.log(`I am ${age} years old`);
};

introduceMe('Akash', 'Agriculture', 25); // with this there should be not return the undefined  // Function call -->> // use () in the function while printing
introduceMe('Rajendra', 'Software Engineer', 19); // type => (string, string, number);
introduceMe('Manish' , 'Mechanical Engineer', 24);
introduceMe(); // for this username -> procoder



