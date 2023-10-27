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
    // counter += 1;
    console.log(counter);
  };
  const decrement = () => {
    setCounter((counter = counter - 1));
    // counter -= 1;
    console.log(counter);
  };

  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Counter;
