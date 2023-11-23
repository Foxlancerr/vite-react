import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-4 justify-center bg-slate-800 py-3 text-white">
      <Link to="/" className="text-2xl font-bold">Home</Link>
      <Link to="/about" className="text-2xl font-bold">About</Link>
      <Link to="/contact" className="text-2xl font-bold">Contact</Link>
      <Link to="/notFound" className="text-2xl font-bold">Not Found</Link>
    </nav>
  );
};

export default Navbar;
