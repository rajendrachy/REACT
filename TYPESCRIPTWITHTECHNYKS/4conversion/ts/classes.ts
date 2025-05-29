//----------------Class-----------------
// public byDefault
// class Person {
//     name: string; // type allocation
//     age: number;

//     constructor(name: string, age?: number) { // ? making a optional
//         this.name = name;
//         this.age = age || 0;
//     }


//     greet(): string{
//  return `Hello, my name is ${this.name}, and I'm ${this.age} yrs old.`
//     }
// }
// const new_person = new Person('Diya', 19); // create a new instance
// console.log(new_person.greet());
// console.log(new_person.name);



















//---------------Access modifiers(public, private, protected)---------------------
// In TypeScript, access modifiers control the visibility and accessibility of class members (properties and methods). The three main access modifiers are:

// public(Default): Allows access to the class member from anywhere (inside and outside the class).

// private: Restricts access to the class member to only within the class itself.

// protected: Allows access to the class member within the class and its subclasses (but not outside the class hierarchy).



// class Car1 {
//     private make: string;
//     public model: string;
//     year: number; // ByDefault Public

//     constructor(make: string, model: string, year: number) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     greetModel() : string{
//         return this.model;
//     }
// }

// const new_car = new Car1('Tesla', 'Model 10', 2024);
// // console.log(new_car.make); // error due  to private
// console.log(new_car.greetModel());


















//------------------inHeritance-----------------
// class Animal { // Parent class
//     constructor(public name: string) {}

//     makeSound(): void {
//         console.log('Some generic sound....')
//     }
// }


// class Dog extends Animal { // child class
//    constructor(name: string) {
//     super(name);
//    }

//    makeSound(): void {
//        console.log('Woof! Woof');
//    }
// }

// const dog = new Dog('puppy');
// dog.makeSound();



// // 4: 06 min

