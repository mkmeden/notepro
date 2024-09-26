import React from "react";
import authStore from "../stores/authStore";


const Signup = () => {

  const store = authStore();

  return (
    <div>
      <form action="" onSubmit={store.signup}>
        <input
          type="email"
          name="email"
          value={store.signUpForm.email}
          onChange={store.updateSignUpForm}
        />
        <input
          type="password"
          name="password"
          value={store.signUpForm.password}
          onChange={store.updateSignUpForm}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
