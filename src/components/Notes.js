import React from "react";
import notesStore from "../stores/notesStore";
const Notes = () => {
  const store = notesStore();
  
  return (
    <div>
      { (store.notes && (store.notes!==undefined) )&&
        store.notes.map((note) => (
          <div className="flex flex-col items-center justify-center m-10">
            <h2 className="text-2xl ">{note.title}</h2>
            <h3 className="text-xl">{note.body}</h3>
            <button
              onClick={() => store.deleteNote(note._id)}
              className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
            >
              Delete
            </button>
            <button
              onClick={() => store.toggleUpdate(note)}
              className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
            >
              Update
            </button>
          </div>
        ))}
    </div>
  );
};

export default Notes;
