# React-router-dom-practive1

<a href="https://react-router-dom-practice1.surge.sh/">Check Live Demo</a>

# How to configure the router-Dom

- Install the react-router-dom

```
npm install react-router-dom@latest
```

- In the main file(Parent file) import the following codes

```jsx
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
```

- configures its routes by its child components

```jsx
import { Route, Routes } from "react-router-dom";
import { Home, About, Contact, NotFound, Product } from "./pages";
import {
  Navbar,
  Shirt,
  Jeans,
  EachShirtDetails,
  EachJeanDetails,
} from "./components";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />

        {/* Nested routes */}

        <Route path="/product" element={<Product />}>
          {/* index will follow the parent routes and render its components */}
          <Route index element={<Shirt />}></Route>
          <Route path="shirt" element={<Shirt />} />
          <Route path="jeans" element={<Jeans />} />

          {/* Dynamics Routing */}
          <Route path="shirt/:id" element={<EachShirtDetails />} />
          <Route path="jeans/:id" element={<EachJeanDetails />} />
        </Route>
        {/* not found routes */}
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
```

- Suppose we have a Navbar and we can implement that by visiting each page when the user click with each menu.We can create a Navbar.js File and implement the following code.

```jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) => {
    return isActive
      ? { backgroundColor: "white", color: "black" }
      : { backgroundColor: "transparent" };
  };
  return (
    // <nav className="flex gap-4 justify-center bg-slate-800 py-3 text-white">
    //   <Link to="/" className="text-2xl font-bold">Home</Link>
    //   <Link to="/about" className="text-2xl font-bold">About</Link>
    //   <Link to="/contact" className="text-2xl font-bold">Contact</Link>
    //   <Link to="/notFound" className="text-2xl font-bold">Not Found</Link>
    // </nav>

    //the Link will have not the active class, so if we want the active class then we
    // used the Navlink

    <nav className="flex gap-4 justify-center bg-slate-800 py-3 text-white">
      <NavLink style={linkStyle} to="/" className="text-2xl font-bold">
        Home
      </NavLink>
      <NavLink style={linkStyle} to="/about" className="text-2xl font-bold">
        About
      </NavLink>
      <NavLink style={linkStyle} to="/contact" className="text-2xl font-bold">
        Contact
      </NavLink>
      <NavLink style={linkStyle} to="/product" className="text-2xl font-bold">
        Product
      </NavLink>
    </nav>
  );
};

export default Navbar;
```
