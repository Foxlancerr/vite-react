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
    <div className="sm:flex-row flex-col flex items-cente justify-between bg-blue-800 bg-opacity-80 p-4 rounded-[10px] sm:gap-5 gap-1">
      <div className="flex flex-col gap-2">
        <label htmlFor={label} className="font-bold sm:text-[20px] w-max">
          {label}
        </label>
        <input
          className="border-none outline-none sm:py-[4px] px-[10px] py-[2px] text-blue-800 rounded-[8px]"
          type="number"
          id={label}
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold sm:text-[20px]">Currency Type</p>
        <select
          className="border-none outline-none px-[10px] sm:py-[4px] py-[2px] text-blue-800 rounded-[8px]"
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
