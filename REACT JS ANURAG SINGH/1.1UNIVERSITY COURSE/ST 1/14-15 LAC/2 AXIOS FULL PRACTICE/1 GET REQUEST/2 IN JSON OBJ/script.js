//----------------GET Method--------------------------

document.getElementById("btn").addEventListener('click', makerequest); // this should not comment in all the code

// function makerequest() {
//   console.log('Button click');
//    config = {
//     method : 'get',
//     url : "data.json",
//   }

//   const promiseObj = axios(config);
//   promiseObj.then((res) => {
//     console.log(res);
//     console.log(res.data.name);
//     console.log(res.data.roll);
//   })
// }








// Or------------------Get Method---------------------------

// function makerequest() {
//   console.log('Button click');
//   config = {
//     method : 'get',
//     url : 'data.json',
//   }

//  axios(config)
// .then((res) => {
//     console.log(res);
//     console.log(res.data); 
//     console.log(res.data.name);

//   })
// }



//---------or---Short for Get request Only-----------

// function makerequest() {
//   console.log('Button click');
 

//  axios.get('data.json') // get is bydefault not need to write GET
//  .then((res) => {
//     console.log(res);
//     console.log(res.data); // Hello, Rajendra chaudhary
//   })
// }






//--------------Error Handling------------------
// function makerequest() {
//   console.log('Button click');
 

//  axios.get('data.json')
//  .then((res) => {
//     console.log(res);
//     console.log(res.data); 
//   }).catch((err) => {
//     console.log(err);
//   }).then(()=> {
//     console.log("clean"); 
//   })
// }











//-------------Showing data In the Browser------------------
// function makerequest() {
//   console.log('Button click');
 

//  axios.get('data.json')
//  .then((res) => {
//     console.log(res);
//     console.log(res.data); // Hello, Rajendra chaudhary
//     document.getElementById('divdata').innerText = res.data.name;
//   }).catch((err) => {
//     console.log(err);
//   }).then(()=> {
//     console.log("clean"); // after catch the then always exexute
//   })
// }



//---------------Practice----------------
// function makerequest() {
//   console.log("Button Clicked");

//   axios.get("data.json")
//   .then((res) => {
//     // console.log(res);
//     console.log(res.data);
//     console.log(res.data.name);


//     const result = document.querySelector("#divdata");
//     for (let key in res.data) {
//       const p = document.createElement("p");
//       p.textContent = `${key}: ${res.data[key]}`;
//       result.appendChild(p);
//   }

//   })
// }







// ---------------async and await----------------------
// async function makerequest() {
//   console.log('Button click');

//   config = {
//     method : 'get',
//     url : 'data.json',
//   }

//   const res = await axios(config);
//   console.log(res);
//   console.log(res.data.roll);
//   const result = document.getElementById('divdata')
//   result.innerText = res.data.roll;
// }



// -------------------------Practice-------------------------------
//
// const res = document.querySelector('#divdata');
// async function makerequest() {
//   console.log("Button Clicked");

//   config = {
//     method : "get",
//     url : 'data.json',
//   }

//   const response = await axios(config);
//   console.log(response);
//   console.log(response.data);

//   for(let key in response.data) {
//     const p = document.createElement('p');
//     p.innerText = `${key} : ${response.data[key]}`;
//     res.appendChild(p);
//   }
  
// }

// ______________________________________________________________
 

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
//   try {
//     console.log('Button click');
//   const res = await axios.get('data.json');
//   console.log(res);
//   console.log(res.data.name);
//   const result = document.getElementById('divdata')
//    result.innerText = res.data.name;
//   } catch(err) {
//     console.log(err);
//   }
// }

