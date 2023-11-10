import { useContext, createContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id:1,
            message:"hello",
            complete: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleTodoComplete: (id) => { },

})

export const useTodo = () => {
    return useContext(todoContext)
}

export const TodoProvider = todoContext.Provider;