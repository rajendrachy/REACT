
// import React from "react";

// export function CurrentTime(){

//     let time = new Date();

//     return (
//         <div>
//           <p id="currTime">This is the current time: {time.toLocaleDateString()}
//              - {time.toLocaleTimeString()}</p>
//         </div>
//     )
// }









// ---------------------Advance version-------------------

// import React, { useState, useEffect } from "react";

// export function CurrentTime() {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTime(new Date());
//         }, 1000);


//         return () => clearInterval(interval); // Cleanup on unmount
//     }, []);

//     return (
//         <div>
//             <p id="currTime">
//                 This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
//             </p>
//         </div>
//     );
// }












