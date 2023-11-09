import { useState } from "react";
import { TodoProvider, useTodo, todoContext } from "./context/index";
function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => {
      prev.map((prevTodo) => (prev.id === id ? todo : prevTodo));
    });
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleTodoComplete = (id) => {
    setTodos((prev) => {
      prev.map((prevTodo) => (prev.id === id ? {completed: !prevTodo.completed,...prevTodo} : prevTodo));
    });
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodoComplete }}
    >
      <h1>Hello World</h1>
    </TodoProvider>
  );
}

export default App;
