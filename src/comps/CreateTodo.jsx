import React, { useContext, useEffect, useState } from "react";
import ApiUrl from "../comps/ApiUrl";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../context/Context";

const CreateTodo = () => {
  const [todo, setTodo] = useState("");
  const { setRefresh } = useContext(Context);

  const formHandler = async (e) => {
    e.preventDefault();
    const url = `${ApiUrl}/user/create`;
    try {
      const newTodo = await axios.post(
        todo === "" ? toast.error("Enter something") : url,
        { todo },
        { withCredentials: true }
      );
      const data = newTodo.data;
      toast.success(data.message);
      setRefresh((pre) => !pre);
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  return (
    <form className="createTodo" onSubmit={formHandler}>
      <input
        autoComplete="off"
        type="text"
        name="todo"
        placeholder="Task..."
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        value={todo}
      />

      <button>Add Task</button>
    </form>
  );
};

export default CreateTodo;
