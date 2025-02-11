// LINK -> https://reqres.in/  // WEBSITE to get a post api

document.getElementById("btn").addEventListener('click', makerequest); // this should not comment in all the code




// ------------Promise then / -> Post data in the server-----------------------
// function makerequest(e) {
//     e.preventDefault();
//     let namee = document.getElementById("name").value;
//     let jobs = document.getElementById("job").value;

//     console.log("Button Click");


//     const config = {
//         method : 'POST',
//         url : 'https://reqres.in/api/users',
//         headers : {
//             'Content-Type':'application/json'
//         },
//         data : JSON.stringify({name: namee, job: jobs}),
//     }

//     axios(config).then((res) => {
//         console.log(res.data);
//     }).catch ((err) => {
//         console.log(err);
//     })
// }






// -------------async and await------------------------------
// async function makerequest(e) {
//     e.preventDefault();
//     let namee = document.getElementById("name").value;
//     let jobs = document.getElementById("job").value;

//     console.log("Button Click");

//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: JSON.stringify({ name: namee, job: jobs })
//     };

//     const res = await axios.post('https://reqres.in/api/users', config.data, config);
//     console.log(res.data);
// }









// -----------async and await / Error Handling-------------------\
// async function makerequest(e) {
//     e.preventDefault();
//     let namee = document.getElementById("name").value;
//     let jobs = document.getElementById("job").value;

//     console.log("Button Click");

//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: JSON.stringify({ name: namee, job: jobs })
//     };

//     try {
//         const res = await axios.post('https://reqres.in/api/users', config.data, config);
//         console.log(res.data);
//     } catch (err) {
//         console.error("Error:", err.response ? err.response.data : err.message);
//     }
// }






// ----------shown in Browser-------------------
// async function makerequest(e) {
//     e.preventDefault();
//     let namee = document.getElementById("name").value;
//     let jobs = document.getElementById("job").value;

//     console.log("Button Click");

//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: JSON.stringify({ name: namee, job: jobs })
//     };

//     try {
//         const res = await axios.post('https://reqres.in/api/users', config.data, config);
//         let resultDiv = document.getElementById("result");
//         let responseData = res.data;

//         resultDiv.innerHTML = ""; // Clear previous results

//         Object.entries(responseData).forEach(([key, value]) => {
//             resultDiv.innerHTML += `<p>${key}: ${value}</p>`;
//         });

//     } catch (err) {
//         document.getElementById("result").innerHTML = `<p>Error: ${err.response ? err.response.data.error : err.message}</p>`;
//     }
// }








// async function makerequest(e) {
//     e.preventDefault();
//     let namee = document.getElementById("name").value;
//     let jobs = document.getElementById("job").value;

//     console.log("Button Click");

//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: JSON.stringify({ name: namee, job: jobs })
//     };

//     try {
//         const res = await axios.post('https://reqres.in/api/users', config.data, config);
//         let resultDiv = document.getElementById("result");

//         resultDiv.innerHTML = ""; // Clear previous results

//         Object.entries(res.data).forEach(ele => {
//             resultDiv.innerHTML += `<p>${ele[0]}: ${ele[1]}</p>`;
//         });

//     } catch (err) {
//         document.getElementById("result").innerHTML = `<p>Error: ${err.response ? err.response.data.error : err.message}</p>`;
//     }
// }



