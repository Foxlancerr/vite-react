import { useState } from "react";

function Counter() {
  // Javascript Way
  //   let counter = 15;

  // const increment = () => {
  //   // counter += 1;
  //   console.log(counter);
  // };
  // const decrement = () => {
  //   // counter -= 1;
  //   console.log(counter);
  // };

  let [counter, setCounter] = useState(15);
  const increment = () => {
    setCounter((counter = counter + 1));
    console.log(counter);
  };
  const decrement = () => {
    setCounter((counter = counter - 1));
    console.log(counter);
  };

  return (
    <div className="flex justify-center align-middle">
      <div>
        <h2 className="text-center mt-[10px]">Counter: {counter}</h2>
        <button
          onClick={increment}
          className="bg-slate-100 px-[30px] rounded m-[10px]"
        >
          +
        </button>
        <button
          className="bg-slate-100 px-[30px] rounded m-[10px]"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
