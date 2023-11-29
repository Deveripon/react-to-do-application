const Header = () => {
    return (
        <>
            <section className="header bg-gray-200 py-8">
                <div className="header-content md:px-44 px-3 flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-teal-500 font-heading">Todo App</h1>
                    <p className="text-sm text-gray-600">A simple to-do app</p>
                </div>
            </section>
        </>
    );
};

export default Header;
