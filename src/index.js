import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Appprovider } from "./context/Productcontext";
import { FilterContextProvider } from "./context/Filter_context";
import { Cartprovider } from "./context/Card_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Appprovider>
    <FilterContextProvider>
      <Cartprovider>
        <App />
      </Cartprovider>
    </FilterContextProvider>
  </Appprovider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
