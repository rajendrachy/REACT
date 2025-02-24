//----------------GET Method--------------------------
//-------------USE Dummy JSON website-------------------------
// LINK -> https://jsonplaceholder.typicode.com/







// -------------------Promise then / Single data------------------
document.getElementById("btn").addEventListener('click', makerequest); // this should not comment in all the code

// function makerequest() {
//   console.log('Button click');
//    config = {
//     method : 'get',
//     url : "https://jsonplaceholder.typicode.com/posts/1",
//   }

//   const promiseObj = axios(config);
//   promiseObj.then((res) => {
//     console.log(res);
//     console.log(res.data.id);
//   })
// }



// function makerequest() {
//     console.log("Button clicked");
//    config = {
//     method : "get",
//     url : 'https://jsonplaceholder.typicode.com/posts/1',
//    }

//    const promiseObj = axios(config);
//    promiseObj.then((res) => {
//     console.log(res);
//     console.log(res.data.body);
//    })
// }










// Or------------------Get Method---------------------------

// function makerequest() {
//   console.log('Button click');
//   config = {
//     method : 'get',
//     url : 'https://jsonplaceholder.typicode.com/posts/1',
//   }

//  axios(config)
// .then((res) => {
//     console.log(res);
//     console.log(res.data.userId); 

//   })
// }



//---------or---Short for Get request Only-----------

// function makerequest() {
//   console.log('Button click');
 

//  axios.get('https://jsonplaceholder.typicode.com/posts/1') // get is bydefault not need to write GET
//  .then((res) => {
//     console.log(res);
//     console.log(res.data); 
//   })
// }


//--------------Error Handling------------------
// function makerequest() {
//   console.log('Button click');
 

//  axios.get('https://jsonplaceholder.typicode.com/posts/1')
//  .then((res) => {
//     console.log(res);
//     console.log(res.data.id); 
//     console.log(res.data.title);

//   }).catch((err) => {
//     console.log(err);
//   }).then(()=> {
//     console.log("clean"); 
//   })
// }









//-------------Showing data In the Browser------------------
// function makerequest() {
//   console.log('Button click');
 

//  axios.get('https://jsonplaceholder.typicode.com/posts/1')
//  .then((res) => {
//     console.log(res);
//     console.log(res.data); 
//     document.getElementById('divdata').innerText = res.data.title;
//   }).catch((err) => {
//     console.log(err);
//   }).then(()=> {
//     console.log("clean"); // after catch the then always exexute
//   })
// }








// ---------------async and await----------------------
// async function makerequest() {
//   console.log('Button click');

//   config = {
//     method : 'get',
//     url : 'https://jsonplaceholder.typicode.com/posts/1',
//   }

//   const res = await axios(config);
//   console.log(res);
//   console.log(res.data.id);
//   const result = document.getElementById('divdata')
//   result.innerText = res.data.id;
//   result.innerText = res.data.title;


// }



//----------------OR---------------------
// async function makerequest() {
//   console.log('Button click');

//   const res = await axios.get('data.json');
//   console.log(res);
//   console.log(res.data.name);
//   console.log(res.data.roll);
//   const result = document.getElementById('divdata');
//   result.innerText = res.data.name;
//   result.innerText = res.data.roll;
// }






//---------async and await error Handling----------------------------

// async function makerequest() {
//     console.log('Button click');

//     const config = {
//         method: 'get',
//         url: 'https://jsonplaceholder.typicode.com/posts/1',
//     };

//     try {
//         const res = await axios(config);
//         console.log(res);

//         const result = document.getElementById('divdata');
//         result.innerHTML = ""; // Clear previous content

//         for (let key in res.data) {
//             result.innerHTML += `${key}: ${res.data[key]} <br>`;
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
















