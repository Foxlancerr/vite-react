import { useFetchCurrency } from "./hooks/index";
import { InputBox } from "./components";
import bgImage from "./assets/bgImage.jpg";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [cvtAmount, setCvtAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  // Custom Hooks is called
  const currencyInfo = useFetchCurrency(from);
  const currencyOptions = Object.keys(currencyInfo);

  // swap fuunction which will swap the curency to each other
  const swap = () => {
    setFrom(to);
    setTo(from);
    setCvtAmount(amount);
    setAmount(cvtAmount);
    console.log(amount, cvtAmount);
  };

  const convert = () => {
    setCvtAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="h-screen w-full bg-cover bg-center bg-opacity-0 bg-no-repeat flex justify-center items-center text-white "
    >
      
      <form
        className="w-3/4 bg-white bg-opacity-40 sm:p-10 p-5 rounded-[10px] flex flex-col sm:gap-5 gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="flex flex-col relative gap-5">
          <InputBox
            label="From"
            currencyOptions={currencyOptions}
            amount={amount}
            selectCurrency={from}
            onCurrencyChange={(currency) => {
              setFrom(currency);
            }}
            onAmountChange={(amount) => {
              setAmount(amount);
            }}
          />
          <button
            className="bg-red-800 w-max sm:px-[14px] px-[16px] sm:py-[8px] py-[4px] rounded-[10px] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-70 hover:bg-opacity-100"
            onClick={swap}
          >
            Swap
          </button>
          <InputBox
            label="To"
            currencyOptions={currencyOptions}
            amount={cvtAmount}
            selectCurrency={to}
            onCurrencyChange={(currency) => {
              setTo(currency);
            }}
            onAmountChange={(amount) => {
              setCvtAmount(amount);
            }}
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
