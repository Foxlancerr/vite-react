import React from "react";

const InputBox = () => {
  return (
    <div className="flex items-center justify-between bg-blue-800 p-4 rounded-[10px] gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="From" className="font-bold text-[20px]">From</label>
        <input
          className="border-none outline-none px-[10px] py-[5px] text-blue-800 rounded-[8px]"
          type="number"
          id="from"
          value={0}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[18px]" >Currency Type</p>
        <select
          name=""
          id=""
          className="border-none outline-none px-[10px] py-[5px] text-blue-800 rounded-[8px]"
        >
          <option value="usd">Usd</option>
          <option value="usd">Inr</option>
        </select>
      </div>
    </div>
  );
};

export default InputBox;
