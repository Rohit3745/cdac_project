import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Footer from "./Footer";
 
ReactDOM.render(
  <React.StrictMode>
    <App />

    <div style={{ bottom: 0, padding: "200px" }}>
      {" "}
      <Footer></Footer> 
    </div>
  </React.StrictMode>,

  document.getElementById("root")
);

reportWebVitals();
