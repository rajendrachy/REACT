import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import FeedbackForm from "./assignmentReact/EmpFeedback";
import {App} from "./App";
// import ProductList from "./assignmentReact/Fetch";
// import WeatherApp from "./assignmentReact/weather";

// import { BrowserRouter } from "react-router";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);



root.render(
  // <BrowserRouter>
    <StrictMode> 
    <App />
    {/* <FeedbackForm /> */}
  {/* <ProductList /> */}
  {/* <WeatherApp /> */}
    </StrictMode>  
//  </BrowserRouter> 
);





