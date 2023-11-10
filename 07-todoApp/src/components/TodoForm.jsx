import React, { useState } from "react";
import { useTodo } from "../context";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useTodo();
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.input.value);
    addTodo({ complete: false, message: e.target.input.value });
    setInput("")
  };
  return (
    <form className="mb-2" onSubmit={formSubmit}>
      <div className="w-[100%]  bg-white flex justify-between overflow-hidden  rounded-lg">
        <input
          type="text"
          value={input}
          name="input"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="write here..."
          className="px-2 outline-none border-none"
        />
        <button
          className="bg-yellow-700 py-2 px-2 font-bold outline-none border-none"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
