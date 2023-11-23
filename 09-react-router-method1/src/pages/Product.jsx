import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Product = () => {
    const linkStyle = ({ isActive }) => {
        return isActive
          ? { backgroundColor: "gray",color : "white" }
          : { backgroundColor: "transparent",color:"gray" };
      };
  return (
    <div className="flex items-center mt-3 flex-col">
      <h1 className="text-4xl">This is the Product Page</h1>
      <nav className="flex gap-2 ">
        <NavLink style={linkStyle} to="shirt" className="text-slate-600 font-bold text-2xl">
          Shirt
        </NavLink>
        <NavLink style={linkStyle} to="jeans" className="text-slate-600 font-bold text-2xl">Jeans</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Product;
