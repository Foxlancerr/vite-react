import React, { useReducer } from "react";

function Counter() {
  const initailState = 0;

  const reducerFunction = (state, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducerFunction, initailState);

  return (
    <div className="flex justify-center align-middle">
      <div>
        <h2 className="text-center mt-[10px]">Counter: {count}</h2>
        <button
          onClick={() => dispatch("Increment")}
          className="bg-slate-100 px-[30px] rounded m-[10px]"
        >
          +
        </button>
        <button
          className="bg-slate-100 px-[30px] rounded m-[10px]"
          onClick={() => dispatch("Decrement")}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
