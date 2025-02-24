// ----------------------Lab Pracite-------------------------
// ----------------Props----------------------------
// import React from "react";
// import "./App.css";
// import { User } from "./component1/User";
// import Card from "./component1/Card"; // Ensure Card is correctly imported

// function App() {
//   return (
//     <>
//       <User section="E2" />
//       <Card indx={0} bgcolor="green" />
//       <Card indx={1} bgcolor="orange" />
//       <Card indx={2} bgcolor="red" />
//     </>
//   );
// }

// export default App;












// -----------------------Clock--------------------------------

// import React from "react";
// import "./App.css";
// import {ClockHeading} from "./components2/ClockHeading";
// import { ClockSlogan } from "./components2/ClockSlogan";
// import { CurrentTime } from "./components2/CurrentTime";


// function App() {
//   return (
//     <center>
//      <ClockHeading/>
//      <ClockSlogan/>
//      <CurrentTime/>
//     </center>
//   );
// }

// export default App;







//----------------------Fragments---------------------------------------

// import React from "react";
// import "./App.css";
// // React.Fragment is Used to remove extra div in JSX -> symBol => <></>
// export function App() {
//   return (
//     <React.Fragment>
//       <h2>Healthy Foods</h2>
//       <ul>
//         <li>Dal</li>
//         <hr />
//         <li>Green Vegetable</li>
//         <hr />
//         <li>Roti</li>
//         <hr />
//         <li>Salad</li>
//         <hr />
//         <li>Milk</li>
//         <hr />
//       </ul>
//     </React.Fragment>
//   )
// }










// -------------------Practice --------Map Method------------------------
// import React from "react";
// import "./App.css";

// export function App() {

//   let foodItems = ['Dal', 'Green Veg', 'roti', 'Salad', 'Milk'];

//   return (
//    <>
//    <h1>Healthy Foods</h1>
//    <ul className="list-group">
//     {foodItems.map((item) => (
//       <li key={item} className="list-gropu-item">{item}</li>
//    ))}
//    </ul>
//    </>
//   )
// }








// ------------------Conditional rendering---------------------------------3hr : 25min--------------------
// import React from "react";
// import "./App.css";

// export function App() {

//   let foodItems = ['Dal', 'Green Veg', 'roti', 'Salad', 'Milk'];
// //let foodItems = [];
//   // if(foodItems.length === 0) {
//   //   return <h3>I am still hungry.</h3>
//   // }

//   return (
//    <>
//    <h1>Healthy Foods</h1>

//    {/* {foodItems.length === 0 ? <h3>I am still Hungry.</h3> : null} */}
//    {foodItems.length === 0 && <h3>I am Hungry.</h3>}
//    <ul className="list-group">
//     {foodItems.map((item) => (
//       <li key={item} className="list-gropu-item">{item}</li>
//    ))}
//    </ul>
//    </>
//   )
// }









// --------------------------Props----------------------------------

// import React from "react";
// import "./App.css";
// import FoodItems from './props/FoodItems';
// import ErrorMessage from "./props/ErrorMessage";

// export function App() {
//   let items = ['Dall', 'Green Veg', 'roti', 'Salad', 'Milk'];

//   return (
//    <>
//    <h1 className="food-heading">Healthy Foods</h1>
//    <FoodItems item ={items}/>
//    <ErrorMessage item ={items}/>
//    </>
//   )
// }







// ----------------------To-do-App---------------------------------
// -----------In -> codesandbox.io----------------------------
