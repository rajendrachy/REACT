// import { useEffect, useState } from "react";

// export function PostsFetcher() {
//     const[ans, setAns] = useState([]);
//    const[loading, setLoading] = useState(false);

//     function handleFetch() {
//         console.log("Fetching...");
       
//         setLoading(true);
       

//         fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             setAns(data);
//             setLoading(false);
//         })

//     }

//    return (
//     <>
//     <h2>Fetching Data</h2>
//     <button onClick={handleFetch}>Load Posts</button>

// {loading && <p>Loading...</p>}


//     {!loading && ans.length > 0 && (
//         <div>
//             {ans.map((val) => (
//                 <div key={val.id}>

//                     <p style={{color:"red"}}>{val.id}</p>
//                    <p >{val.userId}</p>
//                     <p style={{color: "blue"}}><strong>Body:</strong> {val.body}</p>
//                     <p> <strong>Title: </strong>{val.title}</p>
//                     <hr />
//                 </div>
//             ))}
//         </div>
//     )}
//     </>
//    )

    
// }
   



    