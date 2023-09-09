import React, { useContext, useEffect, useState } from "react";
import ApiUrl from "../comps/ApiUrl";
import axios from "axios";
import toast from "react-hot-toast";
import DeleteTodo from "./DeleteTodo";
import { Context } from "../context/Context";

const GetTodo = () => {
  const [getTodo, setGetTodo] = useState([]);
  const { refresh } = useContext(Context);

  const fetchTodo = async (e) => {
    const url = `${ApiUrl}/user`;
    try {
      const todoResponse = await axios.get(url, { withCredentials: true });
      setGetTodo(todoResponse.data.curUser);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchTodo();
  }, [refresh]);

  return (
    <>
      {getTodo.map((elem, index) => {
        return (
          <div className="getTodo" key={index}>
            <h3>{elem.todo}</h3>
            <DeleteTodo todoId={elem._id} />
          </div>
        );
      })}
    </>
  );
};

export default GetTodo;
