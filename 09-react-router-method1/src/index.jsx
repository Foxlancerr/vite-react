import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
import { BrowserRouter } from "react-router-dom";

root.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);

export default App;
