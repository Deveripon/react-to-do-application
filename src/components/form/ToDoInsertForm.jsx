import { MdAddTask } from "react-icons/md";
const ToDoInsertForm = () => {
    return (
        <>
            <section className="todoInsertSection bg-gray-200 mt-3 flex justify-center items-center py-6">
                <input
                    className="w-96 outline-none border-none px-4 py-2 rounded-tl-2xl rounded-bl-2xl text-teal-500 "
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Insert a to-do"
                />
                <button className="flex justify-center items-center gap-2 px-4 py-2 rounded-tr-2xl rounded-br-2xl  hover:bg-teal-700 text-white transition-all transform duration-150  bg-teal-500">
                    <MdAddTask /> Add to-do
                </button>
            </section>
        </>
    );
};

export default ToDoInsertForm;
