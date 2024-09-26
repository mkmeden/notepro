import { IoIosLogOut } from "react-icons/io";
import React from 'react'
import authStore from '../stores/authStore'
const Logout = () => {
  
    const store=  authStore();
    return (
    <div>
      <button onClick={store.logout}><IoIosLogOut  className="text-5xl"/></button>
    </div>
  )
}

export default Logout
