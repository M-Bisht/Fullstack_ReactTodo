import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import ApiUrl from "../comps/ApiUrl";
import { Context } from "../context/Context";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, setIsAuth } = useContext(Context);

  const formHandler = async (e) => {
    e.preventDefault();
    const url = `${ApiUrl}/login`;
    try {
      const loginUser = await axios.post(
        url,
        { email, password },
        { withCredentials: true }
      );
      const data = await loginUser.data;
      toast.success(data.message);
      setIsAuth(true);
      let checkUser = window.localStorage.getItem("isAuth");
      if (!checkUser) {
        window.localStorage.setItem("isAuth", "yes");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuth(false);
    }
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container">
      <form className="form" onSubmit={formHandler}>
        <h1>Login</h1>
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          autoComplete="off"
          type="text"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button>Login</button>
        <Link to="/signup">Signup</Link>
      </form>
    </div>
  );
};

export default Login;
