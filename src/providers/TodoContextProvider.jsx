import { useState } from "react";
import TodoContext from "../context/TodoContext";
import { toast } from "react-toastify";

const TodoContextProvider = ({ children }) => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const todoHandler = () => {
        if (todo.length > 0) {
            todoList.push(todo);
            setTodoList([...todoList]);
            setTodo("");
            toast.success("To added to the list successfully");
        } else {
            toast.error("Please enter a task");
        }
    };

    return (
        <TodoContext.Provider value={{ todo, setTodo, todoHandler, todoList, setTodoList }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
