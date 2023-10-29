import React from "react";

const Passward = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-[20px]">
        Passward Generator
      </h1>
      <div className="flex justify-center h-screen items-center">
        <div className="bg-red-400 p-10 rounded-3xl">
          <div className="flex bg-gray-300 rounded-full w-full overflow-hidden">
            <input
              className="bg-blue-500 text-white px-5 border-none outline-none py-2 w-full placeholder-white"
              type="text"
              placeholder="Password"
              readOnly
            />
            <label htmlFor="copy" className="py-2 px-5 cursor-pointer">
              Copy
            </label>
          </div>
          <div className="mt-10 flex gap-5">
            <div className="flex gap-2">
              <input type="range" id="length" />
              <label htmlFor="length">0 Length</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="char" />
              <label htmlFor="char">Character</label>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="int" />
              <label htmlFor="int">Integers</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passward;
