import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import ApiUrl from "../comps/ApiUrl";
import { Navigate } from "react-router-dom";
import { Context } from "../context/Context";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, setIsAuth } = useContext(Context);

  const formHandler = async (e) => {
    e.preventDefault();
    const url = `${ApiUrl}/signup`;
    try {
      const createUser = await axios.post(
        url,
        { name, email, password },
        { withCredentials: true }
      );
      const data = await createUser.data;
      setIsAuth(true);
      toast.success(data.message);
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
        <h1>Signup</h1>
        <input
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
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
        <button>Signup</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default Signup;
