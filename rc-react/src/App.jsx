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
// import { Container } from "./props/Container";
// import { FoodInput } from "./props/FoodInput";

// export function App() {
//   let items = ['Dall', 'Green Veg', 'roti', 'Salad', 'Milk'];
// let show = "ckdf";

//   return (
//     <>
//    <Container>
//    <h1 className="food-heading">Healthy Foods</h1>
//    <FoodInput></FoodInput>
//    <p>{show}</p>
//    <FoodItems item ={items}/>
//    <ErrorMessage item ={items}/>
//    </Container>


// {/* <Container>
//     <p>Above is the list of healthy foods that are good for your health and well being.</p>
// </Container> */}

//    </>
//   )
// }














// ----------------------To-do-App---------------------------------
// -----------In -> codesandbox.io----------------------------

import "./App.css";
import { AppName } from "./ToDoApp/Appname";
import { Addtodo } from "./ToDoApp/Addtodo";
import { TodoItem } from "./ToDoApp/TodoItem";
import TodoItems from "./ToDoApp/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./ToDoApp/WelcomeMessage";
// import { TodoItemsContext } from "./store/todo-items-store";


export function App() {
// -----making array Object-------

        const [todoItems, setTodoItems] = useState([]);

        const handleNewItem = (itemName, itemDueDate) => {
          //  console.log(`New Item Addes: ${itemName} Date:${itemDueDate}`)
           const newTodoItems = [...todoItems, {name:itemName, dueDate: itemDueDate}]
           setTodoItems(newTodoItems);
        };


        const handledeleteItem = (todoItemName) => {
          const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
          setTodoItems(newTodoItems);
              // console.log(`Item Deleted: ${todoItemName}`);
        }




    return (

        // <TodoItemsContext.Provider>
        <div id="todo-co">

            <AppName />
            <Addtodo onNewItem={handleNewItem}/>
            {todoItems.length === 0 &&<WelcomeMessage />}
            <TodoItems todoItems={todoItems}
            onDeleteClick={handledeleteItem}/>

        </div>
        // </TodoItemsContext.Provider>
    );
}












//----------------------Project--Calculator--------------------------------
// import './App.css';
// import { Display } from './calculator/Display';
// import {ButtonContainer} from './calculator/ButtonsContainer';
// import { useState } from 'react';

// export function App() {

//   const [calVal, setCalVal] = useState("");
//   const onButtonClick = (buttonText)  => {
//    if(buttonText === 'C') {
//    setCalVal("");
//    } else if(buttonText === '=') {
//       const result = eval(calVal) // eval (method) pass a string // eval => automatically calculate a result and store 
//       setCalVal(result);
//    } else {
//   const newDisplayValue = calVal + buttonText;
//   setCalVal(newDisplayValue);
//    }
//   }

//     return (
//         <center>
//         <div id="calculator">
//             <Display displayValue={calVal}/>
//              <ButtonContainer onButtonClick={onButtonClick}/> 
//         </div>
//         </center>
//     )
// }

//----------------End--------------------------------















//---------------Start----------------------------
//-------------------state--------------------------
// This not updata because this type not work inthe react.

// import './App.css';
// export function App() {

// let data = "anil";
//   function updataData() {
//       data = "siddhu";
//       alert(data);
//   }

//   return (
//     <div className='App'>
//     <h1>{data}</h1>
//     <button onClick={updataData}>UpdataData</button>
//     </div>
//   )
// }



//___________ In React, state is private to the component where it is declared. This means:
// __________________It cannot be accessed directly by other components.

// ---------------again Using state------------------------------
// import './App.css';
// import {useState} from 'react'; // useState is a Hook that allow to maintain state and update state

// export function App() {

//   const [data, setData] = useState(0); // [data, updataData]

//   function updataData() {
//     setData(data+1);
//   }

//   function decreaseData() {
//     setData(data - 1);
//   }

//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={updataData} style={{margin:"10px", padding:"10px"}}>+</button>
//       <button onClick={decreaseData} style={{padding:"10px"}}>-</button>
//     </div>
//   )
// }
// //--------------------End-------------------------------















//9 : 44 minutes



//-------------------------Start----------------------------
//------------------------Social Media---------------------------------

// import './App.css';

// export function App() {
//     return (
//         <>
//         <h1>Social Media</h1>
//         </>
//     )
// }
//----------------------Pending-------------------------

// --------------------------End----------------------------------









//--------------------UseEffect Hook-----------------

// import './App.css';
// import React from 'react';
// import { useEffect, useState } from 'react';


// export function App() {
//     const [count, setCount] = useState(0);

//     // -----------------Using a UseEffect Hook--------------------
//     useEffect(() => {
//         console.warn("useEffect");
//     })

//     // Hooks is not used in the class components
//     function handleCounter() {
//         // console.log(count);
//         setCount(count + 1);
//     }
//     return (
//         <div className='App'>
//             <h1>useEffect Hooks: {count}</h1>
//             <button onClick={handleCounter}>Updata Counter</button>
//         </div>
//     )
// }





//--------------UseEffect hooks------------------------------
// import './App.css';
// import { useState } from 'react';
// import React from 'react';
// import { useEffect } from 'react';

// export function App() {
// const [data, setData] = useState(10);
// const [count, setCount] = useState(100);


//     useEffect(()=> {
//         console.warn("useEffect called for data");
//     }, [data]); // only useEffect used in the data


//     useEffect(()=> {
//   alert("count increase" + count);
//         // console.warn("useEffect called for count");
//     }, [count]); // only useEffect used in the count

//     function handleCount() {
//  setCount(count+1);
//     }

//     function handleData() {
//         setData(data+1);
//     }

//     return (
//         <div className='App'>
//             <h1>Count: {count}</h1>
//             <h1>Data : {data}</h1>
//             <button onClick={handleCount}>Update Count</button>
//             <button onClick={handleData}>Updata Data</button>
//         </div>
//     )
// }
//----------------end-----------------------------------













//-----------------Fetch API Using a useEffect Hooks-----------------------------
// import React from "react";
// import UseEffectAPI from './useEffectHook/UseEffectApi';

// export function App()  {
//     return (
//         <>
//         <UseEffectAPI />
//         </>
//     )
// }


//---------------------------End-----------------------












//-------------------Start--------------------------------
//-------------------Quiz App----------------------------
// import React, { useState } from "react";
// import quizData from './quizApp/question';

// export function App() {
//     const [currentQn, setcurrentQn] = useState(0);
//     const [userAns, setUserAns] = useState([]);
//     const [score, setScore] = useState(0);
// const handleAnsClick = (selectOption) => {
//     const isCorrect = quizData[currentQn].correctAnswer === selectOption;
//     setUserAns([...userAns, {question : currentQn, answer : selectOption}]);
//     if(isCorrect) {
//         setScore(score+1);
//     }

//     setcurrentQn(currentQn + 1);

// }

// const resetQuiz = () => {
//     setcurrentQn(0);
//     setUserAns([]);
//     setScore(0);

// }
//     return (
//         <center>
//         <div className="quiz">
//             {score}
//             <h2>Quiz App</h2>
//             {
//                 currentQn < quizData.length ? (
//                  <div>
//                   <h2 style={{color:"green"}}>{quizData[currentQn].question}</h2>
//                   <ol>
//                     {quizData[currentQn].options.map((option, index) => (
//                         <li style= {{cursor:"pointer", margin:"10px", color: "blue"}} key={index} onClick={() => handleAnsClick(option)}>{option}</li>
//                     ))}
//                   </ol>
//                  </div>
//                 ):(
//                 <div className="complete">
//                     <h2>quiz Completed !</h2>
//                     <p>Your Score: {score} / {quizData.length}</p>
//                     <button onClick={resetQuiz}>Reset</button>
//                 </div>
//                 )
//             }
        
        
//         </div>
//         </center>
//     )
// }

// //-----------------end---------------------------












//----------Todo App------------------
// import './App.css';
// import { useState } from 'react';
// import { AppName } from './todoApp1/Appname';
// import { AddToDo } from './todoApp1/AddToDo';
// import { TodoItems } from './todoApp1/TodoItems';

// export function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName) => {
//     const newTodoItems = [...todoItems, { id: Date.now(), name: itemName, completed: false }];
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <>
//       <AppName />
//       <AddToDo onNewItem={handleNewItem} />
//     </>
//   );
// }










