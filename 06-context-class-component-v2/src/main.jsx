import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CounterContextProvider from "./context/CounterContextProvider.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CounterContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </CounterContextProvider>
);
