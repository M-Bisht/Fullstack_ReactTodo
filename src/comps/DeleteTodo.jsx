import React, { useContext } from "react";
import axios from "axios";
import ApiUrl from "../comps/ApiUrl";
import toast from "react-hot-toast";
import { Context } from "../context/Context";

const DeleteTodo = ({ todoId }) => {
  const { setRefresh } = useContext(Context);
  const url = `${ApiUrl}/user/${todoId}`;
  const deleteHandle = async (e) => {
    try {
      const deleteResponse = await axios.delete(url, { withCredentials: true });
      toast.success(deleteResponse.data.message);
      setRefresh((pre) => !pre);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return <i onClick={deleteHandle} className="fa-solid fa-xmark" />;
};

export default DeleteTodo;
