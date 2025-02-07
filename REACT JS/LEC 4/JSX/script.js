//JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the UI structure. 
//It allows you to write HTML-like code within JavaScript, making it easier to create and visualize components.
// Example: const element = <h1>Hello, JSX!</h1>;

// const h2 = <h2>Hello JSX</h2> // Use type="text/babel" in script tag
// console.log(h2);
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(h2);

//_______________ LINK -> https://github.com/procodrr/react-course/tree/main/04_jsx-and-babel





//const cont=React.createElement('container', null, "This is container");
const name = 'Rajendra Chaudhary';
//const h2 = <h2>Hello! {name}</h2> // Use curly bracket
const h2 = <h2>Hello {false.toString()}</h2> // Show => false, true, undefined , NUll usign -> toString()
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);
