//Q.N.1. write a typescript function to calculate a factirial of a number with propet type annotations
// function factoral(num: number) : number {
//     if(num == 0 || num == 1) {
//         return 1;
//     }
//     return num * factoral(num-1);
// }
// console.log(factoral(4));
// // 4*3*2*1 => 24








//Q.N.2. Define a functin that accept an user Obj
// with name, age, and email and return a formatted string

// interface userData {
//     name: string;
//     age: number;
//     email: string;
// }

// function formatUser(user: userData): string{
//     return `User ${user.name} (${user.age} yrs) ${user.email}`;

// }

// const user: userData = {
//     name: 'Rajendra',
//     age: 20,
//     email: 'kdjfnd@gmail.com'
// }
// console.log(formatUser(user));












//Q.N.3. Calculate a total price: wtite a TypeScript function that calculate a toral price of an array of 
// product Obj, each product has price and quantity

// interface Product {
//     price: number;
//     quantity: number;
// }

// function calculateTotal(products: Product[]): number {
//     return products.reduce(
//         (total, product) => {
//             return total + product.price * product.quantity;
//         }, 
//         0
//     );
// }
// let cart: Product[] = [
//     {price: 100, quantity: 2},
//     {price:500, quantity: 1 },
// ]

// console.log(calculateTotal(cart));





















//Q.N.4. Define an Union type for a vehicle that can either
// be a car or Bike with diff, properties;
// write a function to log details based on the vehicle type

// type CarData = {
//     type: 'car';
//     make: string;
//     model: string;
//     year: number;
// };

// type Bike = {
//     type: 'bike';
//     brand: string;
//     cc: number;
// }

// type VehicleData = Bike | CarData;

// function getVehicleDetails(vehicle: VehicleData) {
//      if(vehicle.type === 'car') {
//         console.log(`Car: ${vehicle.make} ${vehicle.model} ${vehicle.year}`);
//      } else if(vehicle.type === 'bike') {
//         console.log(`Bike: ${vehicle.brand} ${vehicle.cc}`);
//      }
// }

// let myCarDetails: VehicleData = {
//     type: 'car',
//     make: 'Tesla',
//     model: 'Model 17',
//     year: 2023,
// }

// let myBike: VehicleData = {
//   type: 'bike',
//   brand: 'BMW',
//   cc: 400,
// }

// getVehicleDetails(myBike);
// getVehicleDetails(myCarDetails);




