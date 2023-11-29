import { MdDeleteForever, MdEditDocument } from "react-icons/md";
const Todo = ({ children = "this is new incompleted task" }) => {
    return (
        <>
            <div className="todo w-[50vw] bg-white py-3 px-8 my-1 flex justify-between items-center gap-4">
                <p className="text-teal-500 font-subHeading ">{children}</p>
                <div className="button-group flex gap-2">
                    <button className="bg-green-500 text-white px-2 py-2 rounded-full transform duration-150 hover:bg-green-700">
                        <MdEditDocument />
                    </button>
                    <button className=" bg-red-700 text-white px-2 py-2 rounded-full transform duration-150 hover:bg-red-900">
                        <MdDeleteForever />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Todo;
