import React, { useEffect } from "react";
import authStore from "../stores/authStore";
import Login from "./Login";


const RequiredAuth = ({ children }) => {
  const store = authStore();
  
  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  });

  if (!store.loggedIn) {
    return (
      <div>
        <Login />
      </div>
    );
  }

  return <div>{children}</div>;
};

export default RequiredAuth;
