import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./app";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Orders from './orderData';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path = {'/'} element={<App />}/>
           <Route path = {'/orders'} element = {<Orders/>}/>

       </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
