import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

export default App;


/**
 * How React Work Behind The Scene
 * ******************************************************
 */

// import React from "react";
// import ReactDOM from "react-dom/client";
// const BehindScence = React.createElement(
//   "a",
//   {
//     ahref: "#",
//     target: "_blank",
//     class: "anchorTag",
//   },
//   "click me to visit...."
// );

// ReactDOM.createRoot(document.getElementById("root")).render(BehindScence);

// function App() {
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   );
// }

// export default App;

/**
 * Simple Javascripts
 * ***********************************************************
 */
// import ReactDom from 'react-dom/client';

// ReactDom.createRoot(document.getElementById('root'))

// //Simple JS 
// console.log(root)
// root.innerText = "Hello world"

// const h1 = document.createElement("h1");
// h1.innerHTML = "<h1>Hello world</h1>"
// root.append(h1)


