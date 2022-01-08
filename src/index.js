// This File is also going to be mostly Untouched. This will be downloaded as it
//is to your system when you create a react app.

import { StrictMode } from "react";
import ReactDOM from "react-dom";

//The App File is imported Here
import App from "./App";

//The root element present in HTML file is accessed here using this simple
//JavaScript syntax.

const rootElement = document.getElementById("root");

//Our App file is rendered here by accessing the root element of HTML

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
