// Define the wait function
function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  // Call the wait function with 2000 milliseconds
  wait(2000).then(() => {
    console.log("Waited for 2 seconds");
  });

  
  
  