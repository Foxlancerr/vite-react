import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useSearchParams();
  const [arr, setArr] = useState([]);
  const [input, setInput] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    setArr((prev) => [search.get("name"), ...prev]);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center h-screen mt-6">
      <h1 className="text-4xl">Search Here</h1>
      <form className="">
        <div className="bg-slate-100 p-3 rounded mt-3 flex items-center">
          <input
            className="px-3 py-2 placeholder:text-gray-400 text-gray-600"
            type="text"
            value={input}
            placeholder="Type here..."
            onChange={(e) => {
                setSearch({name: e.target.value})
                setInput(e.target.value)
            }}
          />
          <button
            type="submit"
            onClick={onFormSubmit}
            className="text-[20px] text-white bg-slate-400 p-2 rounded hover:cursor-pointer hover:bg-slate-500"
          >
            Search
          </button>
        </div>
      </form>
      {arr.length == 0 ? (
        <h1 className="text-3xl mt-3"> No element is Present</h1>
      ) : (
        <div>
          {arr.map((value, index) => (
            <h1 className="pt-2 text-2xl capitalize" key={index}>
              {index + " : " + value}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
