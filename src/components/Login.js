import React from "react";
import authStore from "../stores/authStore";

const Login = () => {
  
  const store  = authStore();

  return (
    <div>
      <form action="" onSubmit={store.login}>
        <input type="email" name="email" value= {store.loginForm.email} onChange={store.updateLoginForm} />
        <input type="password" name="password" value= {store.loginForm.password} onChange={store.updateLoginForm}/>
        <button
          type="submit"
          className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
