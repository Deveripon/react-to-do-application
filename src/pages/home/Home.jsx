import { Helmet } from "react-helmet";
import favicon from "../../assets/img/colored-pencils.png";
import ToDoInsertForm from "../../components/form/ToDoInsertForm";
import Header from "../../components/Heading/Header";
import ToDoList from "../../components/list/ToDoList";
import Todo from "../../components/Todo/Todo";
import Nodata from "../../components/Nodata/Nodata";
const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My TO DO</title>
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            </Helmet>
            <Header />
            <ToDoInsertForm />
            <ToDoList>
                {/* <Nodata text="No task found" /> */}
                <Todo>
                    Lorem ipsum dolor sit amet Lnsectetur adipisicing elit. Atque, pariatur.
                </Todo>
                <Todo>
                    Lorem ipsum dolor sit amet Lnsectetur adipisicing elit. Atque, pariatur.
                </Todo>
                <Todo>
                    Lorem ipsum dolor sit amet Lnsectetur adipisicing elit. Atque, pariatur.
                </Todo>
                <Todo>
                    Lorem ipsum dolor sit amet Lnsectetur adipisicing elit. Atque, pariatur.
                </Todo>
                <Todo>
                    Lorem ipsum dolor sit amet Lnsectetur adipisicing elit. Atque, pariatur.
                </Todo>
                <Todo>
                    Lorem ipsum dolor sit amet Lnsectetur adipisicing elit. Atque, pariatur.
                </Todo>
            </ToDoList>
        </>
    );
};

export default Home;
