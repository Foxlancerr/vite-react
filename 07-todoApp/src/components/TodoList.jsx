import React, { useState } from "react";
import { useTodo } from "../context";
const TodoList = ({ todo }) => {
  const { updateTodo, deleteTodo, toggleTodoComplete } = useTodo();
  const [msgInput, setmsgInput] = useState(todo.message);
  const [editable, setEditable] = useState(false);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, message: msgInput });
    setEditable(false);
  };
  console.log(todo.complete);

  const toggleComplete = () => {
    toggleTodoComplete(todo.id);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-2 w-full">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={toggleComplete}
        />
        <input
          type="text"
          readOnly={!editable}
          value={msgInput}
          onChange={(e) => {
            setmsgInput(e.target.value);
          }}
          className={`p-2 border-none outline-none w-full mr-2 rounded-lg placeholder:text-red-800 placeholder:capitalize ${
            todo.complete
              ? "bg-red-800  text-white line-through"
              : "bg-red-200 placeholder:overline"
          }`}
        />
      </div>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 px-2 py-1 rounded font-bold"
          onClick={() => {
            if (todo.complete) return;

            if (editable) {
              editTodo();
            } else setEditable((prev) => !prev);
          }}
          disabled={todo.complete}
        >
          {editable ? "📁" : "✏️"}
        </button>
        <button
          className="bg-red-800 text-white px-3 py-1 rounded font-bold"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoList;
