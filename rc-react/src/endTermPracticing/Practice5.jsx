// // Function to simulate fetching an item with a delay
// function fetchItem(itemName, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Fetched: ${itemName}`);
//       }, delay);
//     });
//   }
  
//   // Fetch items in sequence
//   fetchItem("User", 1000)
//     .then((user) => {
//       console.log(user);
//       return fetchItem("Posts", 2000);
//     })
//     .then((posts) => {
//       console.log(posts);
//       return fetchItem("Comments", 1500);
//     })
//     .then((comments) => {
//       console.log(comments);
//     });
  