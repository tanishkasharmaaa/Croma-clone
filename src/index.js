import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from "./Context/AuthContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <AuthContextProvider>
     <App />
     </AuthContextProvider>
   </BrowserRouter>
);

reportWebVitals();
