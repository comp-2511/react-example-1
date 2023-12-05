import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Person from "./components/Person";
import Header from "./components/Header";
import reportWebVitals from "./reportWebVitals";
import "bulma/css/bulma.css";
import Footer from "./components/Footer";
import People from "./components/People";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <People />
    <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
