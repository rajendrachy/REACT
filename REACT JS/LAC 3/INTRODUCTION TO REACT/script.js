// _____ Create Element in React________________
// ---------React.createElement-------------
// let result = React.createElement('h1');
// console.log(result);



// let result = React.createElement('h1', {className : 'subheading'}, 'Hello react');
// console.log(result);
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(result);


// _______________While adding class_______________________
// ------------Use -> document.body.className = 'hello'------------------





// ------------Again-----practice----------------
// const h2 = document.createElement('h2');
// // console.log(h2);
// // console.dir(h2);
// document.querySelector('#root').append(h2);
// h2.innerText = "Hello Js, My name is Rajendra Chaudhary..";




// -------------Again------------------------
// -------------render---------- or->append -------------------
const container = React.createElement(
    'div', 
    { className: 'container', id: 'container' }, 
[
    React.createElement('section', {key:1}, [
        React.createElement('p', {key:1}, 'The React full course in 2025.'

        ),
        React.createElement(
            'img',
            {key:2, style:{width:'200px', backgroundColor:'red', margin:'20px'}, src:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'},
        ),

        React.createElement(
            'img',
            {key:3, style: {width:'200px', backgroundColor: "green", margin: '20px'}, src:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'},
            
        ), 

        React.createElement('input', {key:4, style:{padding: '10px', outline: 'none'}, placeholder: 'Enter Your Name..'} ,

        )
    ]),
]
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);
