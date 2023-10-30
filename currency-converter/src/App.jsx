import { useFetchCurrency } from "./hooks/index";
import { InputBox } from "./components";
import bgImage from "./assets/bgImage.jpg";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [cvtAmount, setCvtAmount] = useState(0);

  // Custom Hooks is called
  const currencyInfo = useFetchCurrency(from);
  const currencyOptions = Object.keys(currencyInfo);

  // swap fuunction which will swap the curency to each other
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(cvtAmount);
    setCvtAmount(amount);
  };

  const convert = () => {
    setCvtAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-screen w-full bg-cover bg-center bg-opacity-0 bg-no-repeat flex justify-center items-center text-white"
    >
      <form
        className="w-3/5 bg-white bg-opacity-40 p-10 rounded-[10px] flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="flex flex-col relative gap-5">
          <InputBox
            label="From"
            onCurrencyChange={(currency) => {
              setFrom(currency);
            }}
            onAmountChange={(val) => {
              setAmount(val);
            }}
            currencyOptions={currencyOptions}
            amount={amount}
            selectCurrency={from}
          />
          <button
            className="bg-red-800 w-max px-[25px] py-[8px] rounded-[10px] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-70 hover:bg-opacity-100"
            onClick={swap}
          >
            Swap
          </button>
          <InputBox
            label="To"
            onCurrencyChange={(currency) => {
              setTo(currency);
            }}
            onAmountChange={(value) => {
              setAmount(value);
            }}
            currencyOptions={currencyOptions}
            amount={cvtAmount}
            selectCurrency={to}
          />
        </div>
        <button
          className="bg-red-800 font-bold px-[15px] py-[8px] rounded-[10px] bg-opacity-70 hover:bg-opacity-100"
          type="submit"
        >
          Convert
        </button>
      </form>
    </div>
  );
}

export default App;
