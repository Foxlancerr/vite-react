import React from "react";

const TodoList = ({ todo }) => {
  console.log(todo);
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 w-full">
        <input type="checkbox" />
        <input
          type="text"
          readOnly
          placeholder={todo.message}
          className="p-2 bg-red-200 border-none outline-none w-full mr-2 rounded-lg placeholder:text-red-800 placeholder:capitalize"
        />
      </div>
      <div className="flex gap-2">
        <button className="bg-blue-500 px-2 py-1 rounded font-bold">
          Edit
        </button>
        <button className="bg-red-800 text-white px-3 py-1 rounded font-bold">
          X
        </button>
      </div>
    </div>
  );
};

export default TodoList;
