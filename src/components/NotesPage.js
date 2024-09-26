import React from 'react'
import CreateForm from './CreateForm'
import UpdateForm from './UpdateForm'
import Notes from './Notes'

const NotesPage = () => {
  return (
    <div className="flex justify-center">
    <div className="flex flex-col space-y-20">
      <CreateForm />
      <UpdateForm />
    </div>
    <Notes />
  </div>
  )

}

export default NotesPage