import Nodata from "../Nodata/Nodata";
import Todo from "../Todo/Todo";

const ToDoList = ({ children }) => {
    return (
        <>
            <section className="todoList h-[65vh] overflow-y-scroll bg-gray-200 mt-3 py-12 flex flex-col justify-center items-center">
                {children}
            </section>
        </>
    );
};

export default ToDoList;
