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
async function makerequest() {
  try {
    console.log('Button click');
  const res = await axios.get('data.json');
  console.log(res);
  console.log(res.data.name);
  const result = document.getElementById('divdata')
   result.innerText = res.data.name;
  } catch(err) {
    console.log(err);
  }
}

