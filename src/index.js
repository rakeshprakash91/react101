import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import AppContextProvider from "./store/app-contenxt";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
