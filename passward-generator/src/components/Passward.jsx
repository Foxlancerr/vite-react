import React from "react";

const Passward = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-[20px]">Passward Generator</h1>
      <div className="flex justify-center">
        <div className="flex bg-gray-300 rounded-full w-2/4 overflow-hidden">
          <input
            className="bg-blue-500 text-white px-5 border-none outline-none py-2 w-full placeholder-white"
            type="text"
            placeholder="Password"
            readOnly
          />
          <label htmlFor="copy" className="py-2 px-5 cursor-pointer">Copy</label>
        </div>
      </div>
    </div>
  );
};

export default Passward;
