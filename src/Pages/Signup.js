import React from "react";
import authStore from "../stores/authStore";
import { useToast } from "@chakra-ui/react";

const Signup = ({ setLogin, login }) => {
  const store = authStore();
  const toast = useToast();
  const handleSubmit = (e) => {
    if (
      !store.signUpForm.email.length ||
      !store.signUpForm.password.length ||
      !store.signUpForm.name.length
    ) {
      e.preventDefault();

      return toast({
        title: "Empty Fields.",
        description: "Kindly fill all the fields",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    store.signup(e);
    setLogin(!login);
    toast({
      title: "Successful",
      description: "Successfully signed up",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <div className=" z-10 px-16 w-96 py-20 border-t-2 border-l-2 border-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
      <form
        className="font-mont"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          name="name"
          value={store.signUpForm.name}
          onChange={store.updateSignUpForm}
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-xl border-l-white border-t-white border-r-gray-300 border-b-gray-300 border-2 bg-white bg-opacity-20 placeholder-black text-black focus:outline-none "
        />
        <input
          name="email"
          type="email"
          value={store.signUpForm.email}
          onChange={store.updateSignUpForm}
          placeholder="Email"
          className="w-full mt-4 p-3 rounded-xl border-2 border-l-white border-t-white border-r-gray-300 border-b-gray-300 bg-white bg-opacity-20 placeholder-black text-black focus:outline-none"
        />
        <input
          name="password"
          type="password"
          value={store.signUpForm.password}
          onChange={store.updateSignUpForm}
          placeholder="Password"
          className="w-full p-3 mt-4 rounded-xl  border-l-white border-t-white border-r-gray-300 border-b-gray-300 border-2 bg-white bg-opacity-20 placeholder-black text-black focus:outline-none "
        />
        <button
          type="submit"
          className="w-[50%] mt-10 p-3 rounded-md bg-black text-white font-bold hover:bg-gray-600 transition duration-300 mx-auto block"
        >
          Sign Up
        </button>
      </form>

      <div className="flex flex-row mt-10 space-x-1">
        <h1 className="font-bold">Already have an account?</h1>{" "}
        <button
          onClick={() => setLogin(!login)}
          className="font-bold text-blue-500"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
