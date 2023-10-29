import React, { useState, useRef, useCallback, useEffect } from "react";

const Passward = () => {
  const [length, setLength] = useState("8");
  const [char, setChar] = useState(false);
  const [int, setInt] = useState(false);
  const [password, setPassword] = useState("password");

  const pswRef = useRef(null);

  const pswClip = useCallback(() => {
    pswRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password]);

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
        <h1 className="text-2xl font-bold text-center my-[20px] sm:text-4xl">
          Passward Generator
        </h1>
        <div className="bg-slate-200 p-7 rounded-3xl sm:p-10">
          <div className="flex bg-gray-300 rounded-[10px] w-full overflow-hidden flex-col sm:flex-row sm:rounded-full">
            <input
              className="bg-white text-blue-500 px-5 border-none outline-none py-2 w-full placeholder-white"
              type="text"
              value={password}
              ref={pswRef}
              readOnly
            />
            <button
              htmlFor="copy"
              className="py-2 px-5 cursor-pointer bg-blue-500 text-white font-bold hover:bg-blue-300"
              onClick={pswClip}
            >
              Copy
            </button>
          </div>
          <div className="mt-10 flex gap-5 flex-col text-blue-500 font-bold sm:flex-row">
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
