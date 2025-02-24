const image = document.querySelector('img');
const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     const xhr = new XMLHttpRequest();
//     console.log(xhr);

//     xhr.open("GET", 'https://dog.ceo/api/breeds/image/random');
//     xhr.send();

//     xhr.responseType = 'json';

//     xhr.addEventListener('load', () => {
//          console.log(xhr.response); // data
//         image.src = xhr.response.message;
//     })
// })




// button.addEventListener("click", () => {
//     const xhr = new XMLHttpRequest();
//     console.log(xhr);

//     xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//     xhr.send();

//     xhr.responseType = 'json';

//     xhr.addEventListener('load', () => {
//         console.log(xhr.response);
//         image.src = xhr.response.message;

//     })


// })




// ------------------OR---------------------------
// //AJAX Asynchronous JavaScript and XML
// /*
// XMLHTTP Request(XHR) is a browser API that allows us to make HTTP requests
// fetch
// axios is used in nodejs
// */
// let request=new XMLHttpRequest() //created a request object 
// //can request and send limited amount of data with the help of  this request object
// console.log(request)


// request.open("GET","https://feecq.github.io/api/users.json") //get to fetch the data from the server post to send the data to the server
// request.send() //asking to send the response  

// //at the moment in the response properties of the request object there is any value appearing then load event occurs

// request.addEventListener("load",()=>{
//   console.log(request.response)
//   let data=JSON.parse(request.response)
//   data.forEach(value=>{
//     let para=document.createElement("p")
//     para.innerText=value.name
//     document.body.appendChild(para)
//   })
// })


