import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.module.scss";
//Lägg in reset-fil

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
