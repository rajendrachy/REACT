//----------------GET Method--------------------------

document.getElementById("btn").addEventListener('click', makerequest); // This should not comment in all the code

// function makerequest() {
//   console.log('Button click');
//   config = {
//     method : 'get',
//     url : 'data.txt',
//   }

//   const promiseObj = axios(config);
//   promiseObj.then((res) => {
//     console.log(res);
//     console.log(res.data); // Hello, Rajendra chaudhary
//     console.log(res.status)
//   })
// }













// Or------------------Get Method---------------------------




// function makerequest() {
//   console.log('Button click');
//   config = {
//     method : 'get',
//     url : 'data.txt',
//   }

//  axios(config)
// .then((res) => {
//     console.log(res);
//     console.log(res.data); // Hello, Rajendra chaudhary
//   })
// }



//---------or---Short for Get request Only-----------

// function makerequest() {
//   console.log('Button click');
 

//  axios.get('data.txt') // get is bydefault not need to write GET
//  .then((res) => {
//     console.log(res);
//     console.log(res.data); // Hello, Rajendra chaudhary
//   })
// }


//--------------Error Handling------------------
// function makerequest() {
//   console.log('Button click');
 

//  axios.get('data1.txt')
//  .then((res) => {
//     console.log(res);
//     console.log(res.data); // Hello, Rajendra chaudhary
//   }).catch((err) => {
//     console.log(err);
//   }).then(()=> {
//     console.log("clean"); // after catch the then always exexute
//   })
// }









//-------------Showing data In the Browser------------------
// function makerequest() {
//   console.log('Button click');
 

//  axios.get('data.txt')
//  .then((res) => {
//     console.log(res);
//     console.log(res.data); // Hello, Rajendra chaudhary
//     document.getElementById('divdata').innerText = res.data;
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
//     url : 'data.txt',
//   }

//   const res = await axios(config);
//   console.log(res);
//   console.log(res.data);
//   const result = document.getElementById('divdata')
//   result.innerText = res.data;
// }




//----------------OR---------------------
// async function makerequest() {
//   console.log('Button click');

//   const res = await axios.get('data.txt');
//   console.log(res);
//   console.log(res.data);
//   const result = document.getElementById('divdata')
//   result.innerText = res.data;
// }










//---------async and await error Handling----------------------------
// async function makerequest() {
//   try {
//     console.log('Button click');
//   const res = await axios.get('data.txt');
//   console.log(res);
//   console.log(res.data);
//   const result = document.getElementById('divdata')
//    result.innerText = res.data;
//   } catch(err) {
//     console.log(err);
//   }
 
// }