// import { useState } from "react";
// import { useEffect } from "react";

// export function UserProfile() {
//      const[ans, setAns] = useState([]);
     
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users/1")
//         .then((res) => res.json()) 
//         .then((data) => {
//             // console.log(data);
//             setAns(data);
           
//         }, [])
//     })
//     return (
//         <>
//         <h2>UserProfile Fetch</h2>


//         {ans && (
//             <div>
//                 <p><strong>Name: </strong>{ans.name} </p>
//                 <p><strong>Email: </strong>{ans.email}</p>
//             </div>
//         )}
//         </>
//     )
// }



