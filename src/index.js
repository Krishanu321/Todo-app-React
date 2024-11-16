import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // This assumes index.css is in the src folder
import App from "./App"; // Ensure this path is correct
import "./index.css"; // Optional, if you have a global CSS file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // This matches <div id="root"></div> in index.html
);
