import React, { useState } from "react";

const BackgroundColor = ({ children }) => {
  const [bgColor, SetBgColor] = useState("red");
  return (
    <div style={{ backgroundColor: bgColor }} className="w-full h-screen">
      {children}
      <div className="flex fixed bottom-10 p-2 bg-slate-500 gap-5 rounded-full">
        <button 
        onClick={()=> SetBgColor("red")}
        style={{ backgroundColor: "red"}} className="py-2 px-10 rounded-full text-white">
          Red
        </button>
        <button 
        onClick={()=> SetBgColor("blue")}
        style={{ backgroundColor: "blue"}} className="py-2 px-10 rounded-full text-white">
          Blue
        </button>
        <button 
        onClick={()=> SetBgColor("yellow")}
        style={{ backgroundColor: "yellow"}} className="py-2 px-10 rounded-full text-black">
          yellow
        </button>
       
      </div>
    </div>
  );
};

export default BackgroundColor;
