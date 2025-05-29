// import { useState } from "react";
// import { useEffect } from "react";

// export function PersistentInput() {
//     const[text, setText] = useState("");

// useEffect(() => {
//     const saved = localStorage.getItem("saveText");
//     if(saved !== null) {
//         setText(saved);
//     }
// }, []);

//     useEffect(() => {
//         localStorage.setItem("saveText", text);
//     }, [text])
//     return (
//         <>
//         <h2>Local Storage</h2>

//         <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something...."/>
//         </>
//     )
// }