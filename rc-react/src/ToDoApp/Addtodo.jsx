// import { useState, useRef } from "react";

// export function Addtodo({onNewItem}) {

//     const [todoName, setTodoName] = useState("");
//     const [dueDate, setDueDate] = useState("");
//     const noOfUpdates = useRef();

//     const handleNameChange = (event) => {
//         //   console.log(event.target.value);
//         setTodoName(event.target.value);
//         noOfUpdates.current += 1;
//     }

//     const handleDataChange = (event) => {
// //    console.log(event.target.value);
// setDueDate(event.target.value);
// console.log(`noOfUpdates are: ${noOfUpdates.current}`)
//     }

// const handleAddButtonClick = () => {
//    onNewItem(todoName, dueDate);
//    setDueDate("");
//    setTodoName("");
// }

//     return (
//         <center>
//       <div style={{ display: "flex", alignItems: "center"}}>
//         <div>
//           <input type="text" 
//           placeholder="Enter todo here" value={todoName}
//           style={{width:"100%", height:"20px", outline: "none", pointer:"cursor"}} onChange={handleNameChange}/>
          
//         </div>
//         <div>
//           {/* <input type="date" value={dueDate} style={{margin:"10px"}} onChange={ handleDataChange}/> */}
//         </div>
//         <div>
//           <button type="button" style={{margin: "10px"}} id="add" onClick={handleAddButtonClick}>ADD</button>
//         </div>
//       </div>
//       </center>
//     );
//   }


  

  
  