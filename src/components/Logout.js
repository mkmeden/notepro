import React from 'react'
import authStore from '../stores/authStore'

const Logout = () => {

    const store = authStore()
  
    if(store.loggedIn === true )
    {
        return (
            <button
            onClick={store.logout}
            className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
          >
            Logout
          </button>
        )
    }

  return (
    <div>
      You are now logged out
    </div>
  )
}

export default Logout
