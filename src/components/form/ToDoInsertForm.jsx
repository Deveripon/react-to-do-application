import { useContext } from "react";
import { MdAddTask } from "react-icons/md";
import TodoContext from "../../context/TodoContext";

const ToDoInsertForm = () => {
    const { todo, setTodo, todoHandler } = useContext(TodoContext);
    return (
        <>
            <section className="todoInsertSection bg-gray-200 mt-[1px] flex justify-center items-center py-6">
                <input
                    className="w-96 outline-none border-none px-4 py-2 rounded-tl-2xl rounded-bl-2xl text-teal-500 "
                    type="text"
                    name="todo"
                    id="todo"
                    value={todo}
                    placeholder="Insert a to-do"
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                />
                <button
                    onClick={todoHandler}
                    className="flex justify-center items-center gap-2 px-4 py-2 rounded-tr-2xl rounded-br-2xl  hover:bg-teal-700 text-white transition-all transform duration-150  bg-teal-500">
                    <MdAddTask /> Add to-do
                </button>
            </section>
        </>
    );
};

export default ToDoInsertForm;
