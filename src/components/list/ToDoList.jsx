const ToDoList = ({ children }) => {
    return (
        <>
            <section className="todoList h-[68vh] overflow-y-scroll bg-gray-200 py-12 flex flex-col justify-center items-center">
                {children}
            </section>
        </>
    );
};

export default ToDoList;
