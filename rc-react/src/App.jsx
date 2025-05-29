// // // ----------------------Lab Pracite-------------------------
// // // ----------------Props----------------------------
// import React from "react";
// import "./App.css";
// import { User } from "./component1Props/User";
// import Card from "./component1Props/Card"; // Ensure Card is correctly imported

// import { ThemeToggle } from "./endTermPracticing/ass17";


// export function App() {
//   return (
//     <>
//       <User section="E2" />
//       <Card indx={0} bgcolor="green" />
//       <Card indx={1} bgcolor="orange" />
//       <Card indx={2} bgcolor="red" />
//     </>
//   );
// }















// //----------------Start-----------------
// // // -----------------------Clock--------------------------------

// // import React from "react";
// // import "./App.css";
// // import {ClockHeading} from "./Clock/ClockHeading";
// // import { ClockSlogan } from "./Clock/ClockSlogan";
// // import { CurrentTime } from "./Clock/CurrentTime";


// // export function App() {
// //   return (
// //     <center>
// //      <ClockHeading/>
// //      <ClockSlogan/>
// //      <CurrentTime/>
// //     </center>
// //   );
// // }



// //---------------End----------------------------------------





























// // //----------------------Fragments---------------------------------------

// // // import React from "react";
// // // import "./App.css";
// // // // React.Fragment is Used to remove extra div in JSX(JavaScript XML) -> symBol => <></>
// // // export function App() {
// // //   return (
// // //     <React.Fragment>
// // //       <h2>Healthy Foods</h2>
// // //       <ul>
// // //         <li>Dal</li>
// // //         <hr />
// // //         <li>Green Vegetable</li>
// // //         <hr />
// // //         <li>Roti</li>
// // //         <hr />
// // //         <li>Salad</li>
// // //         <hr />
// // //         <li>Milk</li>
// // //         <hr />
// // //       </ul>
// // //     </React.Fragment>
// // //   )
// // // }










// // // -------------------Practice --------Map Method------------------------
// // // import React from "react";
// // // import "./App.css";

// // // export function App() {

// // //   let foodItems = ['Dal', 'Green Veg', 'roti', 'Salad', 'Milk'];

// // //   return (
// // //    <>
// // //    <h1>Healthy Foods</h1>
// // //    <ul className="list-group">
// // //     {foodItems.map((item) => (
// // //       <li key={item} className="list-gropu-item">{item}</li>
// // //    ))}
// // //    </ul>
// // //    </>
// // //   )
// // // }














// // // ------------------Conditional rendering---------------------------------3hr : 25min--------------------
// // // import React from "react";
// // // import "./App.css";

// // // export function App() {

// // //   let foodItems = ['Dal', 'Green Veg', 'roti', 'Salad', 'Milk'];
// // // //let foodItems = [];
// // //   // if(foodItems.length === 0) {
// // //   //   return <h3>I am still hungry.</h3>
// // //   // }

// // //   return (
// // //    <>
// // //    <h1>Healthy Foods</h1>

// // //    {/* {foodItems.length === 0 ? <h3>I am still Hungry.</h3> : null} */}
// // //    {foodItems.length === 0 && <h3>I am Hungry.</h3>}
// // //    <ul className="list-group">
// // //     {foodItems.map((item) => (
// // //       <li key={item} className="list-gropu-item">{item}</li>
// // //    ))}
// // //    </ul>
// // //    </>
// // //   )
// // // }









// // // --------------------------Props----------------------------------

// // // import React from "react";
// // // import "./App.css";
// // // import FoodItems from './props/FoodItems';
// // // import ErrorMessage from "./props/ErrorMessage";
// // // import { Container } from "./props/Container";
// // // import { FoodInput } from "./props/FoodInput";

// // // export function App() {
// // //   let items = ['Dall', 'Green Veg', 'roti', 'Salad', 'Milk'];
// // // let show = "ckdf";

// // //   return (
// // //     <>
// // //    <Container>
// // //    <h1 className="food-heading">Healthy Foods</h1>
// // //    <FoodInput></FoodInput>
// // //    <p>{show}</p>
// // //    <FoodItems item ={items}/>
// // //    <ErrorMessage item ={items}/>
// // //    </Container>


// // // {/* <Container>
// // //     <p>Above is the list of healthy foods that are good for your health and well being.</p>
// // // </Container> */}

// // //    </>
// // //   )
// // // }














// // // ----------------------To-do-App---------------------------------
// // // -----------In -> codesandbox.io----------------------------

// // // import "./App.css";
// // // import { AppName } from "./ToDoApp/Appname";
// // // import { Addtodo } from "./ToDoApp/Addtodo";
// // // import { TodoItem } from "./ToDoApp/TodoItem";
// // // import TodoItems from "./ToDoApp/TodoItems";
// // // import { useState } from "react";
// // // import WelcomeMessage from "./ToDoApp/WelcomeMessage";
// // // // import { TodoItemsContext } from "./store/todo-items-store";


// // // export function App() {
// // // // -----making array Object-------

// // //         const [todoItems, setTodoItems] = useState([]);

// // //         const handleNewItem = (itemName, itemDueDate) => {
// // //           //  console.log(`New Item Addes: ${itemName} Date:${itemDueDate}`)
// // //            const newTodoItems = [...todoItems, {name:itemName, dueDate: itemDueDate}]
// // //            setTodoItems(newTodoItems);
// // //         };


// // //         const handledeleteItem = (todoItemName) => {
// // //           const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
// // //           setTodoItems(newTodoItems);
// // //               // console.log(`Item Deleted: ${todoItemName}`);
// // //         }




// // //     return (

// // //         // <TodoItemsContext.Provider>
// // //         <div id="todo-co">

// // //             <AppName />
// // //             <Addtodo onNewItem={handleNewItem}/>
// // //             {todoItems.length === 0 &&<WelcomeMessage />}
// // //             <TodoItems todoItems={todoItems}
// // //             onDeleteClick={handledeleteItem}/>

// // //         </div>
// // //         // </TodoItemsContext.Provider>
// // //     );
// // // }







// --------------value={name} in input field to clear the input field--------------
// // //--todo app--
// // // import React from "react";
// // // import { useState } from "react";
// // // import { useEffect } from "react";

// // // export function App() {
// // //   const[task, setTask] = useState("");
// // //    const[res, setRes] = useState([]);


// // //   function handleSubmit(e) {
// // //     e.preventDefault();
// // //    console.log(task);
// // //    setRes([...res, task]);
// // //    setTask("");
// // //   }


// // //   function handleDelete() {
// // //      console.log("delete");
// // //      setRes();
// // //   }
// // //     return(
// // //         <div>
// // //             <h2>To-do</h2>
// // //             <br /><br /> 

// // //             <form onSubmit={handleSubmit}>
// // //             Enter Task:<input type="text" onChange={(e) => setTask(e.target.value)}/>
// // //             <button type="submit" style={{margin:"5px"}}>Add</button>
// // //             </form>


// // // {res && (
// // //     <div>

// // //   {res.map((it, idx) => (
// // //     <ul>
// // //         <li key={idx}>{it} 
// // //         <button onClick={handleDelete}>X</button></li> 
       
// // //     </ul>
// // //   ))}   
// // //   </div>
// // // )}        
// // //  </div>
// // //   )
// // // }


















// // //----------------------Project--Calculator--------------------------------
// // // import './App.css';
// // // import { Display } from './calculator/Display';
// // // import {ButtonContainer} from './calculator/ButtonsContainer';
// // // import { useState } from 'react';

// // // export function App() {

// // //   const [calVal, setCalVal] = useState("");
// // //   const onButtonClick = (buttonText)  => {
// // //    if(buttonText === 'C') {
// // //    setCalVal("");
// // //    } else if(buttonText === '=') {
// // //       const result = eval(calVal) // eval (method) pass a string // eval => automatically calculate a result and store 
// // //       setCalVal(result);
// // //    } else {
// // //   const newDisplayValue = calVal + buttonText;
// // //   setCalVal(newDisplayValue);
// // //    }
// // //   }

// // //     return (
// // //         <center>
// // //         <div id="calculator">
// // //             <Display displayValue={calVal}/>
// // //              <ButtonContainer onButtonClick={onButtonClick}/> 
// // //         </div>
// // //         </center>
// // //     )
// // // }

// // //----------------End--------------------------------














// // //---------------------class Compinent-------------------
// // // import React, { Component } from "react";
// // // class ComponentName extends Component {
// // //     render() {
// // //       return (
// // //         <div>
// // //           <h1>Heading</h1>
// // //         </div>
// // //       );
// // //     }
// // //   }
  












// // //---------------Start----------------------------
// // //-------------------state--------------------------
// // // This not updata because this type not work inthe react.

// // // import './App.css';
// // // export function App() {

// // // let data = "anil";
// // //   function updataData() {
// // //       data = "siddhu";
// // //       alert(data);
// // //   }

// // //   return (
// // //     <div className='App'>
// // //     <h1>{data}</h1>
// // //     <button onClick={updataData}>UpdataData</button>
// // //     </div>
// // //   )
// // // }



// // //___________ In React, state is private to the component where it is declared. This means:
// // // __________________It cannot be accessed directly by other components.

// // // ---------------again Using state------------------------------
// // // import './App.css';
// // // import {useState} from 'react'; // useState is a Hook that allow to maintain state and update state

// // // export function App() {

// // //   const [data, setData] = useState(0); // [data, updataData]

// // //   function updataData() {
// // //     setData(data+1);
// // //   }

// // //   function decreaseData() {
// // //     setData(data - 1);
// // //   }

// // //   return (
// // //     <div>
// // //       <h1>{data}</h1>
// // //       <button onClick={updataData} style={{margin:"10px", padding:"10px"}}>+</button>
// // //       <button onClick={decreaseData} style={{padding:"10px"}}>-</button>
// // //     </div>
// // //   )
// // // }
// // // //--------------------End-------------------------------







// // //---------------start------------------------
// // //----------------------Default and Dynamic props-------------------------
// // // Example of Default Props and Dynamic Props in a Function Component

// // // import React from "react";

// // // function Greeting({ name = "Guest" }) {
// // //   return (
// // //     <div>
// // //       <h1>Hello, {name}!</h1>
// // //     </div>
// // //   );
// // // }

// // // export default Greeting;
// // // import React from "react";
// // // import Greeting from "./Greeting";

// // // function App() {
// // //   return (
// // //     <div>
// // //       <Greeting /> {/* Uses default prop "Guest" */}
// // //       <Greeting name="Rajendra" /> {/* Uses dynamic prop "Rajendra" */}
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // //----------end---------------------------------










// // //9 : 44 minutes



// // //-------------------------Start----------------------------
// // //------------------------Social Media---------------------------------

// // // import './App.css';

// // // export function App() {
// // //     return (
// // //         <>
// // //         <h1>Social Media</h1>
// // //         </>
// // //     )
// // // }
// // //----------------------Pending-------------------------

// // // --------------------------End----------------------------------









// // //--------------------UseEffect Hook-----------------

// // // import './App.css';
// // // import React from 'react';
// // // import { useEffect, useState } from 'react';


// // // export function App() {
// // //     const [count, setCount] = useState(0);

// // //     // -----------------Using a UseEffect Hook--------------------
// // //     useEffect(() => {
// // //         console.warn("useEffect");
// // //     })

// // //     // Hooks is not used in the class components
// // //     function handleCounter() {
// // //         // console.log(count);
// // //         setCount(count + 1);
// // //     }
// // //     return (
// // //         <div className='App'>
// // //             <h1>useEffect Hooks: {count}</h1>
// // //             <button onClick={handleCounter}>Updata Counter</button>
// // //         </div>
// // //     )
// // // }








// // //--------------UseEffect hooks------------------------------
// // // import './App.css';
// // // import { useState } from 'react';
// // // import React from 'react';
// // // import { useEffect } from 'react';

// // // export function App() {
// // // const [data, setData] = useState(10);
// // // const [count, setCount] = useState(100);


// // //     useEffect(()=> {
// // //         console.warn("useEffect called for data");
// // //     }, [data]); // only useEffect used in the data


// // //     useEffect(()=> {
// // //   alert("count increase" + count);
// // //         // console.warn("useEffect called for count");
// // //     }, [count]); // only useEffect used in the count

// // //     function handleCount() {
// // //  setCount(count+1);
// // //     }

// // //     function handleData() {
// // //         setData(data+1);
// // //     }

// // //     return (
// // //         <div className='App'>
// // //             <h1>Count: {count}</h1>
// // //             <h1>Data : {data}</h1>
// // //             <button onClick={handleCount}>Update Count</button>
// // //             <button onClick={handleData}>Updata Data</button>
// // //         </div>
// // //     )
// // // }
// // //----------------end-----------------------------------













// // //-----------------Fetch API Using a useEffect Hooks-----------------------------
// // // import React from "react";
// // // import UseEffectAPI from './useEffectHook/UseEffectApi';

// // // export function App()  {
// // //     return (
// // //         <>
// // //         <UseEffectAPI />
// // //         </>
// // //     )
// // // }


// // //---------------------------End-----------------------












// // //-------------------Start--------------------------------
// // //-------------------Quiz App----------------------------
// // // import React, { useState } from "react";
// // // import quizData from './quizApp/question';

// // // export function App() {
// // //     const [currentQn, setcurrentQn] = useState(0);
// // //     const [userAns, setUserAns] = useState([]);
// // //     const [score, setScore] = useState(0);
// // // const handleAnsClick = (selectOption) => {
// // //     const isCorrect = quizData[currentQn].correctAnswer === selectOption;
// // //     setUserAns([...userAns, {question : currentQn, answer : selectOption}]);
// // //     if(isCorrect) {
// // //         setScore(score+1);
// // //     }

// // //     setcurrentQn(currentQn + 1);

// // // }

// // // const resetQuiz = () => {
// // //     setcurrentQn(0);
// // //     setUserAns([]);
// // //     setScore(0);

// // // }
// // //     return (
// // //         <center>
// // //         <div className="quiz">
// // //             {score}
// // //             <h2>Quiz App</h2>
// // //             {
// // //                 currentQn < quizData.length ? (
// // //                  <div>
// // //                   <h2 style={{color:"green"}}>{quizData[currentQn].question}</h2>
// // //                   <ol>
// // //                     {quizData[currentQn].options.map((option, index) => (
// // //                         <li style= {{cursor:"pointer", margin:"10px", color: "blue"}} key={index} onClick={() => handleAnsClick(option)}>{option}</li>
// // //                     ))}
// // //                   </ol>
// // //                  </div>
// // //                 ):(
// // //                 <div className="complete">
// // //                     <h2>quiz Completed !</h2>
// // //                     <p>Your Score: {score} / {quizData.length}</p>
// // //                     <button onClick={resetQuiz}>Reset</button>
// // //                 </div>
// // //                 )
// // //             }
        
        
// // //         </div>
// // //         </center>
// // //     )
// // // }

// // // //-----------------end---------------------------
































// // //----------------start-----------------------------
// // //----------------quiz App-------------------------------------------
// // // import React, { useState } from "react";
// // // import quizData from "./quizApp/question";

// // // export function App() {
// // //     const [currQn, setCurrQn] = useState(0);
// // //     const [score, setScore] = useState(0);
// // //     const [showScore, setShowScore] = useState(false);
// // //     const [selectedAns, setSelectedAns] = useState(null);

// // //     const handleAns = (option) => {
// // //         setSelectedAns(option);
        
// // //         setTimeout(() => {
// // //             if (option === quizData[currQn].correctAnswer) {
// // //                 setScore(score + 1);
// // //             }
            
// // //             const nextQn = currQn + 1;
// // //             if (nextQn < quizData.length) {
// // //                 setCurrQn(nextQn);
// // //                 setSelectedAns(null);
// // //             } else {
// // //                 setShowScore(true);
// // //             }
// // //         }, 500);
// // //     };

// // //     return (
// // //         <center>
// // //             {showScore ? (
// // //                 <h2>Your score: {score} / {quizData.length}</h2>
// // //             ) : (
// // //                 <>
// // //                     <h2>{quizData[currQn].question}</h2>
// // //                     {quizData[currQn].options.map((opt, i) => (
// // //                         <button 
// // //                             key={i} 
// // //                             onClick={() => handleAns(opt)} 
// // //                             style={{ backgroundColor: selectedAns === opt && opt === quizData[currQn].correctAnswer ? "blue" : "gray" }}
// // //                         >
// // //                             {opt}
// // //                         </button>
// // //                     ))}
// // //                 </>
// // //             )}
// // //         </center>
// // //     );
// // // }
// // // //------------end---------------------------










































// // //----------Todo App------------------
// // // import './App.css';
// // // import { useState } from 'react';
// // // import { AppName } from './todoApp1/Appname';
// // // import { AddToDo } from './todoApp1/AddToDo';
// // // import { TodoItems } from './todoApp1/TodoItems';

// // // export function App() {
// // //   const [todoItems, setTodoItems] = useState([]);

// // //   const handleNewItem = (itemName) => {
// // //     const newTodoItems = [...todoItems, { id: Date.now(), name: itemName, completed: false }];
// // //     setTodoItems(newTodoItems);
// // //   };

// // //   return (
// // //     <>
// // //       <AppName />
// // //       <AddToDo onNewItem={handleNewItem} />
// // //     </>
// // //   );
// // // }











// // //---------------Todo App------------------------------
// // // Link-> YT-> https://www.youtube.com/watch?v=zQFzFsbRiB8
// // // import './App.css';
// // // import { useState } from 'react';


// // // export function App() {

// // //     let [todoList, setTodoList] = useState([]);
    


// // //     let saveToDoList = (event) => {
// // //         let toname= event.target.toname.value;
// // //     //    alert(toname);
// // //     if(!todoList.includes(toname)) {
// // //         let finaltodoList = [...todoList, toname];
// // //         setTodoList(finaltodoList);

// // //     }  else {
// // //         alert('todo already exists');
// // //     }
// // //        event.preventDefault();
// // //     }



// // //     let list = todoList.map((value, index) => {
// // //         return (
// // //             <ToDoListItem key={index} indexNumber={index} value={value}
// // //             todoList={todoList} setTodoList={setTodoList}/>
// // //         )
// // //     })



// // //      return (
// // //         <div>
// // //         <h2>To Do List</h2>

// // //         <form onSubmit={saveToDoList}>
// // //             <input type="text" name='toname' />
// // //             <button>Save</button>  
// // //         </form>



// // //         <div className='outerDiv'>
// // //             <ul>
// // //            {list}
// // //             </ul>
// // //         </div>
// // //         </div>
// // //      )
// // // }
 


// // // function ToDoListItem ({value, indexNumber, todoList, setTodoList}) {
// // //     let deleteRow = () => {
// // //     // alert(indexNumber);
// // //     let finalData = todoList.filter((v, i) => i != indexNumber);
// // //     setTodoList(finalData);

// // //     }


// // //     return (
// // //         <li>{indexNumber+1} {value} <span onClick={deleteRow}>&times;</span></li>
// // //     )
// // // }
























// // // import { FeedBackForm } from "./assignmentReact/feedBackForm";
// // // import React from "react";
// // // import { useState } from "react";

// // // export function App() {


// // //     return (  
// // //         <>
// // //         <FeedBackForm /> 

// // //             <form action="">
// // //         Name: <input type="text" id="name" placeholder="Enter your name.."/> <br></br> <br></br>

// // //         Select: <select name="" id="">
// // //             <option value="Apple">Apple</option>
// // //             <option value="Cat">Cat</option>
// // //             <option value="Dog">Dog</option>
// // //         </select>

// // // <br /><br />

// // //         <textarea name="textarea" id="txt"></textarea>


// // //         <br /><br />
// // //         Rating: <input type="radio" /> 
// // //         <input type="range"  min={1} max={5}/>
// // //             </form>
// // // <br /><br />

// // // <button>Submit</button>
// // //         </>
// // //     )
// // // }































// //-------------------Start------------------
// //-------------Handling Loading state-------------------

// //-------------------End----------------------

















// //--------------------Start----------------
// //------------------useCallBackHook---------------------


// // import { Fragment, useCallback, useState } from "react";
// // import  ToDoList from "./useCallBackHook/ToDoList";

// // export  function App() {
// //   const[todo, setToDo] = useState([]);
// //   const[cnt, setCnt] = useState(0);


// //   function handleInc() {
// //     // setCnt(cnt + 1); // or
// //     setCnt(prevstate => prevstate + 1);
// //   }

// // //------------useCallBack------------------
// //   const handleAddNoeToDo = useCallback(() => {
// //   console.log("Some Operation");
// //   //array merged
// //   }, [todo]);


// //   return (
// //     <Fragment>
// //       <div className="container mt-5">
// //           <div className="col-md-12 text-center">
// //     <h3>Learn Use Call Back Hook</h3>
// //     <ToDoList todo={todo} addNewToDo={handleAddNoeToDo}/>

// //     <h5 className="mt-3">Count value is: {cnt}</h5>
// //     <button className="btn btn-primery" onClick={handleInc}>+</button>

// //           </div>
// //       </div>
// //     </Fragment>
// //   )
// // }
// //--------------End--------------------------























// //------------Start------------------
// //--------------------------Routing--------------------------------------
// import { Home } from "./reactRouter2025/Home";

// export function App() {
//   return (
//     <>
//       <h2>Router Router 7 tutorial</h2>
//       <Home />
//     </>
//   );
// }


// ---------------Done in Thapa Technical Folder--------------------------


 //--------------End----------------------














// //---------Assignment---------------
// //-----Personal finance tracker-----
// import { useState } from "react";



// export function App() {
//   const [type, setType] = useState("income");
//   const [amount, setAmount] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [transactions, setTransactions] = useState([]);
//   const [showSummary, setShowSummary] = useState(false); 

//   const handleForm = (e) => {
//     e.preventDefault();
//     if (!amount || isNaN(amount) || !description || !category) {
//       alert("Please fill all fields correctly.");
//       return;
//     }

//     const newTransaction = {
//       type,
//       amount: parseFloat(amount),
//       description,
//       category,
//     };

//     setTransactions([...transactions, newTransaction]);
//     setAmount("");
//     setDescription("");
//     setCategory("");
//     setShowSummary(true); 
//   };


//   const income = transactions
//     .filter((t) => t.type === "income")
//     .reduce((sum, t) => sum + t.amount, 0);
//   const expense = transactions
//     .filter((t) => t.type === "expense")
//     .reduce((sum, t) => sum + t.amount, 0);
//   const savings = income - expense;

  

//   return (
//     <>
//       <PersonalFTracker />

//       <form id="form" onSubmit={handleForm} style={{ marginTop: "20px" }}>
//         <label>
//           Type:
//           <select value={type} onChange={(e) => setType(e.target.value)}>
//             <option value="income">Income</option>
//             <option value="expense">Expense</option>
//           </select>
//         </label>
//         <br /><br />

//         <label>
//           Amount:
//           <input
//             type="text"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </label>
//         <br /><br />

//         <label>
//           Description:
//           <input
//             type="text"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </label>
//         <br /><br />

//         <label>
//           Category:
//           <input
//             type="text"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </label>
//         <br /><br />

//         <button type="submit">Add Transaction</button>
//       </form>

//       {showSummary && (
//         <>
//           <hr />
//           <h3>Summary</h3>
//           <p><b>Income:</b> ${income}</p>
//           <p><b>Expense:</b> ${expense}</p>
//           <p><b>Net Savings:</b> ${savings}</p>

//           <hr />
//           <h3>All Transactions</h3>
//           <ul>
//             {transactions.map((t, i) => (
//               <li
//                 key={i}
//                 style={{ color: t.type === "income" ? "green" : "red" }}
//               >
//                 {t.description} - ${t.amount} ({t.category})
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </>
//   );
// }

















//----------------------Axios-----------------------
//------------Start-------------------
// import { Post } from "./AXIOSPOSTREQUEST/Post";

// export function App() {
//     return(
//         <>
//         <Post />
//         </>
//     )
// }

//------------end-----------------


















//--------assignment 9-------------------
// import { ToggleMessage} from "./endTermPracticing/ass9";
// //------------------Toggle Message-------------------
// export function App() {
//     return (
//         <>
//             <ToggleMessage /> 
//         </>
//     );
// }




// //-------------End-------------------

// //-------------Start-------------------
// //-------------Assignment 10-------------------
// import { useState } from "react";
// import { TextInputdisplay } from "./endTermPracticing/ass10";
// export function App() {
//    return (
//     <>
//     <TextInputdisplay />
//     </>
//    )
// }




//start-------------------
//assignment 11
// import {ClickTracker} from "./endTermPracticing/ass11"
// export function App() {
//     return (
//         <>
//         <ClickTracker />
//         </>
//     )
// }
//-------------End-------------------







//---start-------------------
//assignment 12
// import { SimpleForm } from "./endTermPracticing/ass12";

// export function App() {
//     return (
//         <>
//         <SimpleForm />
//         </>
//     )
// }















//--start-------------------
//assignment 13
// import { CharCounter } from "./endTermPracticing/ass13";

// export function App() {
//     return (
//         <>
//         <CharCounter />
//         </>
//     )
// }
//--End-------------------










//--start-------------------
//assignment 14
// import { UserProfile } from "./endTermPracticing/ass14";

// export function App() {
//     return (
//         <>
//         <UserProfile />
//         </>
//     )
// }


//--End-------------------









//-----start-------------------
//assignment 15
// import { PersistentInput } from "./endTermPracticing/ass15";
// import { useState } from "react";

// export function App() {
//     const[trackText, setTrackText] = useState("");
//     return (
//         <>
// <PersistentInput/>
//         </>
//     )
// }









//start-----------------
//assignment 16
// import { PostsFetcher } from "./endTermPracticing/ass16";

// export function App() {
//     return (
//         <>
//         <PostsFetcher />
//         </>
//     )
// }









// import { ToggleTheme } from "./endTermPracticing/ass17"
// export function App() {
//     return (
//         <>
//        <ToggleTheme/>
//         </>
//     )
// }









