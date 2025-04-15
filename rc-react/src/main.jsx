import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import FeedbackForm from "./assignmentReact/EmpFeedback";
import {App} from "./App";
// import ProductList from "./assignmentReact/Fetch";
// import WeatherApp from "./assignmentReact/weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/* <FeedbackForm /> */}
  {/* <ProductList /> */}
  {/* <WeatherApp /> */}
  </StrictMode>
);





