// -------------Promise / Multiple data------------------------

document.getElementById("btn").addEventListener('click', makerequest); // this should not comment in all the code

// function makerequest() {
//   console.log('Button click');
//    config = {
//     method : 'get',
//     url : "https://jsonplaceholder.typicode.com/posts",
//   }

//   const promiseObj = axios(config);
//   promiseObj.then((res) => {
//     //console.log(res);
//    console.log(res.data);
    

//     res.data.forEach(ele => {
//         console.log(ele.id);
//         console.log(ele.title);
//         console.log(ele.body);
//     })
//   })
// }





//---------------practicing-------------------
// function makerequest() {
//     console.log('Button click');
//     config = {
//         method:"get",
//         url: "https://jsonplaceholder.typicode.com/posts",

//     };

//     const p = axios(config);
//     p.then((res) => {
//         console.log(res);
//         console.log(res.data);

//         const result = document.querySelector("#divdata");;
        
//         res.data.forEach((val) => {
//            const p = document.createElement("p");
//               p.innerHTML = `
//                 <p>User ID: ${val.userId}</p>
//                 <p>Title: ${val.title}</p>
//                 <p>Body: ${val.body}</p>
//                 <hr>
//               `;

//               result.appendChild(p);
//         })
//     })
// }





// const result = document.querySelector("#divdata");

// function makerequest() {
//     console.log("BUtton Clicked");

//     config = {
//         method : "get",
//         url : "https://jsonplaceholder.typicode.com/posts",
//     }

//     axios(config)
//     .then((res) => {
//         //console.log(res);
//         console.log(res.data);


//         res.data.forEach((post) => {
//             const div = document.createElement("div");
//             div.innerHTML = `
//              <p>User ID: ${post.userId}</p>
//                 <p>Title: ${post.title}</p>
//                 <p>Body: ${post.body}</p>
//                 <hr>
//             `;
//             result.appendChild(div);
//         })
//     })
// }






// function makerequest() {
//     console.log('Button click');
//      config = {
//       method : 'get',
//       url : "https://jsonplaceholder.typicode.com/posts",
//     }
  
//     const promiseObj = axios(config);
//     promiseObj.then((res) => {
//       console.log(res);
//       console.log(res.data);
      
//   let output = document.getElementById('allpost');

//       res.data.forEach(ele => {
//           output.innerHTML += 
//           `
//           <div>${ele.id}</div>
//           <div>${ele.title}</div>
//           <div>${ele.body}</div>

//           `;
//       })
//     })
//   }
  





//--------------async and await-------------------
// async function makerequest() {
//     console.log('Button click');

//     const config = {
//         method: 'get',
//         url: "https://jsonplaceholder.typicode.com/posts",
//     };

//     const res = await axios(config);
//     console.log(res);
//     console.log(res.data);

//     let output = document.getElementById('allpost');
//     output.innerHTML = ""; // Clear previous content

//     res.data.forEach(ele => {
//         output.innerHTML += `
//             <div>${ele.id}</div>
//             <div>${ele.title}</div>
//             <div>${ele.body}</div>
//             <br>
//         `;
//     });
// }






//----------async and await / Error Handling--------------------------
// async function makerequest() {
//     console.log('Button click');

//     const config = {
//         method: 'get',
//         url: "https://jsonplaceholder.typicode.com/posts",
//     };

//     try {
//         const res = await axios(config);
//         console.log(res);
//         console.log(res.data);

//         let output = document.getElementById('allpost');
//         output.innerHTML = ""; // Clear previous content

//         res.data.forEach(ele => {
//             output.innerHTML += `
//                 <div>${ele.id}</div>
//                 <div>${ele.title}</div>
//                 <div>${ele.body}</div>
//                 <br>
//             `;
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }



