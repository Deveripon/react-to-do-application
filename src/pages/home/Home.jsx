import { Helmet } from "react-helmet";
import favicon from "../../assets/img/colored-pencils.png";
import ToDoInsertForm from "../../components/form/ToDoInsertForm";
import Header from "../../components/Heading/Header";
import ToDoList from "../../components/list/ToDoList";
import Nodata from "../../components/Nodata/Nodata";
import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";
import { MdDeleteForever, MdEditDocument } from "react-icons/md";
import LoadingBar from "react-top-loading-bar";

const Home = () => {
    const { todoList, setTodoList } = useContext(TodoContext);
    const [progress, setProgress] = useState(100);

    return (
        <>
            <LoadingBar color="teal" progress={progress} onLoaderFinished={() => setProgress(0)} />
            <Helmet>
                <meta charSet="utf-8" />
                <title>My TO DO</title>
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            </Helmet>
            <Header />
            <ToDoInsertForm />
            <ToDoList>
                {todoList.length > 0 ? (
                    todoList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="todo md:w-[50vw] w-full mx-3 bg-white py-3 px-8 my-1 flex justify-between items-center gap-4">
                                <p className="text-teal-500 font-subHeading ">{item}</p>
                                <div className="button-group flex gap-2">
                                    <button className="bg-green-500 text-white px-2 py-2 rounded-full transform duration-150 hover:bg-green-700">
                                        <MdEditDocument />
                                    </button>
                                    <button
                                        onClick={() => {
                                            console.log(todoList);
                                            todoList.splice(index, 1);
                                            console.log(todoList);
                                            setTodoList(todoList);
                                        }}
                                        className=" bg-red-700 text-white px-2 py-2 rounded-full transform duration-150 hover:bg-red-900">
                                        <MdDeleteForever />
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <Nodata text="No task found" />
                )}
            </ToDoList>
        </>
    );
};

export default Home;
