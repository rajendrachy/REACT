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
//     console.log(res);
//     console.log(res.data);
    

//     res.data.forEach(ele => {
//         console.log(ele.id);
//         console.log(ele.title);
//         console.log(ele.body);
//     })
//   })
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
