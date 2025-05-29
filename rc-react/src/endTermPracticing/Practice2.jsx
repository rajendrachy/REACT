// // Function that returns a Promise and logs the number after 1 second
// function countdown(number) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(number);
//         resolve();
//       }, 1000);
//     });
//   }
  
//   // Chain countdowns from 3 to 1, then log "Lift off!"
//   countdown(3)
//     .then(() => countdown(2))
//     .then(() => countdown(1))
//     .then(() => {
//       console.log("Lift off!");
//     });
  