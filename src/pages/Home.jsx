import React from "react";
import Header from "../comps/Header";
import CreateTodo from "../comps/CreateTodo";
import GetTodo from "../comps/GetTodo";

const Home = () => {
  return (
    <>
      <Header />
      <main className="homeMain">
        <CreateTodo />
        <div className="getTodoWrapper">
          <GetTodo />
        </div>
      </main>
    </>
  );
};

export default Home;
