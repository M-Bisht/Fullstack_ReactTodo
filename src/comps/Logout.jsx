import React, { useContext } from "react";
import axios from "axios";
import ApiUrl from "../comps/ApiUrl";
import toast from "react-hot-toast";
import { Context } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Logout = () => {
  const { isAuth } = useContext(Context);
  const navigate = useNavigate()
  let user = window.localStorage.getItem("isAuth")
  const logoutHandler = async () => {
    const url = `${ApiUrl}/logout`;
    const response = await axios.get(url, { withCredentials: true });
    toast.success(response.data.message);
    window.localStorage.clear();
    navigate('/login')
  };
  return (
    <>
      {user ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <Link to={"/login"} className="loginLink">
          Login
        </Link>
      )}
    </>
  );
};

export default Logout;
