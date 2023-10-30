import React from "react";

const InputBox = ({
  label = "From",
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency = "usd",
}) => {
  return (
    <div className="flex items-center justify-between bg-blue-800 bg-opacity-80 p-4 rounded-[10px] gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="From" className="font-bold text-[20px]">
          {label}
        </label>
        <input
          className="border-none outline-none px-[10px] py-[5px] text-blue-800 rounded-[8px]"
          type="number"
          id="from"
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold text-[18px]">Currency Type</p>
        <select
          className="border-none outline-none px-[10px] py-[5px] text-blue-800 rounded-[8px]"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOptions.map((cur) => (
            <option key={cur} value={cur}>
              {cur}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
