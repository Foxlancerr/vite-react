import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) => {
    return isActive
      ? { backgroundColor: "white",color : "black" }
      : { backgroundColor: "transparent" };
  };
  return (
    // <nav className="flex gap-4 justify-center bg-slate-800 py-3 text-white">
    //   <Link to="/" className="text-2xl font-bold">Home</Link>
    //   <Link to="/about" className="text-2xl font-bold">About</Link>
    //   <Link to="/contact" className="text-2xl font-bold">Contact</Link>
    //   <Link to="/notFound" className="text-2xl font-bold">Not Found</Link>
    // </nav>
    
    <nav className="flex gap-4 justify-center bg-slate-800 py-3 text-white">
      <NavLink style={linkStyle} to="/" className="text-2xl font-bold">
        Home
      </NavLink>
      <NavLink
        style={linkStyle}
        to="/about"
        className="text-2xl font-bold"
      >
        About
      </NavLink>
      <NavLink
        style={linkStyle}
        to="/contact"
        className="text-2xl font-bold"
      >
        Contact
      </NavLink>
      <NavLink
        style={linkStyle}
        to="/product"
        className="text-2xl font-bold"
      >
        Product
      </NavLink>
      <NavLink
        style={linkStyle}
        to="/search"
        className="text-2xl font-bold"
      >
        Search
      </NavLink>
    </nav>
  );
};

export default Navbar;
