// import { useState } from "react";

// export function SimpleForm() {
//     const[name, setName] = useState("");
//      const[ans, setAns] = useState(null);

//     function handleSubmit(e) {
//         e.preventDefault();
        
//         setAns({name});
//       setName("");
//     }


//     return (
//         <>
//         <h2>SimpleForm Submission</h2>

//         <form>
//        Name: <input type="text" value={name} placeholder="Enter Name: "  onChange={(e) => setName(e.target.value)}/><br /><br />
//        <button onClick={handleSubmit}>Submit</button>
//         </form>

        
//         {ans && (
//             <div>
//                 <p>Enter Name: {ans.name}</p>
//             </div>
//         )}
//         </>
//     )
// }
