// import React from "react";
// import { useState, useEffect } from "react";

// const UseEffectAPI = () => {
//     const [todos, setTodos] = useState(null);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res) => res.json())
//     .then((data) => {
//          console.log(todos);
//          console.log(data);
//        setTodos(data);
//     })

//     }, [])

//     return (
//         <>
//         <h2>Data</h2>
//         {todos && todos.map((todo) => {
//         return <p key={todo.id}>{todo.title}</p>
    
//         })
//     }
//         </>
//     );
// };
// export default UseEffectAPI;
 
