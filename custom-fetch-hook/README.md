## Live Demo :

<a href="http://psw-generator.surge.sh/">Live Demo</a>

## Language Used

1. HTML5
2. Tailwand CSS
3. JSX
4. React

## Functionality:

1. useState Hook
2. useEffect Hook
3. useCallback Hook
4. Inputs onChanges and onClick Events Handlar
5. Components Concepts Used

### useState Hook

```jsx
const [length, setLength] = useState("8");
const [char, setChar] = useState(false);
const [int, setInt] = useState(false);
const [password, setPassword] = useState("password");
```

### useCallback Hook

```jsx
const PswGen = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
  if (int) str += "0123456789";
  if (char) str += "@#$&%^&*()[]-_=+:;<=>?@";

  for (let i = 1; i <= length; i++) {
    let c = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(c);
  }
  setPassword(pass);
}, [length, password, char, int]);
```

### useEffect Hook

```jsx
useEffect(() => {
  PswGen();
}, [length, char]);
```

# Complete Code...
```jsx
import React, { useState, useCallback, useEffect } from "react";

const Passward = () => {
  const [length, setLength] = useState("8");
  const [char, setChar] = useState(false);
  const [int, setInt] = useState(false);
  const [password, setPassword] = useState("password");

  const PswGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
    if (int) str += "0123456789";
    if (char) str += "@#$&%^&*()[]-_=+:;<=>?@";

    for (let i = 1; i <= length; i++) {
      let c = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(c);
    }
    setPassword(pass);
  }, [length, password, char, int]);

  useEffect(() => {
    PswGen();
  }, [length, char]);

  return (
    <div>
      <div className="flex justify-center flex-col h-screen items-center">
        <h1 className="text-4xl font-bold text-center my-[20px]">
          Passward Generator
        </h1>
        <div className="bg-slate-200 p-10 rounded-3xl">
          <div className="flex bg-gray-300 rounded-full w-full overflow-hidden">
            <input
              className="bg-blue-500 text-white px-5 border-none outline-none py-2 w-full placeholder-white"
              type="text"
              value={password}
              readOnly
            />
            <label htmlFor="copy" className="py-2 px-5 cursor-pointer">
              Copy
            </label>
          </div>
          <div className="mt-10 flex gap-5 text-blue-500 font-bold">
            <div className="flex gap-2">
              <input
                type="range"
                id="length"
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="cursor-pointer border-none"
              />
              <label htmlFor="length">{length} Length</label>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="char"
                className="cursor-pointer"
                value={char}
                onChange={() => {
                  setChar((prev) => !prev);
                }}
              />
              <label htmlFor="char">Character</label>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="int"
                className="cursor-pointer"
                value={int}
                onChange={() => {
                  setInt((prev) => !prev);
                }}
              />
              <label htmlFor="int">Integers</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passward;
```
