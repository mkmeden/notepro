import React from 'react'
import authStore from '../stores/authStore'

const Login = ({setLogin,login}) => {
  
  const store = authStore();

  return (
    <div className=" z-10 px-16 w-96 py-20 border-t-2 border-l-2 border-white bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
      <form className="font-mont"  onSubmit={store.login}>

        <input
        name='email'
          type="email"
          placeholder="Email"
          value= {store.loginForm.email} onChange={store.updateLoginForm}
          className="w-full mt-4 p-3 rounded-xl border-2 border-l-white border-t-white border-r-gray-300 border-b-gray-300 bg-white bg-opacity-20 placeholder-black text-black focus:outline-none "
        />
        <input
        name='password'
          type="password"
          placeholder="Password"
          value= {store.loginForm.password} onChange={store.updateLoginForm}
          className="w-full p-3 mt-4 rounded-xl border-2 border-l-white border-t-white border-r-gray-300 border-b-gray-300 bg-white bg-opacity-20 placeholder-black text-black focus:outline-none "
        />
        <button
          type="submit"
          className="w-[50%] mt-20 p-3 rounded-md bg-black text-white font-bold hover:bg-gray-600 transition duration-300 mx-auto block"
        >
          Login
        </button>
      </form>

      <div className="flex flex-row mt-10 space-x-1">
        <h1 className="font-bold">Dont have an account?</h1> 
        <button onClick={()=>setLogin(!login)}  className="font-bold text-blue-500" href="/login">Signup</button>
      </div>
    </div>
  )
}

export default Login
