// function delayedMessage(msg, ms, shouldCancel) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         shouldCancel ? reject("Operation cancelled") : resolve(msg);
//       }, ms);
//     });
//   }
  
//   // Test: not cancelled
//   delayedMessage("Hello!", 1000, false)
//     .then(console.log)
//     .catch(console.error);
  
//   // Test: cancelled
//   delayedMessage("Won't show", 1000, true)
//     .then(console.log)
//     .catch(console.error);
  