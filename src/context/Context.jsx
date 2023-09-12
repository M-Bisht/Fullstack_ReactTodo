import React, { createContext, useEffect, useState } from "react";
import App from "../App";
import ApiUrl from "../comps/ApiUrl";
import axios from "axios";

export const Context = createContext();

export const AppWrapper = () => {
  const [refresh, setRefresh] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Context.Provider value={{ refresh, setRefresh, isAuth, setIsAuth }}>
      <App />
    </Context.Provider>
  );
};
