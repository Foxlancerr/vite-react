import React from "react";

const Button = () => {
  return (
    <div>
      <label htmlFor="mode" className="font-bold mr-2">
        switchMode
      </label>
      <input type="checkbox" id="mode" onChange=""/>
    </div>
  );
};

export default Button;
