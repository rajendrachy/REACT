// LINK -> https://reqres.in/  // WEBSITE to get a post api

document.getElementById("btn").addEventListener('click', makerequest); // this should not comment in all the code




// ------------Promise then-----------------------
// function makerequest() {
//     console.log("Button Click");

//     const config = {
//         method : 'POST',
//         url : 'https://reqres.in/api/users',
//         headers : {
//             'Content-Type':'application/json'
//         },
//         data : '{"name" : "Rajendra", "job" : "Web Dev"}' // data should be in the JSON
//     }

   
//     axios(config).then((res) => {
//         console.log(res.data);
//     }).catch ((err) => {
//         console.log(err);
//     })
// }








//-------or-----------
// function makerequest() {
//     console.log("Button Click");

//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: {
//             name: "Rajendra",
//             job: "Web Dev"
//         }
//     };


//     axios.post('https://reqres.in/api/users', config.data, config)
//         .then((res) => {
//             console.log(res.data);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }










//-----------async and await----Error Handling-------------------

// async function makerequest() {
//     console.log("Button Click");

//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: {
//             name: "Rajendra",
//             job: "Web Dev"
//         }
//     };

//     try {
//         const res = await axios.post('https://reqres.in/api/users', config.data, config);
//         console.log(res.data);
//     } catch (err) {
//         console.log(err);
//     }
// }



//----------------async and await---------------------
async function makerequest() {
    console.log("Button Click");

    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            name: "Rajendra",
            job: "Web Dev"
        }
    };

    const res = await axios.post('https://reqres.in/api/users', config.data, config);
    console.log(res.data);
}

