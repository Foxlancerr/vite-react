import { useEffect, useState } from "react";
import { TodoForm, TodoList } from "./components/index";
import { TodoProvider } from "./context/index";
function App() {
  const [todos, setTodos] = useState([]);

  // when the browser loads if there have todos present in localStorage then render it.

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // if there have no values present in localStorage then we can set it.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
      prev.map((prevTodo) =>
        prev.id === id
          ? { completed: !prevTodo.completed, ...prevTodo }
          : prevTodo
      );
    });
  };
  console.log(todos);
  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodoComplete }}
    >
      <div className="flex flex-col gap-2 items-center h-screen bg-yellow-200 justify-start">
        <h1 className="text-5xl my-10 font-medium text-yellow-800">Todo App</h1>
        <div className="bg-yellow-500 w-[70%] h-max rounded-lg p-4 md:w-[50%] ">
          <TodoForm></TodoForm>
          <div className="flex flex-col gap-4 mt-5 w-full">
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoList todo={todo}></TodoList>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
