// import { useEffect, useState } from "react";

// export function ToggleTheme() {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   function toggleTheme() {
//   if (theme === "light") {
//     setTheme("dark");
//   } else {
//     setTheme("light");
//   }
// }


//   return (
//     <>
//       <h2>Current Theme: {theme}</h2>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </>
//   );
// }





